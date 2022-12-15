import styled from '@emotion/styled';

interface Props {
  variant?: string;
  theme?: any;
}

export const Badge = styled.span((props: Props) => {
  return {
    display: 'inline-block',
    fontSize: props.theme.fontSize.small,
    marginRight: '10px',
    textTransform: 'uppercase',
    padding: '10px 14px 8px',
    lineHeight: 1,
    borderRadius: '15px',
    background: '#0c5ecc',
    color: props.theme.fontColor.white,
  };
});
