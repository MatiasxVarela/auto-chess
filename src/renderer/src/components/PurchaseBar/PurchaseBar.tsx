import styled from 'styled-components'
import { useState } from 'react'

import { pool } from '../../modules/champsPool/pool'
import Buylist from './BuyList'

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
const ButtonDivs = styled.div`
  display: flex;
  flex-direction: column;
`
const SButton = styled.div`
  border: 2px solid black;
  padding: 5px;
  margin: 5px 0px 5px 0px;
  cursor: pointer;
`
function PurchaseBar(): JSX.Element {
  const [ArrayChamp, SetArrayChamp] = useState(pool.getBuyPool(9))

  const handleOnClick = (): void => {
    const newPoolToBoy = pool.getBuyPool(9)
    SetArrayChamp(newPoolToBoy)
  }
  return (
    <>
      <PurchaseDiv>
        <ButtonDivs>
          <SButton>lvl up</SButton>
          <SButton onClick={handleOnClick}>tuki</SButton>
        </ButtonDivs>
        <Buylist arrayChamp={ArrayChamp} />
      </PurchaseDiv>
    </>
  )
}

export default PurchaseBar
