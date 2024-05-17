/// <reference types="Cypress" />
import ShoppingElements from "../elements/ShoppingElements";
import { assert } from 'chai';
import ProductGrid from "../helper/ProductGrid";
import comparePrice from "../helper/PriceProducts";
import NameOrder from "../helper/NameOrder";
import RefOrder from "../helper/RefOrder";
const shoppingElements = new ShoppingElements();
let sortingOptions: {
    priceLowest: string;
    priceHighest: string;
    productAsc: string;
    productDesc: string;
    inStock: string;
    refLowest: string;
    refHighest: string;
    materialCotton: string;
    materialPolyester: string;
    materialViscose: string;
    colorfulDress: string;
    maxiDress: string;
    midiDress: string;
    shortDress: string;
    shortSleeve: string;
    casualStyle: string;
    dressyStyle: string;
    girlyStyle: string;
};

before(() => {
    cy.fixture('DataMass').then((dataMenu) => {
        sortingOptions = dataMenu
    })
})

class ShoppingPage {
    clickWomenMenuButton(): void {
        cy.get(shoppingElements.buttonWomemMenu()).click()
    }

    inStockSelected(): void {
        cy.get(shoppingElements.menuSortBy()).select(sortingOptions.inStock)
    }

    showsInStock(): void {
        cy.get(shoppingElements.menuSortBy()).select(sortingOptions.inStock)
        cy.get(shoppingElements.menuSortBy()).select('In stock')
        // Check if the text indicates that the product is out of stock
        // Localize os elementos que indicam produtos sem estoque
        cy.get(shoppingElements.avaliability()).each(($productAvailability) => {
            const availabilityText = $productAvailability.text().trim();
            // Check if the text indicates that the product is out of stock
            // Verifique se o texto indica que o produto está sem estoque
            if (availabilityText === 'Out of stock') {
                // If find a product out of stock, fail the test with an informative message
                // Se encontrar um produto sem estoque, falhamos o teste com uma mensagem informativa
                throw new Error('Encontrado produto sem estoque: ' + $productAvailability.closest(shoppingElements.productContainer()).find(shoppingElements.productName()).text().trim());
            }
        });
    }

    priceLowestFirstSelected(): void {
        cy.get(shoppingElements.menuSortBy()).select(sortingOptions.priceLowest)
    }

    showsPriceLowest(): void {
        const cheaper = true
        comparePrice(shoppingElements, cheaper)
    }

    priceHighestPriceFirstSelected(): void {
        cy.get(shoppingElements.menuSortBy()).select(sortingOptions.priceHighest)
    }

    showsPriceHighest(): void {
        const cheaper = false
        comparePrice(shoppingElements, cheaper)
    }

    productNameAscSelected(): void {
        cy.get(shoppingElements.menuSortBy()).select(sortingOptions.productAsc)
    }

    showsNameAsc(): void {
        const asc = true
        NameOrder(shoppingElements, asc)
    }

    productNameDescSelected(): void {
        cy.get(shoppingElements.menuSortBy()).select(sortingOptions.productDesc)
    }

    showsNameDesc(): void {
        const asc = false
        NameOrder(shoppingElements, asc)
    }

    refLowestFirstSelected(): void {
        cy.get(shoppingElements.menuSortBy()).select(sortingOptions.refLowest)
    }

    showsrefLowestFirst(): void {
        const asc = true
        RefOrder(shoppingElements, asc)
    }

    refHighestFirstSelected(): void {
        cy.get(shoppingElements.menuSortBy()).select(sortingOptions.refHighest)
    }

    showsRefHighestFirst(): void {
        const asc = false
        RefOrder(shoppingElements, asc)
    }

