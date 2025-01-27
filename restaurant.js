const { mongerInventory } = require("./fishMonger.js");

const fishMenu = (dailyPriceLimit) => {
    const inventory = mongerInventory(dailyPriceLimit);

    const inventoryHTML = `
        <h1>Menu</h1>
        <article class="menu">
            ${inventory.map(fish => `
                <h2>${fish.species}</h2>
                <section class="menu__item">${fish.species} Soup</section>
                <section class="menu__item">${fish.species} Sandwich</section>
                <section class="menu__item">Grilled ${fish.species}</section>
            `).join('')}
        </article>
    `;

    return inventoryHTML.trim();
};

module.exports = { fishMenu };