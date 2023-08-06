import { EChampLvl, Champ }from "../champ/champ.class"
import { EUserLvl } from "../user/user"

interface IPool {
  champs: Champ[],
  OneLevelChamps: Champ[],
  TwoLevelChamps: Champ[],
  ThreeLevelChamps: Champ[],
  FourLevelChamps: Champ[],
  FiveLevelChamps: Champ[],
  ReRollProbability: {[index: number]: number[]},
}

enum EPoolChampLevels {
  OneLevelChamps = 1,
  TwoLevelChamps,
  ThreeLevelChamps,
  FourLevelChamps,
  FiveLevelChamps,
}

console.log(Object.keys(EPoolChampLevels).length / 2)

class Pool implements IPool {
  champs: Champ[];
  OneLevelChamps: Champ[]
  TwoLevelChamps: Champ[]
  ThreeLevelChamps: Champ[]
  FourLevelChamps: Champ[]
  FiveLevelChamps: Champ[]
  ReRollProbability = {
    1: [100,0,0,0,0],
    2: [100,0,0,0,0],
    3: [75,25,0,0,0],
    4: [55,30,15,0,0],
    5: [45,33,20,2,0],
    6: [25,40,30,5,0],
    7: [19,30,35,15,1],
    8: [16,20,35,25,4],
    9: [9,15,30,30,16],
  }

  constructor(arrChamps: Champ[]) {
    this.champs = arrChamps
    this.assignmentChampsByLvl()
  }
  
  getArrayRandomProb (userLvl: EUserLvl): EChampLvl[] {
    const arr: number[] = []
    for (let index = 0; index < 4; index++) {
      arr.push(this.getRandomProb(userLvl))
    }
    return arr
  }

  private findByLevels (lvl: EChampLvl) {
    this[EPoolChampLevels[lvl]] = this.champs.filter((e) => e.lvl === lvl)
  }

  private assignmentChampsByLvl () {
    for (let index = 0; index < 5; index++) {
      this.findByLevels(index + 1)
    }
  }


  private getRandomProb (userLvl: EUserLvl): EChampLvl {
    const randomNum = Math.floor(Math.random() * 100 + 1);
    const propArr = this.ReRollProbability[userLvl]
    const firstProb = propArr[0]
    const secondProb = firstProb + propArr[1]
    const thirdProb = secondProb + propArr[2]
    const fourthProb = thirdProb + propArr[3]
    const fifthProb =  fourthProb + propArr[4]
    if (randomNum <= firstProb) {
      return 1
    } else if (randomNum > firstProb && randomNum <= secondProb) {
      return 2
    } else if (randomNum > secondProb && randomNum <= thirdProb){
      return 3
    } else if (randomNum > thirdProb && randomNum <= fourthProb){
      return 4
    } else if (randomNum > fourthProb && randomNum <= fifthProb){
      return 5
    } else {
      throw new Error("Error con las probabilidades")
    }
  }

}

const azir = new Champ("Azir", 5)
const classecita = new Pool([azir])

console.log(classecita.getArrayRandomProb(9))

