import ShoppingElements from "../elements/ShoppingElements";
// Function to click on all products in the container and compare with the selected filter 
//funcao para clicar em todos os produtos do container e comparar com o filtro selecionado
function ProductGrid(shoppingElements: ShoppingElements, materials: string[], index1: number, description: string, currentValue: string) {
    cy.get(shoppingElements.titleDescription()).should('contain', materials[index1])
    cy.get(shoppingElements.imgProductGrid()).each(($product, index) => {
        // Clicar no elemento atual
        cy.get(shoppingElements.imgProductGrid()).eq(index).click()
        cy.url().should('contains', shoppingElements.urlProductView())
        //Receive the text
        //Recebe o texto
        cy.get(description).invoke('text').then((text) => {
            const material = text as string;
            //compare with the selected filter 
            //compara o texto com o filtro selecionado
            if (materials[index1] != material) {
                throw new Error(`Descrição ${material} não corresponde ao filtro selecionado.`)
            }
        });
        cy.go(-1);
        cy.get(shoppingElements.titleDescription()).should('contain', materials[index1])
    }
    )
    cy.go(-1);
    cy.get(currentValue).click()
    cy.get(shoppingElements.titleDescription()).should('not.contain', materials[index1])
}

export default ProductGrid