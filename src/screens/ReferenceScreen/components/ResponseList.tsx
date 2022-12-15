import { ChangeEvent, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { Card, CardHeader } from '../../../components/Card';
import { Flex } from '../../../components/Flex';
import { Text } from '../../../components/Text';
import { Select } from '../../../components/Select';
import { Divider } from '../../../components/Divider';
import { Tab, Tabs } from '../../../components/Tabs';
import schemaParser from '../../../lib/schemaParser';
import * as styles from '../../../styles';

const ResponseList = ({ responses }: any) => {
  responses = Object.keys(responses).map((httpCode: string) => {
    const status = responses[httpCode];

    const statusContent = status.content.hasOwnProperty('application/json') ? status.content['application/json'] : {};

    const schema = statusContent['schema'] || null;

    return {
      httpCode: httpCode,
      description: status.description,
      schema: schema,
    };
  });

  const responseHttpCodes = responses.map((response: any) => response.httpCode);
  const [selectedHttpCode, setSelectedHttpCode] = useState(responseHttpCodes[0]);
  const [selectedResponseTab, setSelectedResponseTab] = useState('example');

  return (
    <Card>
      <Tabs>
        <Tab
          className={selectedResponseTab === 'example' ? 'active' : ''}
          onClick={() => setSelectedResponseTab('example')}
        >
          Example response
        </Tab>
        <Tab
          className={selectedResponseTab !== 'example' ? 'active' : ''}
          onClick={() => setSelectedResponseTab('schema')}
        >
          Response schema
        </Tab>
      </Tabs>

      <Divider />

      <CardHeader>
        <Flex alignItems="center" columnGap="10px">
          <Text>Status:</Text>
          <Select onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectedHttpCode(e.target.value)}>
            {responseHttpCodes.map((responseHttpCode: string) => (
              <option key={responseHttpCode} value={responseHttpCode}>
                {responseHttpCode}
              </option>
            ))}
          </Select>
        </Flex>
      </CardHeader>

      <div style={{ display: selectedResponseTab !== 'example' ? 'block' : 'none' }}>
        {responses.map((response: any) => {
          const display = selectedHttpCode === response.httpCode ? 'block' : 'none';

          return (
            <div key={`schema-${response.httpCode}`} style={{ display: display }}>
              <SyntaxHighlighter language="json" customStyle={styles.highlighter}>
                {JSON.stringify(response.schema, null, 2)}
              </SyntaxHighlighter>
            </div>
          );
        })}
      </div>

      <div style={{ display: selectedResponseTab === 'example' ? 'block' : 'none' }}>
        {responses.map((response: any) => {
          const display = selectedHttpCode === response.httpCode ? 'block' : 'none';

          let example = schemaParser(response.schema || {});

          if (!example) {
            example = response.description;
          }

          return (
            <div key={`section-${response.httpCode}`} style={{ display: display }}>
              <SyntaxHighlighter language="json" customStyle={styles.highlighter}>
                {JSON.stringify(example, null, 2)}
              </SyntaxHighlighter>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default ResponseList;
