class Cat {
    color = ""
    age = 0
    canTalk = false;

    makeNoise(){
        console.log('NOISE')
    }
    eat(){
        console.log("NOM NOM")
    }
    sleep(){
        console.log("ZZZZZZZZZZ")
    }
}
let myCat = new Cat()
myCat.makeNoise()
myCat.eat()
myCat.sleep()

let myOtherCat = new Cat("black","5","true")
myOtherCat.makeNoise()
myOtherCat.eat()
myOtherCat.sleep()
console.log(myOtherCat)



class Pirate {
    age = 0
    hasWoodenLeg = true
    beardColor = ""
    goldCoins = 0

    constructor(age, hasWoodenLeg, beardColor,goldCoins){
        this.beardColor = beardColor
        this.age = age
        this.hasWoodenLeg = hasWoodenLeg
        this.goldCoins = goldCoins
    }

    killOtherPirate(){
        console.log("Too Bloody")
    }
    stealGold(numOfCoins){
        this.goldCoins += numOfCoins

    }
    greeting(greetingStr){
        console.log("HO HO HO" + greetingStr)
    }
}

// let myPirate = new Pirate(121,true,"black",50)
// console.log(myPirate)
// myPirate.stealGold(20)
// console.log(myPirate)
// myPirate.greeting("GET OUTTA HERE")

let jollyRoger = [new Pirate(21,false,"blonde",2),
                new Pirate(42,false,"brown",30),
                new Pirate(68,true,"grey",250)]
                console.log(jollyRoger)
let blackPearl = [new Pirate(21,false,"blonde",2),
                new Pirate(42,false,"brown",30),
                new Pirate(68,true,"grey",250)]
                console.log(blackPearl)
console.log("jollyRoger Priates:")

for(let i=0; i<3; i++){
    console.log(jollyRoger[i])
}

console.log("blackPearl Priates:")
for(let i=0; i<3; i++){
    console.log(blackPearl[i])
}
// ------class examples-----------
// instantiated an array
const arr = [new Pirate("female",30,"no")]
const p1 = new Pirate("male",20,"yes")