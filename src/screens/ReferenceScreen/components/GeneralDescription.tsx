interface Props {
  tagDescription: string
}

const GeneralDescription = ({ tagDescription }: Props) => {
  if (!tagDescription) {
    return <></>
  }

  return (
    <p>{ tagDescription }</p>
  )
}

export default GeneralDescription
