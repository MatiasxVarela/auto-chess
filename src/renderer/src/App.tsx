import styled from 'styled-components'

import { GlobalStyles } from './globalStyled'
import PurchaseBar from './components/PurchaseBar/PurchaseBar'

const MainDiv = styled.div`
  width: 100vw;
  height: 100vh;
`

function App(): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <MainDiv>
        <PurchaseBar />
      </MainDiv>
    </>
  )
}

export default App
