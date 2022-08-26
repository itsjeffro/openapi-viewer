import useFetchSpec from "../hooks/useFetchSpec";

const HomeScreen = () => {
  const { isLoading, data } = useFetchSpec();

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

        <p>{ data.info.description }</p>
      </div>

      <div className="section">
        <h2>Servers</h2>

        <ul>
          { data.servers.map((server, index: number) => (
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
