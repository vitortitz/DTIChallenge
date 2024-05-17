import ShoppingElements from "../elements/ShoppingElements";

function SearchValidate(shoppingElements: ShoppingElements, product: string) {
    // Locate the elements of the product names
    // Localize os elementos dos nomes dos produtos
    cy.get(shoppingElements.nameProductGrid()).then(($productNames) => {
        // Get the product names as text
        // Obtenha os nomes dos produtos como texto
        const names = $productNames.map((index, element) => Cypress.$(element).text().trim()).get();
        // Check if the names are in ascending alphabetical order
        // Verifique se os nomes estão em ordem alfabética crescente
        for (let i = 1; i < names.length; i++) {
            if (!names[i].toLowerCase().includes(product)) {
                throw new Error(`Produto ${names[i]} não corresponde a pesquisa ${product}.`)
            }
        }
    });
}

export default SearchValidate