const { fishMenu } = require("./restaurant.js")


const dailyPriceLimit = 3.49
const menu = fishMenu(dailyPriceLimit)
console.log(menu)