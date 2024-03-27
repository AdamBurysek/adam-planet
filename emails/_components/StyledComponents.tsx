/* eslint-disable react/jsx-props-no-spreading */
import type { TextProps } from '@react-email/components';
import { Text as UnstyledText } from '@react-email/components';

export const Text = (props: TextProps) => {
  const { ...forwardProps } = props;
  return <UnstyledText {...forwardProps} className="text-xl font-sans" />;
};
