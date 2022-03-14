import { FC, ReactNode, useMemo } from "react";

type CardProps = JSX.IntrinsicElements["div"] & {
  icon?: ReactNode;
};

const Card: FC<CardProps> = ({ style, icon, children, ...rest }) => {
  const combinedStyles = useMemo(() => {
    let tmpStyle = {
      padding: "25px",
      borderRadius: "4px",
      maxWidth: "740px",
      margin: "0 auto",
      ...style,
    };

    if (icon) {
      tmpStyle = {
        ...tmpStyle,
        display: "grid",
        gridTemplateColumns: "25px 1fr",
        gap: "15px",
      };
    }

    return tmpStyle;
  }, [style, icon]);

  return (
    <div style={combinedStyles} {...rest}>
      {icon}
      {icon ? <div>{children}</div> : children}
    </div>
  );
};

export default Card;
