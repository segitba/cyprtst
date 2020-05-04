
/// <reference types="cypress"/>
describe ('Locating elements',()=>
    {
        it('Verify locators',()=>
            {
                cy.visit("https://demo.nopcommerce.com/") //navega al sitio
                cy.get("#small-searchterms").type("Apple") //encuentra el field buscador e ingresa una busqueda
                cy.get(".search-box-button").click() //clickea el search button
                cy.get('.product-box-add-to-cart-button').click() //clickea en el boton para ir a agregar al cart
                cy.get('#addtocart_4_EnteredQuantity').clear().type('3') //limpia el quantity field e ingresa el valor dseado
                cy.get('#add-to-cart-button-4').click() // agrega los articulos al cart
                cy.wait(4990) //espera explicita , probar si es necesaria como dice el indio o no
                cy.get('#topcartlink').click() //clickea el link del carrito
                cy.get('.product-subtotal').contains('$5,400.00')


            }
          )

    }
)

