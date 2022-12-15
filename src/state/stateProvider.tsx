import React, { useReducer } from 'react';

// State and reducer

interface StateInterface {
  openApi: {
    isFetching: boolean;
    data: any;
  };
}

interface ActionInterface {
  type: 'OPEN_API_REQUEST' | 'OPEN_API_SUCCESS';
  payload: StateInterface;
}

const initialState: StateInterface = {
  openApi: {
    isFetching: true,
    data: null,
  },
};

export const reducer = (state: StateInterface, action: ActionInterface): StateInterface => {
  switch (action.type) {
    case 'OPEN_API_REQUEST':
      return {
        ...state,
        openApi: {
          ...state.openApi,
          isFetching: true,
        },
      };

    case 'OPEN_API_SUCCESS':
      return {
        ...state,
        openApi: {
          ...state.openApi,
          isFetching: false,
          data: action.payload,
        },
      };

    default:
      return state;
  }
};

// Context

interface Context {
  state: any;
  dispatch: React.Dispatch<ActionInterface>;
}

interface Props {
  children: any;
}

const StateProvider: React.FC<any> = (props: Props) => {
  const [state, dispatch] = useReducer(reducer as any, initialState as any);

  return <StateContext.Provider value={{ state, dispatch }}>{props.children}</StateContext.Provider>;
};

export const StateContext = React.createContext<Context>({} as any);

export default StateProvider;
