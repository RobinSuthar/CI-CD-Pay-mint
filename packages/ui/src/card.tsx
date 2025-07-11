import React from "react";

export function Card({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}): JSX.Element {
  return (
    <div className="border p-6 bg-white rounded-xl bg-[#ededed]">
      <h1 className="text-2xl border-b pb-4">{title}</h1>
      <p>{children}</p>
    </div>
  );
}
