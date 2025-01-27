const { boatInventory } = require("./fishingBoat.js");

const mongerInventory = (chefBudget) => {
    // Monger filter
    const todaysCatch = boatInventory();
    const mongerArray = todaysCatch.filter(fish => fish.amount >= 10 && fish.price <= 7.50);

    // Chef filter
    const chefArray = mongerArray
        .filter(item => item.price <= chefBudget)
        .map(item => ({ ...item, amount: Math.floor(item.amount * 0.5) }));


    return chefArray;
}

module.exports = { mongerInventory };