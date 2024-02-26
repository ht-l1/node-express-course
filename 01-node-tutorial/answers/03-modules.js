// this is the main program : the only program you should need to actually invoke to test that everything is working is 03-modules.js, because it loads all the others (files 4-7).
const names = require("./04-names")
const utils = require("./05-utils")
const alternativeFlavor = require("./06-alternative-flavor")
const mindGrenade = require("./07-mind-grenade")

const welcome = (day, nextDay) => {
    console.log(`${day} is the best day of my life!`)
    console.log(`Although ${nextDay} might be even better!`)
}

const eat = (plate) => {
    console.log(`${plate} is the reason why.`)
}

const snack = (fruit) => {
    console.log(`I also really like ${alternativeFlavor.valFirst} and ${alternativeFlavor.valSecond}.`)
}

const cals = (burnt) => {
    console.log(`Overall, I burnt a total of ${mindGrenade()} cals these two days.`)
}

welcome(names.today, names.tomorrow)
eat(utils.menu.name)
snack(alternativeFlavor.valFirst, alternativeFlavor.valSecond)
cals()