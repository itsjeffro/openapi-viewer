interface CardHeaderProps {
  children: React.ReactNode
}

const CardHeader = (props: CardHeaderProps) => {
  return (
    <div className="card__header">
      { props.children }
    </div>
  )
}

export default CardHeader
