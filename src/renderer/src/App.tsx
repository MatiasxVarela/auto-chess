import { pool } from './modules/champsPool/pool'
import { useState } from 'react'
import Buylist from './components/BuyList'

function App(): JSX.Element {
  const [ArrayChamp, SetArrayChamp] = useState(pool.getBuyPool(9))

  const handleOnClick = (): void => {
    const newPoolToBoy = pool.getBuyPool(9)
    SetArrayChamp(newPoolToBoy)
  }
  return (
    <>
      <button onClick={handleOnClick}>tuki</button>
      <Buylist arrayChamp={ArrayChamp} />
    </>
  )
}

export default App
