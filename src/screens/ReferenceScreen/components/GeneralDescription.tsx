interface Props {
  tagDescription: string
}

const GeneralDescription = ({ tagDescription }: Props) => {
  if (!tagDescription) {
    return <></>
  }

  return (
    <div className="endpoint-general__description">
      <p>{ tagDescription }</p>
    </div>
  )
}

export default GeneralDescription
