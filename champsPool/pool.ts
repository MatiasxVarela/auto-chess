import { EChampLvl, Champ }from "../champ/champ.class"

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

  private findByLevels (lvl: EChampLvl) {
    this[EPoolChampLevels[lvl]] = this.champs.filter((e) => e.lvl === lvl)
  }

  private assignmentChampsByLvl () {
    for (let index = 0; index < 5; index++) {
      this.findByLevels(index + 1)
    }
  }

}

const azir = new Champ("Azir", 5)
const classecita = new Pool([azir])

const hola = classecita.ReRollProbability

const num = 100
const propArr = hola[7]
const firstProb = propArr[0]
const secondProb = firstProb + propArr[1]
const thirdProb = secondProb + propArr[2]
const fourthProb = thirdProb + propArr[3]
const fifthProb =  fourthProb + propArr[4]

if (num <= firstProb) {
  console.log("lvl 1")
} else if (num > firstProb && num <= secondProb) {
  console.log("lvl 2")
} else if (num > secondProb && num <= thirdProb){
  console.log("lvl 3")
} else if (num > thirdProb && num <= fourthProb){
  console.log("lvl 4")
} else if (num > fourthProb && num <= fifthProb){
  console.log("lvl 5")
}


