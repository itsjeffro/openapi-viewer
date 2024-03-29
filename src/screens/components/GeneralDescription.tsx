import { Text } from '../../components/Text';

interface Props {
  tagDescription: string;
}

export const GeneralDescription = ({ tagDescription }: Props) => {
  if (!tagDescription) {
    return <></>;
  }

  return (
    <Text as="p" fontSize="large" disableMargin>
      {tagDescription}
    </Text>
  );
};
