import AccountPage from '../pageobjects/AccountPage';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ShoppingPage from '../pageobjects/ShoppingPage';
const shoppingPage = new ShoppingPage();

When('Click in Women`s menu', () => {
    shoppingPage.clickWomenMenuButton()
})

When('Select Price: Lowest First', () => {
    shoppingPage.priceLowestFirstSelected()
})

Then('Validate if it shows the product in Price: Lowest First mode', () => {
    shoppingPage.showsPriceLowest()
})

////

When('Select Price: Highest First', () => {
    shoppingPage.priceHighestPriceFirstSelected()
})
Then('Validate if it shows the product in Price: Highest First mode', () => {
    shoppingPage.showsPriceHighest()
})

////

When('Select Product Name: A to Z', () => {
    shoppingPage.productNameAscSelected()
})
Then('Validate if it shows the product in Product Name: A to Z', () => {
    shoppingPage.showsNameAsc()
})

////

When('Select Product Name: Z to A', () => {
    shoppingPage.productNameDescSelected()
})
Then('Validate if it shows the product in Product Name: Z to A', () => {
    shoppingPage.showsNameDesc()
})

When('Select Product Name: In stock', () => {
    shoppingPage.inStockSelected()
})
Then('Validate if it shows the product in Product Name: In stock', () => {
    shoppingPage.showsInStock()
})

When('Select Reference: Lowest first', () => {
    shoppingPage.refLowestFirstSelected()
})
Then('Validate if it shows the product in Reference: Lowest first', () => {
    shoppingPage.showsrefLowestFirst()
})


When('Select Reference: Highest first', () => {
    shoppingPage.refHighestFirstSelected()
})
Then('Validate if it shows the product in Reference: Highest first', () => {
    shoppingPage.showsRefHighestFirst()
})

When('select an outfit and check if it`s in stock, if not change the size abd check again, if it`s in stock,  i can add to cart', () => {
    shoppingPage.checkStockAndIfAddToCart()

})

Then('i can continue shopping', () => {
    cy.go(-1)
})

When('select the composition filter, selected the product, and check if it`s match', () => {
    shoppingPage.compareCompostion()
})

When('select the composition style, selected the product, and check if it`s match', () => {
    shoppingPage.compareStyle()
})

When('select the composition propertie, selected the product, and check if it`s match', () => {
    shoppingPage.comparePropertie()
})


Then('go back product page', () => {
    shoppingPage.clickWomenMenuButton()
})

When('search for dress', () => {
    shoppingPage.searchDressinSearchBox()
})

Then('validate if it`s all dress', () => {
    shoppingPage.checkIfIsAllDress()
})

