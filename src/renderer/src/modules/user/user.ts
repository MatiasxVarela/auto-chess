import { Champ } from '../champ/champ.class'

export enum EUserLvl {
  one = 1,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine
}

interface IUser {
  lvl: EUserLvl
  gold: number
  buyPool: Champ[]
}

export class User implements IUser {
  lvl: EUserLvl
  gold: number
  buyPool: Champ[]

  constructor() {
    this.lvl = 1
    this.gold = 2
  }
}
