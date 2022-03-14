import { colors, fonts } from "config/styles";
import { FC } from "react";
import { generateId, useId } from "utils";

type ButtonProps = JSX.IntrinsicElements["a"];

const Button: FC<ButtonProps> = ({ ...rest }) => {
  const id = useId();

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            a.${id}:hover {
              background-color: ${colors.blue.primary}ee !important;
            }
          `,
        }}
      />
      <a
        target="_blank"
        rel="noopener noreferrer"
        className={id}
        style={{
          backgroundColor: colors.blue.primary,
          color: colors.white,
          fontFamily: fonts.jakarta,
          border: "none",
          padding: "10px 16px 10px 16px",
          borderRadius: "2px",
          display: "flex",
          alignItems: "center",
          fontSize: "15px",
          cursor: "pointer",
          textDecoration: "none",
        }}
        {...rest}
      />
    </>
  );
};

export default Button;
