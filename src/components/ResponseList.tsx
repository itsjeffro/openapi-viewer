import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import schemaParser from "../lib/schemaParser";

const ResponseList = ({ responseBody }) => {
  const style = {
    background: '#f6f8fa',
    margin: 0,
    padding: '15px',
    fontSize: '.75rem',
    fontFamily: 'monospace',
    lineHeight: '.75rem'
  };

  const responses = Object.keys(responseBody.responses).map((httpCode: string) => {
    return {
      httpCode: httpCode,
      ...responseBody.responses[httpCode].content['application/json'].schema,
    }
  })

  const firstExample = responses[0];

  const parsedExample = schemaParser(firstExample);

  return (
    <div className="endpoint-details__response">
      <div className="card">
        <div className="card__header">Status: { firstExample.httpCode }</div>
        <SyntaxHighlighter language="json" customStyle={ style }>
          { JSON.stringify(parsedExample, null, 4) }
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

export default ResponseList
