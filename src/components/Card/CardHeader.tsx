import React from "react";

interface Props {
  children: React.ReactNode
}

const CardHeader = (props: Props) => {
  return (
    <div className="card__header">
      { props.children }
    </div>
  )
}

export default CardHeader
