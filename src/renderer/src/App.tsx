import { pool } from './modules/champsPool/pool'
import { useState } from 'react'
import styled from 'styled-components'

import { GlobalStyles } from './globalStyled'
import Buylist from './components/BuyList'

const MainDiv = styled.div`
  width: 100vw;
  height: 100vh;
`
const PurchaseDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #f0f0f0;
  padding: 10px;
`

function App(): JSX.Element {
  const [ArrayChamp, SetArrayChamp] = useState(pool.getBuyPool(9))

  const handleOnClick = (): void => {
    const newPoolToBoy = pool.getBuyPool(9)
    SetArrayChamp(newPoolToBoy)
  }
  return (
    <>
      <GlobalStyles />
      <MainDiv>
        <PurchaseDiv>
          <button>lvl up</button>
          <button onClick={handleOnClick}>tuki</button>
          <Buylist arrayChamp={ArrayChamp} />
        </PurchaseDiv>
      </MainDiv>
    </>
  )
}

export default App
