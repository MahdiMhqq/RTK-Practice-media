import React, { HTMLAttributes, ReactNode } from "react";

import CircleSpinner from "components/CircleSpinner";

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  loading?: boolean;
}

function Button({ children, loading = false, ...rest }: IButtonProps) {
  return (
    <button
      className={`w-[12ch] flex items-center justify-center px-3 py-2 text-center font-bold text-white rounded-md cursor-pointer bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 transition gap-x-2 ${
        loading ? "!bg-gray-600 cursor-not-allowed" : ""
      }`}
      disabled={loading}
    >
      {loading ? <CircleSpinner /> : <>{children}</>}
    </button>
  );
}

export default Button;
