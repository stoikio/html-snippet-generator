import { fonts } from "config/styles";
import { FC } from "react";

interface TextProps {}

const Text: FC<TextProps> = ({ children }) => {
  return (
    <div
      style={{
        fontSize: "18px",
        fontFamily: fonts.georgia,
        color: "#323232",
        lineHeight: "1.6em",
      }}
    >
      {children}
    </div>
  );
};

export default Text;
