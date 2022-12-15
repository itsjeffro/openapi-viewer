import styled from '@emotion/styled';
import { memo } from 'react';

export interface Props {
  display?: string;
  flex?: string | number;
  flexDirection?: string;
  padding?: string | number;
  paddingRight?: string | number;
  paddingLeft?: string | number;
  paddingTop?: string | number;
  paddingBottom?: string | number;
  marginRight?: string | number;
  marginLeft?: string | number;
  marginTop?: string | number;
  marginBottom?: string | number;
  height?: string | number;
  width?: string | number;
  maxWidth?: string | number;
  maxHeight?: string | number;
  overflowX?: string;
  overflowY?: string;
  gap?: string | number;
  alignItems?: string;
  columnGap?: string | number;
}

const BoxBase = styled.div`
  display: ${(props: Props) => props.display};

  flex: ${(props: Props) => props.flex};
  flex-direction: ${(props: Props) => props.flexDirection || null};

  align-items: ${(props: Props) => props.alignItems || null};
  column-gap: ${(props: Props) => props.columnGap || null};

  gap: ${(props: Props) => props.gap || null};

  padding: ${(props: Props) => props.padding || null};
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
`;

export const Box = memo(BoxBase);
