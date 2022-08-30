import {Path} from "../../../lib/OpenApi/Paths";

interface Props {
  paths: Path[]
}

const GeneralOnThisPage = ({ paths }: Props) => {
  return (
    <>
      <p>On this page:</p>

      <ul>
        { paths.map((path: Path, index: number) => {
          const pathSummary = path.summary || `${path.method.toUpperCase()} ${path.name}`;

          return (
            <li key={`on-this-page-${index}`}>
              <a
                href={ `#${pathSummary.replaceAll(' ', '-')}` }
                title={ `Go to ${pathSummary}` }
              >{ pathSummary }</a>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default GeneralOnThisPage
