import { FC } from "react";

type InputProps = JSX.IntrinsicElements["input"];

const Input: FC<InputProps> = ({ ...rest }) => {
  return <input className="border text-sm w-full border-solid border-gray-300 rounded px-3 py-2" {...rest} />;
};

export default Input;
