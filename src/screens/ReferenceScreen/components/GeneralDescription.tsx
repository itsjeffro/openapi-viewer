import { Text } from '../../../components/Text';

interface Props {
  tagDescription: string;
}

const GeneralDescription = ({ tagDescription }: Props) => {
  if (!tagDescription) {
    return <></>;
  }

  return (
    <Text as="p" fontSize="large" disableMargin>
      {tagDescription}
    </Text>
  );
};

export default GeneralDescription;
