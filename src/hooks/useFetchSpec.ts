import { useContext, useEffect } from 'react';
import axios from 'axios';
import { StateContext } from '../state/stateProvider';

const useFetchSpec = () => {
  const { state, dispatch } = useContext(StateContext);

  useEffect(() => {
    const callApi = () => {
      if (state.openApi.data !== null) {
        return;
      }

      axios.get('/api/openapi').then((response) => {
        dispatch({ type: 'OPEN_API_SUCCESS', payload: response.data });
      });
    };

    callApi();
  }, []);
};

export default useFetchSpec;
