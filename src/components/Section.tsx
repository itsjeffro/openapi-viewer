import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode
}

const Section = styled.section((props: Props) => ({
  paddingTop: '30px',
  paddingBottom: '30px',
}))

export default Section
