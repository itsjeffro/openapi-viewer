import {useEffect, useState} from "react";
import axios from "axios";
import { Spec } from '../contracts/SchemaInterace'

const HomeScreen = () => {
  const [spec, setSpec] = useState<Spec>(Object)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getSpec = async () => {
      const api = await axios.get('/api/openapi');

      setSpec(api.data)
      setIsLoading(false)
    }

    getSpec();
  }, [])

  if (isLoading) {
    return (
      <header className="header">
        <h1>Loading...</h1>
      </header>
    )
  }

  return (
    <>
      <header className="header">
        <h1>Home</h1>
      </header>

      <div className="section">
        <h2>Introduction</h2>

        <p>{ spec.info.description }</p>
      </div>

      <div className="section">
        <h2>Servers</h2>

        <ul>
          { spec.servers.map((server, index: number) => (
            <li key={ `server-${index}` }>
              { server.url }
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default HomeScreen
