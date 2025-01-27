const { mongerInventory } = require("./fishMonger.js");

const fishMenu = (dailyPriceLimit) => {
    const inventory = mongerInventory(dailyPriceLimit);
    let inventoryHTML = `<h1>Menu</h1>
    <article class="menu">`;
    
    for (const fish of inventory) {
        console.log(fish);
        inventoryHTML += `
        <h2>${fish.species}</h2>
            <section class="menu__item">${fish.species} Soup</section>
            <section class="menu__item">${fish.species} Sandwich</section>
            <section class="menu__item">$Grilled ${fish.species}</section>`
    };

    inventoryHTML += `
    </article`;
    return inventoryHTML;
}

module.exports = { fishMenu };