import React from "react";

interface ILoadingProps {
  customClass?: string;
}

function Loading({ customClass = "" }: ILoadingProps) {
  return (
    <p
      className={`text-center font-bold text-emerald-500 ${customClass}`}
    >
      Loading...
    </p>
  );
}

export default Loading;
