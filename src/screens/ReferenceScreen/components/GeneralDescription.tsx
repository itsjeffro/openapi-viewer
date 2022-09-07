import Text from "../../../components/Text";

interface Props {
  tagDescription: string
}

const GeneralDescription = ({ tagDescription }: Props) => {
  if (!tagDescription) {
    return <></>
  }

  return (
    <Text as="p" fontSize="medium">{ tagDescription }</Text>
  )
}

export default GeneralDescription