    checkStockAndIfAddToCart(): void {
        // Find all elements with the class ".product-container"
        //Encontrar todos os elementos com a classe.product - container
        cy.get(shoppingElements.imgProductGrid()).each(($product, index) => {
            // Click on the current element
            // Clicar no elemento atual
            cy.get(shoppingElements.imgProductGrid()).eq(index).click()
            cy.url().should('contains', shoppingElements.urlProductView())
            // Locate the dropdown and get its items
            // Localize o dropdown e obtenha os itens
            cy.get(shoppingElements.sizeSelect()).then(($dropdown) => {
                const options = $dropdown.find('option');
                // Iterate over the items and select them one by one
                // Iterar sobre os itens e selecioná-los um por um
                options.each((index, option) => {
                    // Get the value of the 'value' attribute from the option element
                    // Obtenha o valor do atributo 'value' do elemento option
                    const value = Cypress.$(option).val() as string;
                    // Select the item by its value
                    // Selecionar o item pelo seu valor
                    cy.get(shoppingElements.sizeSelect()).select(value);
                    cy.get(shoppingElements.isInStockOrNot()).invoke('text').then((text) => {
                        const currentValue = text as string;
                        if (currentValue === 'In stock') {
                            cy.get(shoppingElements.addToCart()).click()
                            cy.get(shoppingElements.continueShipping()).click()
                        }
                    })
                });
            });
            cy.go(-1);
        });
    }

    compareCompostion(): void {
        const materials = [sortingOptions.materialCotton, sortingOptions.materialPolyester, sortingOptions.materialViscose]
        // Find all elements with the class ".product-container"
        //Encontrar todos os elementos com a classe.product - container
        materials.map((element, index1) => {
            const currentValue = materials[index1] === sortingOptions.materialCotton ? shoppingElements.cottonCheck() :
                materials[index1] === sortingOptions.materialPolyester ? shoppingElements.polyesterCheck() :
                    materials[index1] === sortingOptions.materialViscose ? shoppingElements.viscoseCheck() :
                        ''; // Caso nenhuma das condições anteriores seja verdadeira // If none of the previous conditions are true
            cy.get(currentValue).click()
            ProductGrid(shoppingElements, materials, index1, shoppingElements.descriptionComposition(), currentValue)
        })
    }

    comparePropertie(): void {
        const properties = [sortingOptions.colorfulDress, sortingOptions.maxiDress, sortingOptions.midiDress, sortingOptions.shortDress, sortingOptions.shortSleeve]
        // Find all elements with the class ".product-container"
        //Encontrar todos os elementos com a classe.product - container
        properties.map((element, index1) => {
            const currentValue = properties[index1] === sortingOptions.colorfulDress ? shoppingElements.colorFullCheck() :
                properties[index1] === sortingOptions.maxiDress ? shoppingElements.maxiDressCheck() :
                    properties[index1] === sortingOptions.midiDress ? shoppingElements.midDressCheck() : properties[index1] === sortingOptions.shortDress ? shoppingElements.shortDressCheck()
                        : properties[index1] === sortingOptions.shortSleeve ? shoppingElements.shortSleeveCheck() :
                            ''; // Caso nenhuma das condições anteriores seja verdadeira // If none of the previous conditions are true
            cy.get(currentValue).click()
            ProductGrid(shoppingElements, properties, index1, shoppingElements.descriptionPropertie(), currentValue)
        })
    }

    compareStyle(): void {
        const styles = [sortingOptions.casualStyle, sortingOptions.dressyStyle, sortingOptions.girlyStyle]
        // Find all elements with the class ".product-container"
        //Encontrar todos os elementos com a classe.product - container
        styles.map((element, index1) => {
            const currentValue = styles[index1] === sortingOptions.casualStyle ? shoppingElements.casualCheck() :
                styles[index1] === sortingOptions.dressyStyle ? shoppingElements.dressyCheck() :
                    styles[index1] === sortingOptions.girlyStyle ? shoppingElements.girlyCheck() : ''; // Caso nenhuma das condições anteriores seja verdadeira // If none of the previous conditions are true
            cy.get(currentValue).click()
            ProductGrid(shoppingElements, styles, index1, shoppingElements.descriptionStyle(), currentValue)
        })
    }
}

export default ShoppingPage;