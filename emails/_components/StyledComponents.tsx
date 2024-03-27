import { Text as UnstyledText, TextProps } from '@react-email/components';

export const Text = (props: TextProps) => {
  const { ...forwardProps } = props;
  return <UnstyledText {...forwardProps} className="text-xl font-sans" />;
};
