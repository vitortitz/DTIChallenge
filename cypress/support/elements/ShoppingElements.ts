class ShoppingElements {
    buttonWomemMenu = (): string => { return '.sf-menu > :nth-child(1) > [href="http://www.automationpractice.pl/index.php?id_category=3&controller=category"]' }
    buttonSeach = (): string => { return '#searchbox > .btn' }

    menuSortBy = (): string => { return '#selectProductSort' }
    avaliability = (): string => { return '.availability' }
    productContainer = (): string => { return '.product-container' }
    productName = (): string => { return '.product-name' }
    priceProductGrid = (): string => { return '.right-block .price' }
    nameProductGrid = (): string => { return '.right-block .product-name' }
    imgProductGrid = (): string => { return '.product_img_link' }
    productReference = (): string => { return '#product_reference > .editable' }
    urlProductView = (): string => { return 'controller=product' }
    isInStockOrNot = (): string => { return '#availability_value' }
    addToCart = (): string => { return '.exclusive > span' }
    continueShipping = (): string => { return '.continue > span' }
    sizeSelect = (): string => { return '#group_1' }
    descriptionStyle = (): string => { return '.even > :nth-child(2)' }
    descriptionPropertie = (): string => { return 'tbody > :nth-child(3) > :nth-child(2)' }
    descriptionComposition = (): string => { return 'tbody > :nth-child(1) > :nth-child(2)' }
    menuCompositions = (): string => { return '#layered_id_feature_5' }
    urlProdutosWomen = (): string => { return 'http://www.automationpractice.pl/index.php?id_category=3&controller=category' }
    titleDescription = (): string => { return '.cat-name' }
    cottonCheck = (): string => { return '#layered_id_feature_5' }
    polyesterCheck = (): string => { return '#layered_id_feature_1' }
    viscoseCheck = (): string => { return '#layered_id_feature_3' }
    colorFullCheck = (): string => { return '#layered_id_feature_18' }
    maxiDressCheck = (): string => { return '#layered_id_feature_21' }
    midDressCheck = (): string => { return '#layered_id_feature_20' }
    shortDressCheck = (): string => { return '#layered_id_feature_19' }
    shortSleeveCheck = (): string => { return '#layered_id_feature_17' }
    casualCheck = (): string => { return '#layered_id_feature_11' }
    dressyCheck = (): string => { return '#layered_id_feature_16' }
    girlyCheck = (): string => { return '#layered_id_feature_13' }
    searchBox = (): string => { return '#search_query_top' }
}
export default ShoppingElements;