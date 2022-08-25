import {useEffect, useState} from "react";
import axios from "axios";

const HomeScreen = () => {
  const [spec, setSpec] = useState({})
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
    return <>Loading...</>
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

        { spec.servers.map((server) => (
          <div className="list__item">
            { server.url }
          </div>
        ))}
      </div>
    </>
  )
}

export default HomeScreen
