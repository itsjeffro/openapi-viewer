import React from "react";

interface Props {
  children: React.ReactNode
  style?: any
}

const ListItem = ({ children }: Props) => {
  return (
    <div className="list__item">
      { children }
    </div>
  )
}

export default ListItem
