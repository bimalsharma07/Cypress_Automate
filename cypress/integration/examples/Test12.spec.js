describe('Test E-Commerce', () => 
{
    it('Navigate to the website', () => {
    cy.visit('https://www.amazon.com/')
    })

    it('Search a Product', () => {
        cy.get('#twotabsearchtextbox').type('Nike-Shoes')
        cy.get('#nav-search-submit-button').click()
        })

    it('Navigate to the cart', () => {
        cy.get('#nav-cart').click()
            })

     it('Navigate to the sign In Page', () => {
        cy.get('#a-autoid-0-announce > .a-size-base-plus').click()
                                     }) 

                                                                                                                                        
  
})