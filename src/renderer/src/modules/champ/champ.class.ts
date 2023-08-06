export enum EChampLvl {
  one = 1,
  two,
  three,
  four,
  five
}

enum LengthPool {
  one = 29,
  two = 22,
  three = 18,
  four = 12,
  five = 10
}

interface IChamp {
  name: string
  lvl: EChampLvl
  amount: LengthPool
}

export class Champ implements IChamp {
  name: string
  lvl: EChampLvl
  amount: LengthPool

  constructor(name: string, lvl: EChampLvl) {
    this.name = name
    this.lvl = lvl
    this.amount = LengthPool[EChampLvl[lvl]]
  }
}
