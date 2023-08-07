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
  exp: number
  nextExpLvl: number
}

export class User implements IUser {
  lvl: EUserLvl = 1
  gold = 2
  exp = 0
  nextExpLvl = 2

  buyExp(): void {
    this.exp += 4
    if (this.exp >= this.nextExpLvl) {
      this.lvlUp()
    }
  }

  private lvlUp(): void {
    const expLvl = [2, 4, 6, 10, 24, 40, 60, 84]
    this.nextExpLvl += expLvl[this.lvl]
    this.lvl += 1
  }
}
