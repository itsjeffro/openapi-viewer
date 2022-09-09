import Text from "../../../components/Text";

const RequiredText = ({ isRequired }) => {
  const styles = {
    color: '#d63a07',
    display: isRequired ? 'inline-block' : 'none'
  };

  return <Text style={ styles }>Required.</Text>
}

export default RequiredText
