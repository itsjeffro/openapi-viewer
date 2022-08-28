import React, {Reducer, useReducer} from "react";

// State

interface StateInterface {
  openApi: any
  isFetching?: boolean
}

const initialState: StateInterface = {
  openApi: null,
  isFetching: true
};

// Reducer

interface ActionInterface {
  type: 'REQUEST' | 'SUCCESS'
  payload: StateInterface
}

const reducer = (state: StateInterface, action: ActionInterface): StateInterface => {
  switch (action.type) {
    case 'REQUEST':
      return { ...state, isFetching: true }
    case 'SUCCESS':
      return { isFetching: false, openApi: action.payload }
    default:
      return state
  }
}

// Context

interface Context {
  state: any;
  dispatch: React.Dispatch<ActionInterface>;
}

interface Props {
  children: any
}

const OpenApiProvider: React.FC<any> = (props: Props) => {
  const [state, dispatch] = useReducer(
    reducer as any,
    initialState as any
  );

  return (
    <OpenApiContext.Provider value={{ state, dispatch }}>
      {props.children}
    </OpenApiContext.Provider>
  )
};

export const OpenApiContext = React.createContext<Context>({} as any);

export default OpenApiProvider
