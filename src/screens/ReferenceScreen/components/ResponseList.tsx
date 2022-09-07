import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import schemaParser from "../../../lib/schemaParser";
import {useState} from "react";
import {Card, CardHeader} from '../../../components/Card'
import * as styles from "../../../styles";

const ResponseList = ({ responses }: any) => {
   responses = Object.keys(responses).map((httpCode: string) => {
    const status = responses[httpCode];

    const statusContent = status.content.hasOwnProperty('application/json')
      ? status.content['application/json']
      : {};

    const schema = statusContent['schema'] || null;

    return {
      httpCode: httpCode,
      description: status.description,
      schema: schema,
    }
  })

  const responseHttpCodes = responses.map((response: any) => response.httpCode)

  const [selectedHttpCode, setSelectedHttpCode] = useState(responseHttpCodes[0])
  const [selectedResponseTab, setSelectedResponseTab] = useState('example')

  return (
    <Card>
      <div className="card__header card__nav">
        <button
          className={ `card__nav-tab ${selectedResponseTab === 'example' ? 'active' : ''}` }
          onClick={ () => setSelectedResponseTab('example') }
        >Example response</button>
        <button
          className={ `card__nav-tab ${selectedResponseTab !== 'example' ? 'active' : ''}` }
          onClick={ () => setSelectedResponseTab('schema') }
        >Response schema</button>
      </div>

      <CardHeader>
        <span className="label__http-code">Status:</span>
        <select
          className="form-input"
          onChange={ (e) => setSelectedHttpCode(e.target.value) }
        >
          { responseHttpCodes.map((responseHttpCode: string) => (
            <option key={ responseHttpCode } value={ responseHttpCode }>{ responseHttpCode }</option>
          )) }
        </select>
      </CardHeader>

      <div
        style={{ display: selectedResponseTab !== 'example' ? 'block' : 'none' }}
      >
        { responses.map((response: any) => {
          const display = selectedHttpCode === response.httpCode ? 'block' : 'none';

          return (
            <div
              key={ `schema-${response.httpCode}` }
              style={ { display: display } }
            >
              <SyntaxHighlighter language="json" customStyle={ styles.highlighter }>
                { JSON.stringify(response.schema, null, 2) }
              </SyntaxHighlighter>
            </div>
          )
        }) }
      </div>

      <div
        style={{ display: selectedResponseTab === 'example' ? 'block' : 'none' }}
      >
        { responses.map((response: any) => {
          const display = selectedHttpCode === response.httpCode ? 'block' : 'none';

          let example = schemaParser(response.schema || {});

          if (!example) {
            example = response.description
          }

          return (
            <div
              key={ `section-${response.httpCode}` }
              style={ { display: display } }
            >
              <SyntaxHighlighter language="json" customStyle={ styles.highlighter }>
                { JSON.stringify(example, null, 2) }
              </SyntaxHighlighter>
            </div>
          )
        }) }
      </div>
    </Card>
  )
}

export default ResponseList
