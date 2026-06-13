import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', children, ...props }) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold transition-all duration-200';
  const variantClasses =
    variant === 'secondary'
      ? 'bg-slate-100 text-slate-900 border border-slate-200 hover:bg-slate-200 dark:bg-zinc-900 dark:text-slate-100 dark:border-zinc-800 dark:hover:bg-zinc-800'
      : variant === 'ghost'
      ? 'bg-transparent text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
      : 'bg-[#2ea44f] text-white hover:bg-[#3fb950] shadow-sm';

  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
      {children}
    </button>
  );
};
export default Button;
