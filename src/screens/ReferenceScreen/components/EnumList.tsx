import Text from "../../../components/Text";

interface EnumListProps {
  enums: string[]
}

const EnumList = ({ enums }: EnumListProps) => {
  const total = enums.length;

  return (
    <p>Options:{' '}
      { enums.map((option: string, index: number) => {
        return (
          <span key={ option }>
            <Text fontWeight="medium" className="pill pill__grey">{ option }</Text>{ total === (index + 1) ? '' : ', ' }
          </span>
        )
      }) }
    </p>
  )
}

export default EnumList
