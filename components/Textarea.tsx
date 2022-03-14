import { FC } from "react";

type TextareaProps = JSX.IntrinsicElements["textarea"];

const Textarea: FC<TextareaProps> = ({ ...rest }) => {
  return <textarea className="border !text-sm h-44 border-gray-300 w-full rounded px-3 py-2" {...rest} />;
};

export default Textarea;
