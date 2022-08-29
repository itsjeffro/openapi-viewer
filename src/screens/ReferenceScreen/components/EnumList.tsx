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
            <span className="pill pill__grey text-bold">{ option }</span>{ total === (index + 1) ? '' : ', ' }
          </span>
        )
      }) }
    </p>
  )
}

export default EnumList
