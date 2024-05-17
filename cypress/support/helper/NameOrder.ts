import ShoppingElements from "../elements/ShoppingElements";

function NameOrder(shoppingElements: ShoppingElements, asc: boolean) {
    // Locate the elements of the product names
    // Localize os elementos dos nomes dos produtos
    cy.get(shoppingElements.nameProductGrid()).then(($productNames) => {
        // Get the product names as text
        // Obtenha os nomes dos produtos como texto
        const names = $productNames.map((index, element) => Cypress.$(element).text().trim()).get();
        // Check if the names are in ascending alphabetical order
        // Verifique se os nomes estão em ordem alfabética crescente
        for (let i = 1; i < names.length; i++) {
            // Compare the current name with the previous name
            // Compare o nome atual com o nome anterior
            asc ? expect(names[i].localeCompare(names[i - 1])).to.be.at.least(0) : expect(names[i - 1].localeCompare(names[i])).to.be.at.least(0);
        }
    });
}

export default NameOrder