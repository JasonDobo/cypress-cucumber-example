class GooglePage {

    openGoogleURL() {
        cy.visit("https://www.google.com/");
        this.handleSignIn();
    }

    handleSignIn() {
        cy.get('input[name="q"]');
        cy.get('#L2AGLb').click();
    }

    searchFor(value) {
        cy.get('.gLFyf').first().click()
        cy.get('.gLFyf').first().clear()
        cy.get('.gLFyf').first().type(value + '\n')

        cy.location('pathname', {timeout: 5000}).should('include', '/search');
    }

    resultsShown() {
        cy.get('#hdtb-msb', { timeout: 30000 }).should('be.visible');
        cy.get('#result-stats', { timeout: 30000 }).should('be.visible');
        cy.get('#center_col', { timeout: 30000 }).should('be.visible');
    }

    openAmazon() {
        const amazon = "amazon.co.uk"
        cy.contains(amazon).click()
    }
}

const googlePage = new GooglePage();
export default googlePage;