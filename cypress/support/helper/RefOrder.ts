import ShoppingElements from "../elements/ShoppingElements";


function RefOrder(shoppingElements: ShoppingElements, asc: boolean) {
    let referencesArray: string[] = [];
    // Find all elements with the class ".product-container"
    //Encontrar todos os elementos com a classe.product - container
    cy.get(shoppingElements.imgProductGrid()).each(($product, index) => {
        // Click on the current element
        // Clicar no elemento atual
        cy.get(shoppingElements.imgProductGrid()).eq(index).click()
        cy.url().should('contains', shoppingElements.urlProductView())
        cy.get(shoppingElements.productReference()).invoke('text').then((text) => {
            const currentValue = text as string;
            // Add the value to the array
            //  Adicionar o valor ao array
            referencesArray.push(currentValue);
            // Check if the value is greater than or equal to the previous one in the array
            //Verificar se o valor é maior ou igual ao anterior no array
            if (referencesArray.length > 1) {
                const previousValue = referencesArray[referencesArray.length - 2];
                // If asc=true, then it's in ascending order, otherwise, it's in descending order
                //Se asc=true, então está em ordem crescente, se não, está em ordem decrescente
                if (asc) {
                    if (currentValue < previousValue) {
                        throw new Error(`Valor ${currentValue} não está em ordem crescente.`);
                    }
                } else {
                    if (currentValue > previousValue) {
                        throw new Error(`Valor ${currentValue} não está em ordem decrescente.`);
                    }
                }
            }
        });
        cy.go(-1);
    });
}
export default RefOrder