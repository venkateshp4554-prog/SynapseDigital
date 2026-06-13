import React from 'react';
export const SkeletonCard: React.FC = () => (
  <div className="animate-pulse rounded-3xl border border-slate-200 bg-slate-100 p-5 dark:border-zinc-800 dark:bg-zinc-900">
    <div className="h-48 rounded-3xl bg-slate-200 dark:bg-zinc-800" />
    <div className="mt-4 space-y-3">
      <div className="h-5 w-3/4 rounded-full bg-slate-200 dark:bg-zinc-800" />
      <div className="h-4 w-1/2 rounded-full bg-slate-200 dark:bg-zinc-800" />
      <div className="flex items-center gap-2">
        <div className="h-9 w-24 rounded-full bg-slate-200 dark:bg-zinc-800" />
        <div className="h-9 w-28 rounded-full bg-slate-200 dark:bg-zinc-800" />
      </div>
    </div>
  </div>
);
export default SkeletonCard;
