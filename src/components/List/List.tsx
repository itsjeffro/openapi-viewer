import React from "react";

interface Props {
  children: React.ReactNode
  style?: any
}

const List = ({ style, children }: Props) => {
  return (
    <div style={ style } className="list">
      { children }
    </div>
  )
}

export default List;
