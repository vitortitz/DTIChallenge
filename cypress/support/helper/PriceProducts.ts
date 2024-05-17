import ShoppingElements from "../elements/ShoppingElements";


function comparePrice(shoppingElements: ShoppingElements, cheaperOrExpensiver: boolean) {
    //Locate the elements of the product prices.
    // Localize os elementos dos preços dos produtos
    cy.get(shoppingElements.priceProductGrid()).then(($prices) => {
        // Get the prices as text.
        // Obtenha os preços como texto
        const pricesText = $prices.map((index, element) => Cypress.$(element).text().trim()).get();
        //Convert the prices from text to numbers.
        // Converta os preços de texto para números
        const prices = pricesText.map(priceText => parseFloat(priceText.replace(/[^\d.,]/g, '').replace(',', '.')));
        // Check if the prices are in ascending order
        for (let i = 1; i < prices.length; i++) {
            // Compare the current price with the previous price
            // if cheaperOrExpensiver is true, then it's ascending order, else is descending
            cheaperOrExpensiver ? expect(prices[i]).to.be.at.least(prices[i - 1]) : expect(prices[i]).to.be.at.most(prices[i - 1]);
        }
    });
}

export default comparePrice