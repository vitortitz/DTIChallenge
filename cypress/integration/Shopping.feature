Feature: Shopping
    I as a user would like view and filter the products

    Scenario: Search in mode Price: Lowest First mode
        Given access the automationpractice website
        When Click in Women`s menu
        And Select Price: Lowest First
        Then Validate if it shows the product in Price: Lowest First mode

    Scenario: Search in mode Price: Highest First mode
        Given access the automationpractice website
        When Click in Women`s menu
        And Select Price: Highest First
        Then Validate if it shows the product in Price: Highest First mode

    Scenario: Search in mode Product Name: A to Z
        Given access the automationpractice website
        When Click in Women`s menu
        And Select Product Name: A to Z
        Then Validate if it shows the product in Product Name: A to Z

    Scenario: Search in mode Product Name: Z to A
        Given access the automationpractice website
        When Click in Women`s menu
        And Select Product Name: Z to A
        Then Validate if it shows the product in Product Name: Z to A

    # In this scenario, where it should only show products in stock, it returns out-of-stock products.
    # Neste cenário, onde deveriam ser mostrados apenas produtos em estoque, estão sendo retornados produtos fora de estoque.
    Scenario: Search in mode Product Name: In stock
        Given access the automationpractice website
        When Click in Women`s menu
        And Select Product Name: In stock
        Then Validate if it shows the product in Product Name: In stock

    Scenario: Search in mode Reference: Lowest first
        Given access the automationpractice website
        When Click in Women`s menu
        And Select Reference: Lowest first
        Then Validate if it shows the product in Reference: Lowest first

    Scenario: Search in mode Reference: Highest first
        Given access the automationpractice website
        When Click in Women`s menu
        And Select Reference: Highest first
        Then Validate if it shows the product in Reference: Highest first

    # In this scenario, when I find items that are in stock, I try to add them to the cart. However, for one specific item, the Faded Short Sleeve T-shirts in size L, it shows that it's in stock and displays the quantity, but the "Add to Cart" button does not appear.
    # Neste cenário, quando encontro itens que estão em estoque, tento adicioná-los ao carrinho. No entanto, para um item específico, as camisetas de manga curta desbotadas no tamanho L, mostra que está em estoque e exibe a quantidade, mas o botão "Adicionar ao Carrinho" não aparece.
    Scenario: Try to add in cart if it shows in stock
        Given access the automationpractice website
        When Click in Women`s menu
        And select an outfit and check if it`s in stock, if not change the size abd check again, if it`s in stock,  i can add to cart
        Then i can continue shopping

    Scenario: Check if the filtered compostion items match the selected filter.
        Given access the automationpractice website
        When Click in Women`s menu
        And select the composition filter, selected the product, and check if it`s match
        Then go back product page

    Scenario: Check if the filtered style items match the selected filter.
        Given access the automationpractice website
        When Click in Women`s menu
        And select the composition style, selected the product, and check if it`s match
        Then go back product page

    Scenario: Check if the filtered propertie items match the selected filter.
        Given access the automationpractice website
        When Click in Women`s menu
        And select the composition propertie, selected the product, and check if it`s match
        Then go back product page


    Scenario: Check if the filtered propertie items match the selected filter.
        Given access the automationpractice website
        When Click in Women`s menu
