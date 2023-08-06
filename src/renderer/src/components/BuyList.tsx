import { Champ } from '../modules/champ/champ.class'

interface IBuyList {
  arrayChamp: Champ[]
}

function BuyList({ arrayChamp }: IBuyList): JSX.Element {
  return (
    <>
      {arrayChamp.map((e, i) => (
        <>
          <h1 key={i}>{e.name}</h1>
          <h2 key={i}>{e.lvl}</h2>
        </>
      ))}
    </>
  )
}
export default BuyList
