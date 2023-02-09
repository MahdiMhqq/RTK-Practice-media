import React, { HTMLAttributes, ReactNode } from "react";

import CircleSpinner from "components/CircleSpinner";

interface IButtonProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, "className"> {
  className?: string;
  children: ReactNode;
  loading?: boolean;
}

function Button({
  className = "",
  children,
  loading = false,
  ...rest
}: IButtonProps) {
  return (
    <button
      className={`flex items-center justify-center px-3 py-2 text-center font-bold text-white rounded-md cursor-pointer bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 transition gap-x-2 select-none ${
        loading ? "!bg-gray-600 cursor-not-allowed" : ""
      } ${className}`}
      disabled={loading}
      {...rest}
    >
      {loading ? <CircleSpinner /> : <>{children}</>}
    </button>
  );
}

export default Button;
