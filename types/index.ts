export type SnippetProps = {
  title: string;
  text: string;
  buttonText?: string;
  buttonHref?: string;
  buttonId?: string;
};

export type IconProps = JSX.IntrinsicElements["svg"] & {
  color?: string;
};
