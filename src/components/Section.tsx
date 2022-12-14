import React from "react";
import styled from '@emotion/styled';

interface Props {
  children: React.ReactNode
}

const Section = styled.section((props: Props) => ({
  paddingTop: '30px',
  paddingBottom: '30px',
}))

export default Section
