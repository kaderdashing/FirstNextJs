import React from "react";

export default function Header(
  {
    title="simple title",
    body="simple body",
    secondBody
  }
) {
  return (
    <div className="mt-20 ml-20">
      <div className="flex items-center flex-col">
      <div className="text-3xl font-bold">{title}</div>
      <div className="mt-4">
        {body}
        {secondBody && <p>{secondBody}</p>}
      </div>
      </div>
    </div>
  );
}
