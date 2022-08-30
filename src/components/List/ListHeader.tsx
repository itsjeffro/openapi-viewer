import React from "react";

interface Props {
  children: React.ReactNode
  style?: any
}

const ListHeader = ({ children }: Props) => {
  return (
    <div className="list__header">
      { children }
    </div>
  )
}

export default ListHeader
