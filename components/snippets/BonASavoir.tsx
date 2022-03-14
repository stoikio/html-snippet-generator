import Card from "components/Card";
import LikeIcon from "components/icons/LikeIcon";
import Text from "components/Text";
import Title from "components/Title";
import { colors } from "config/styles";
import { FC } from "react";
import { SnippetProps } from "types";

const BonASavoir: FC<SnippetProps> = ({ title, text }) => {
  return (
    <Card
      icon={<LikeIcon color={colors.blue.primary} />}
      style={{
        backgroundColor: colors.blue.light,
      }}
    >
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Card>
  );
};

export default BonASavoir;
