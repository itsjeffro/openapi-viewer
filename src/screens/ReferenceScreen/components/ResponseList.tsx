import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import schemaParser from "../../../lib/schemaParser";
import {useState} from "react";
import {Card, CardHeader} from '../../../components/Card'
import * as styles from "../../../styles";

const ResponseList = ({ responseBody }: any) => {
  const responses = Object.keys(responseBody.responses).map((httpCode: string) => {
    const status = responseBody.responses[httpCode];

    return {
      httpCode: httpCode,
      description: status.description,
      schema: status.content ? status.content['application/json'].schema : null,
    }
  })

  const responseHttpCodes = responses.map((response) => response.httpCode)

  const [selectedHttpCode, setSelectedHttpCode] = useState(responseHttpCodes[0])
  const [selectedResponseTab, setSelectedResponseTab] = useState('example')

  return (
    <div className="endpoint-details__response">
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
            { responseHttpCodes.map((responseHttpCode) => (
              <option key={ responseHttpCode } value={ responseHttpCode }>{ responseHttpCode }</option>
            )) }
          </select>
        </CardHeader>

        <div
          style={{ display: selectedResponseTab !== 'example' ? 'block' : 'none' }}
        >
          { responses.map((response) => {
            const display = selectedHttpCode === response.httpCode ? 'block' : 'none';

            return (
              <div
                key={ `schema-${response.httpCode}` }
                style={ { display: display } }
              >
                <SyntaxHighlighter language="json" customStyle={ styles.highlighter }>
                  { JSON.stringify(response.schema, null, 4) }
                </SyntaxHighlighter>
              </div>
            )
          }) }
        </div>

        <div
          style={{ display: selectedResponseTab === 'example' ? 'block' : 'none' }}
        >
          { responses.map((response) => {
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
                  { JSON.stringify(example, null, 4) }
                </SyntaxHighlighter>
              </div>
            )
          }) }
        </div>
      </Card>
    </div>
  )
}

export default ResponseList
