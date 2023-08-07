import { Champ } from '../../modules/champ/champ.class'
import styled from 'styled-components'

const ContainerDiv = styled.div`
  display: flex;
  justify-content: center;
`
const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  padding: 20px 20px 20px 20px;
  margin: 0px 20px 0px 20px;
  border: 2px solid black;
`

interface IBuyList {
  arrayChamp: Champ[]
}

function BuyList({ arrayChamp }: IBuyList): JSX.Element {
  return (
    <ContainerDiv>
      {arrayChamp.map((e, i) => (
        <CardDiv key={i}>
          <h1>{e.name}</h1>
          <h2>{e.lvl}</h2>
        </CardDiv>
      ))}
    </ContainerDiv>
  )
}

export default BuyList
