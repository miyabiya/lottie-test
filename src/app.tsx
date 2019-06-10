import * as React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { Color } from './brand'
import logo from './logo.svg'
import Lottie from 'react-lottie'
import animationData from './favorite.json'
const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}
const App = () => {
  const [visible, setVisible] = useState(false)
  const handleClick = () => setVisible(!visible)
  return (
    <Wrapper>
      <Header>
        <Logo src={logo} />
        <H1>Welcome to React</H1>
      </Header>
      <button onClick={() => handleClick()}>
        start
      </button>
      <ContentWrapper>
        {
          visible ? 
          <Lottie options={defaultOptions} height={500} width={500} />
          :
          null
        }
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
`
const Header = styled.header`
  background-color: ${Color.Primary};
  height: 150px;
  padding: 20px;
  color: white;
`
const Logo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 80px;
  @keyframes App-logo-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`
const H1 = styled.h1`
  font-size: 1.5em;
`

const ContentWrapper = styled.div`
  background: ${Color.Bg};
`

export default App
