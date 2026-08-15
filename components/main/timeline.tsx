import React from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  return (
    <div className="relative ml-2 border-l border-line pl-8">
      {data.map((item, index) => (
        <div key={index} className="relative pb-12 last:pb-0">
          <span className="absolute -left-[35px] top-1 h-[9px] w-[9px] rounded-full border border-zinc-500 bg-background">
            <span className="absolute inset-[2px] rounded-full bg-zinc-500" />
          </span>
          <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
            {item.title}
          </p>
          <div className="mt-3">{item.content}</div>
        </div>
      ))}
    </div>
  );
};
