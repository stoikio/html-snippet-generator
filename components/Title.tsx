import { fonts } from "config/styles";
import { FC } from "react";

interface TitleProps {}

const Title: FC<TitleProps> = ({ children }) => {
  return (
    <div
      style={{
        fontSize: "18px",
        fontWeight: "500",
        fontFamily: fonts.jakarta,
        color: "#323232",
        marginBottom: "15px",
      }}
    >
      {children}
    </div>
  );
};

export default Title;
