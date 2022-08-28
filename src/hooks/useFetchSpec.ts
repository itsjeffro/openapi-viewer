import {useContext, useEffect} from "react";
import axios from "axios";
import {OpenApiContext} from "../contexts/openApiContext";

const useFetchSpec = () => {
  const { state, dispatch } = useContext(OpenApiContext);

  useEffect(() => {
    const callApi = () => {
      if (state.openApi !== null) {
        return;
      }

      axios
        .get('/api/openapi')
        .then(response => {
          dispatch({type: 'SUCCESS', payload: response.data })
        });
    }

    callApi();
  }, [])
}

export default useFetchSpec
