import React from "react";

interface IErrorProps {
  customClass?: string;
  error: any;
}

function Error({ error, customClass = "" }: IErrorProps) {
  return (
    <p className={`text-center font-bold text-red-600 ${customClass}`}>
      {error?.message ?? "Oops! Some network error happened!"}
    </p>
  );
}

export default Error;
