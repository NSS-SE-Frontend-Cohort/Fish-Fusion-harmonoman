const { boatInventory } = require("./fishingBoat.js");

const mongerInventory = (chefBudget) => {
    // Monger filter
    const mongerArray = [];
    const todaysCatch = boatInventory();
    for (const fish of todaysCatch) {
        if (fish.amount >= 10 && fish.price <= 7.50) {
            mongerArray.push(fish);
        }
    }

    // Chef filter
    const chefArray = [];
    for (const item of mongerArray) {
        if (item.price <= chefBudget) {
            item.amount = Math.floor(item.amount * 0.5);
            chefArray.push(item);
        }
    }

    return chefArray;
}

module.exports = { mongerInventory };