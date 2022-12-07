import Button from "components/Button";
import Card from "components/Card";
import ArrowRightIcon from "components/icons/ArrowRight";
import LikeIcon from "components/icons/LikeIcon";
import Text from "components/Text";
import Title from "components/Title";
import { colors } from "config/styles";
import { FC } from "react";
import { SnippetProps } from "types";
import { useId } from "utils";

const CTA: FC<SnippetProps> = ({ title, text, buttonText, buttonHref, buttonId }) => {
  const id = useId();

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @media screen and (max-width: 640px) {
              div.${id} {
                flex-direction: column !important;
              }
            }
          `,
        }}
      />
      <Card
        className={id}
        style={{
          backgroundColor: colors.blue.light2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <div>
          <Title>{title}</Title>
          <Text>{text}</Text>
        </div>
        <div style={{ flexShrink: 0 }}>
          <Button href={buttonHref} id={buttonId?.trim() || undefined}>
            {buttonText} <ArrowRightIcon style={{ width: "1.2em", marginLeft: "8px" }} color={colors.white} />
          </Button>
        </div>
      </Card>
    </>
  );
};

export default CTA;
