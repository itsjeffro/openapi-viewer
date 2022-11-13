import React from "react";
import styled from '@emotion/styled'

interface Props {
  children: React.ReactNode
}

const Container = styled.div((props: Props) => ({
  padding: '0 30px',
  maxWidth: '1300px',
  margin: '0 auto',
}))

export default Container
