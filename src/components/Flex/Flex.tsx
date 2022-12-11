import styled from "@emotion/styled";

interface Props {
  alignItems?: string
  columnGap?: string
  height?: string
  padding?: string
}

export const Flex = styled.div`
  display: flex;
  align-items: ${(props: Props) => props.alignItems || null};
  column-gap: ${(props: Props) => props.columnGap || null};
  height: ${(props: Props) => props.height || null};
  padding: ${(props: Props) => props.padding || null};
`;
