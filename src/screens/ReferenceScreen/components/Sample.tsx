import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { Card, CardHeader } from '../../../components/Card';
import { Text } from '../../../components/Text';
import { Badge } from '../../../components/Badge';
import exampleBuilder from '../../../lib/exampleBuilder';
import * as styles from '../../../styles';

interface SampleProps {
  host: string;
  method: string;
  defaultPathKey: string;
  path: any;
}

const Sample = ({ host, method, defaultPathKey, path }: SampleProps) => {
  const body = path?.requestBody?.content['application/json'] || null;
  const bodySchema = body?.schema || null;

  let example = exampleBuilder(method, host, defaultPathKey, bodySchema, path);

  return (
    <Card>
      <CardHeader>
        <Badge>
          <Text fontWeight="medium">{method}</Text>
        </Badge>{' '}
        {defaultPathKey}
      </CardHeader>
      <SyntaxHighlighter language="bash" customStyle={styles.highlighter}>
        {example}
      </SyntaxHighlighter>
    </Card>
  );
};

export default Sample;
