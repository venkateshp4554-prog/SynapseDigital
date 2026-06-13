import { useEffect, useRef } from 'react';

type Options = {
  intensity?: number; // degrees
  enableGyro?: boolean;
};

function clamp(v: number, a = -1, b = 1) {
  return Math.max(a, Math.min(b, v));
}

export function useTilt(targetRef: React.RefObject<HTMLElement | null>, options: Options = {}) {
  const { intensity = 8, enableGyro = true } = options;
  const frame = useRef<number | null>(null);
  const target = useRef({ rx: 0, ry: 0 });
  const current = useRef({ rx: 0, ry: 0 });

  useEffect(() => {
    const el = targetRef.current;
    if (!el) return;

    const inner = el.querySelector('[data-tilt]') as HTMLElement | null || el as HTMLElement;

    const ease = 0.12;

    function onMove(xNorm: number, yNorm: number) {
      // xNorm and yNorm are -0.5..0.5
      const ry = clamp(xNorm * 2) * intensity; // rotateY
      const rx = clamp(yNorm * 2) * intensity; // rotateX
      target.current.rx = rx;
      target.current.ry = ry;
    }

    function handleMouseMove(e: MouseEvent) {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      onMove(x, y);
    }

    function handleLeave() {
      target.current.rx = 0;
      target.current.ry = 0;
    }

    let gyroListener: ((ev: DeviceOrientationEvent) => void) | null = null;

    if (enableGyro && typeof window !== 'undefined' && 'DeviceOrientationEvent' in window) {
      gyroListener = (ev: DeviceOrientationEvent) => {
        if (ev.gamma == null || ev.beta == null) return;
        // gamma: left-right [-90,90], beta: front-back [-180,180]
        const gx = (ev.gamma / 90) || 0; // -1..1
        const gy = (ev.beta / 180) || 0; // -1..1
        onMove(gx * 0.6, gy * 0.6);
      };
      try {
        window.addEventListener('deviceorientation', gyroListener, true);
      } catch (err) {
        // ignore
      }
    }

    function update() {
      // lerp current -> target
      current.current.rx += (target.current.rx - current.current.rx) * ease;
      current.current.ry += (target.current.ry - current.current.ry) * ease;
      if (inner) {
        inner.style.transform = `rotateX(${current.current.rx.toFixed(2)}deg) rotateY(${current.current.ry.toFixed(2)}deg) translateZ(8px)`;
      }
      frame.current = requestAnimationFrame(update);
    }

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleLeave);
    frame.current = requestAnimationFrame(update);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleLeave);
      if (gyroListener) window.removeEventListener('deviceorientation', gyroListener as EventListener, true);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [targetRef, intensity, enableGyro]);
}

export default useTilt;
