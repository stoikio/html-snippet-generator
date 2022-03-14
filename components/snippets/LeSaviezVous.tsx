import Card from "components/Card";
import BulbIcon from "components/icons/BulbIcon";
import LikeIcon from "components/icons/LikeIcon";
import Text from "components/Text";
import Title from "components/Title";
import { colors } from "config/styles";
import { title } from "process";
import { FC } from "react";
import { SnippetProps } from "types";

const LeSaviezVous: FC<SnippetProps> = ({ text, title }) => {
  return (
    <Card
      icon={<BulbIcon color={colors.yellow.primary} />}
      style={{
        backgroundColor: colors.yellow.light,
      }}
    >
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Card>
  );
};

export default LeSaviezVous;
