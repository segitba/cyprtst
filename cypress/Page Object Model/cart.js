class shopcart{

    addToCart(){
        cy.get('#homefeatured > li.ajax_block_product.col-xs-12.col-sm-4.col-md-3.first-in-line.first-item-of-tablet-line.first-item-of-mobile-line > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default').trigger('mouseover')
        cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
        cy.get('.button-medium > span').click()
        //agrega el primer elemento que encuentra en la home
    }
    addtoCart2(){
    
        cy.get('#homefeatured > .first-in-line.last-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
        cy.get('.button-medium > span').click()

    }

}

export default shopcart