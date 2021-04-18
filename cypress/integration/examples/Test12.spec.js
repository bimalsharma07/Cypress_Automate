describe('Test E-Commerce', () => 
{
    it('Navigate to the website', () => {
    cy.visit('https://www.amazon.com/')
    })

    it('Search a Product', () => {
        cy.get('#twotabsearchtextbox').type('Shoes')
        cy.get('#nav-search-submit-button').click()
        })

    it('Navigate to the cart', () => {
        cy.get('#nav-cart').click()
            })




                                                                         
                                                                         

  
})