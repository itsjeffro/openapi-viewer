import styled from "@emotion/styled";

interface Props {
  flex?: string | number
  paddingRight?: string | number
  paddingLeft?: string | number
  paddingTop?: string | number
  paddingBottom?: string | number
  marginRight?: string | number
  marginLeft?: string | number
  marginTop?: string | number
  marginBottom?: string | number
  height?: string | number
  width?: string | number
  maxWidth?: string | number
  maxHeight?: string | number
  overflowX?: string
  overflowY?: string
}

export const Box = styled.span`
    flex: ${(props: Props) => props.flex};

    padding-right: ${(props: Props) => props.paddingRight};
    padding-left: ${(props: Props) => props.paddingLeft};
    padding-top: ${(props: Props) => props.paddingTop};
    padding-bottom: ${(props: Props) => props.paddingBottom};
    margin-right: ${(props: Props) => props.marginRight};
    margin-left: ${(props: Props) => props.marginLeft};
    margin-top: ${(props: Props) => props.marginTop};
    margin-bottom: ${(props: Props) => props.marginBottom};

    width: ${(props: Props) => props.width};
    max-width: ${(props: Props) => props.maxWidth};
    height: ${(props: Props) => props.height};
    max-height: ${(props: Props) => props.maxHeight};

    overflow-x: ${(props: Props) => props.overflowX};
    overflow-y: ${(props: Props) => props.overflowY};
  }
`;
