import EnumList from './EnumList';
import RequiredText from './RequiredText';
import { List, ListItem } from '../../components/List';
import { Text } from '../../components/Text';
import { Flex } from '../../components/Flex';
import { Box } from '../../components/Box';
import { Divider } from '../../components/Divider';

interface ParameterDetailsProps {
  heading: string;
  parameters: any[];
}

export const ParameterDetails = ({ heading, parameters }: ParameterDetailsProps) => {
  return (
    <List style={{ display: parameters.length === 0 ? 'none' : 'block' }}>
      <Text as="h5">{heading}</Text>

      {parameters.map((parameter: any) => (
        <Box key={parameter.name}>
          <Divider />
          <ListItem>
            <Flex alignItems="center" columnGap="10px">
              <Text as="code" fontWeight="medium">
                {parameter.name}
              </Text>
              <Box marginRight="auto">{parameter.schema.type}</Box>
              <RequiredText isRequired={parameter.required} />
            </Flex>

            {parameter.description ? <Text as="p">{parameter.description}</Text> : ''}

            {parameter.schema.enum ? <EnumList enums={parameter.schema.enum} /> : ''}
          </ListItem>
        </Box>
      ))}
    </List>
  );
};
