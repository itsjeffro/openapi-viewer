import { Text } from '../../components/Text';

interface EnumListProps {
  enums: string[];
}

export const EnumList = ({ enums }: EnumListProps) => {
  const total = enums.length;

  return (
    <Text as="p">
      Options:{' '}
      {enums.map((option: string, index: number) => {
        return (
          <span key={option}>
            <Text as="code" fontWeight="medium">
              {option}
            </Text>
            {total === index + 1 ? '' : ', '}
          </span>
        );
      })}
    </Text>
  );
};
