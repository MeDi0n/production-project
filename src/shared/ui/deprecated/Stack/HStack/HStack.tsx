import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;

/**
 * Устарел используем новые компоменты из папки redesigned
 * @deprecated
 */
export const HStack = (props: HStackProps) => {
  return (
    <Flex
      direction="row"
      {...props}
    />
  );
};
