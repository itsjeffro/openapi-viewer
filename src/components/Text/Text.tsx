import styled from '@emotion/styled';

interface Props {
  fontWeight?: string;
  fontSize?: string;
  theme?: any;
  as?: string;
  disableMargin?: boolean;
}

interface Sizes {
  [key: string]: string;
}

interface Weights {
  [key: string]: number;
}

interface Typography {
  [key: string]: any;
}

const weights: Weights = {
  regular: 300,
  medium: 500,
  bold: 700,
};

const sizes: Sizes = {
  medium: '1.1rem',
  large: '1.25rem',
};

const typography: Typography = {
  h1: {
    fontSize: '1.875rem',
    marginBottom: '15px',
  },
  h2: {
    fontSize: '1.5rem',
    margin: '0 0 30px',
  },
  h3: {
    fontSize: '1.25rem',
    marginBottom: '16px',
  },
  h4: {
    fontSize: '1rem',
    marginBottom: '16px',
  },
  h5: {
    fontSize: '0.875rem',
    fontWeight: 600,
    padding: '15px 0',
  },
  p: {
    margin: '0 0 16px',
  },
  code: {
    fontFamily: 'Inter, Avenir, Helvetica, Arial, sans-serif',
    padding: '1px 9px',
    lineHeight: '1.5em',
    display: 'inline-block',
    borderRadius: '5px',
    fontSize: '.875rem',
    background: '#eeefef',
  },
};

export const Text = styled.span((props: Props) => {
  const fontSize = props.fontSize || '';
  const fontWeight = props.fontWeight || '';
  const disableMargin = props.disableMargin || false;

  return {
    fontWeight: fontWeight ? weights[fontWeight] : null,
    fontSize: fontSize ? sizes[fontSize] : null,
    ...(props.as ? typography[props.as] : null),
    ...(disableMargin && {
      margin: 0,
    }),
  };
});
