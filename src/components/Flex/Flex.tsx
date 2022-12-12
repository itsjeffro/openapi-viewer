import styled from "@emotion/styled";

interface Props {
  alignItems?: string
  flexDirection?: string
  columnGap?: string
  height?: string
  padding?: string
  gap?: string
}

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props: Props) => props.flexDirection || null};
  align-items: ${(props: Props) => props.alignItems || null};
  column-gap: ${(props: Props) => props.columnGap || null};
  height: ${(props: Props) => props.height || null};
  padding: ${(props: Props) => props.padding || null};
  gap: ${(props: Props) => props.gap || null};
`;
