import {useEffect, useState} from "react";
import {Spec} from "../contracts/SchemaInterace";
import axios from "axios";

const useFetchSpec = () => {
  const [data, setData] = useState<Spec>(Object)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const callApi = async () => {
      const api = await axios.get('/api/openapi');

      setData(api.data)
      setIsLoading(false)
    }

    callApi();
  }, [])

  return {
    isLoading,
    data
  }
}

export default useFetchSpec
