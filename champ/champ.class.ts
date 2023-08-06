export enum ELvl {
  one = 1,
  two,
  three,
  four,
  five,
}

enum LengthPool {
  one = 29,
  two = 22,
  three = 18,
  four = 12,
  five = 10,
}

interface IChamp {
  name: string,
  lvl: ELvl,
  amount: LengthPool
}

export class Champ implements IChamp {
  name: string
  lvl: ELvl
  amount: LengthPool
  
  constructor(name: string, lvl: ELvl){
    this.name = name
    this.lvl = lvl
    this.amount = LengthPool[ELvl[lvl]]
  }
}