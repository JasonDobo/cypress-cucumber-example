
class SearchProduct {

    SearchProduct(searchProductName) {
        cy.get('#wp-block-search__input-2').click()

        cy.get('#wp-block-search__input-2').click({ force: true }).type(searchProductName);
        cy.get('.footer-widget-inside > .wp-block-search__button-outside > .wp-block-search__inside-wrapper > .wp-block-search__button').click()
    }

    verifyProduct(searchProductName) {
        cy.contains(searchProductName).should('exist')
    }
}

const searchProduct = new SearchProduct();
export default searchProduct;