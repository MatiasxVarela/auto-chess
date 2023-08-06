import { EChampLvl, Champ } from '../champ/champ.class'
import { EUserLvl } from '../user/user'

enum EPoolChampLevels {
  OneLevelChamps = 1,
  TwoLevelChamps,
  ThreeLevelChamps,
  FourLevelChamps,
  FiveLevelChamps
}

class Pool {
  private champs: Champ[]
  private OneLevelChamps!: Champ[]
  private TwoLevelChamps!: Champ[]
  private ThreeLevelChamps!: Champ[]
  private FourLevelChamps!: Champ[]
  private FiveLevelChamps!: Champ[]
  private ReRollProbability = {
    1: [100, 0, 0, 0, 0],
    2: [100, 0, 0, 0, 0],
    3: [75, 25, 0, 0, 0],
    4: [55, 30, 15, 0, 0],
    5: [45, 33, 20, 2, 0],
    6: [25, 40, 30, 5, 0],
    7: [19, 30, 35, 15, 1],
    8: [16, 20, 35, 25, 4],
    9: [9, 15, 30, 30, 16]
  }

  constructor(arrChamps: Champ[]) {
    this.champs = arrChamps
    this.assignmentChampsByLvl()
  }

  getBuyPool(userLvl: EUserLvl): Champ[] {
    const arrRandomProb = this.getArrayRandomProb(userLvl)
    const champsToBuy: Champ[] = []

    for (let index = 0; index < arrRandomProb.length; index++) {
      const poolLvlChamp = this[EPoolChampLevels[arrRandomProb[index]]]
      const randomIndex = Math.floor(Math.random() * poolLvlChamp.length)
      const randomChamp = poolLvlChamp[randomIndex]
      champsToBuy.push(randomChamp)
    }

    return champsToBuy
  }

  private getArrayRandomProb(userLvl: EUserLvl): EChampLvl[] {
    const arr: number[] = []
    for (let index = 0; index < 5; index++) {
      arr.push(this.getRandomProb(userLvl))
    }
    return arr
  }

  private findByLevels(lvl: EChampLvl): void {
    this[EPoolChampLevels[lvl]] = this.champs.filter((e) => e.lvl === lvl)
  }

  private assignmentChampsByLvl(): void {
    for (let index = 0; index < 5; index++) {
      this.findByLevels(index + 1)
    }
  }

  private getRandomProb(userLvl: EUserLvl): EChampLvl {
    const randomNum = Math.floor(Math.random() * 100 + 1)
    const propArr = this.ReRollProbability[userLvl]
    const firstProb = propArr[0]
    const secondProb = firstProb + propArr[1]
    const thirdProb = secondProb + propArr[2]
    const fourthProb = thirdProb + propArr[3]
    const fifthProb = fourthProb + propArr[4]
    if (randomNum <= firstProb) {
      return 1
    } else if (randomNum > firstProb && randomNum <= secondProb) {
      return 2
    } else if (randomNum > secondProb && randomNum <= thirdProb) {
      return 3
    } else if (randomNum > thirdProb && randomNum <= fourthProb) {
      return 4
    } else if (randomNum > fourthProb && randomNum <= fifthProb) {
      return 5
    } else {
      throw new Error('Error con las probabilidades')
    }
  }
}

const campeonesEnArray = [
  new Champ('Azir', 5),
  new Champ('Samira', 4),
  new Champ('Teemo', 3),
  new Champ('Jinx', 2),
  new Champ('Vi', 1)
]
export const pool = new Pool(campeonesEnArray)
