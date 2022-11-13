import Text from "../../../components/Text";

interface Props {
  isRequired?: boolean;
}

const RequiredText = ({ isRequired }: Props) => {
  const styles = {
    color: '#d63a07',
    display: isRequired ? 'inline-block' : 'none'
  };

  return <Text style={ styles }>Required.</Text>
}

export default RequiredText
