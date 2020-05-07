//TestCase 02 Agregar Producto al carrito:  añadir un producto al carrito y verificar que efectivamente se agregó al mismo.
import shopcart from '../Page_Object_Model/cart'
import LoginUser from '../Page_Object_Model/LoginA'
import footerSN_Locators from '../Page_Object_Model/footerPO'
describe ('Carrito de compras',()=>{
    before(()=> {
        cy.visit("http://automationpractice.com/index.php")
       
          
        })
    it('Agregar un item al carrito vacio',()=>{
        const cartinst=new shopcart
        cy.get('.ajax_cart_no_product').should('be.visible')
        cartinst.addToCart()
        cy.get('#summary_products_quantity').contains('1 Product').should('be.visible')
        cy.get('.cart_description > .product-name > a').should('be.visible')
        cy.get('.cart_navigation > .button > span').should('be.visible')
        //esto habría que pasarlo a una page object class pasos 2 a 4 en el metodo
        // podriamos meter un parametro para la cantidad de productos a agregarN
    })
    it('Remover un item del carrito',()=>{
        cy.get('#product_1_1_0_0 > .cart_delete').click()
        cy.get('.cart_description > .product-name > a').should('not.be.visible')
    })
    it('agregar varios items al carrito vacio',()=>{
        const cartinst=new shopcart
        cy.visit("http://automationpractice.com/index.php")
        cartinst.addToCart()
        cy.get('.button-exclusive').click()
        cartinst.addtoCart2()
        cy.get('#product_1_1_0_0 > .cart_delete').click()
        cy.get('#product_1_1_0_0 > .cart_description').should('not.be.visible')
        //mejorar esto usando tablas, ya que el cart es una tabla, se puede hacer por posicion y no metiendo un id harcoded como hice aca
        

    })
    it('completar checkout',function(){
        const cartinst = new shopcart
        const logged = new LoginUser
        logged.LoginUser('sebfe@maillinator.com','abc123')
        cy.visit("http://automationpractice.com/index.php")
        cartinst.addToCart()
        cy.get('#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium').click()
        cy.get('.cart_navigation > .button > span').click()
        cy.get('#cgv').click()
        cy.get('.cart_navigation > .button > span').click()
        cy.get('.bankwire').click()
        cy.get('#cart_navigation > .button > span').click()
        cy.get('.page-heading').should('contain.text','Order confirmation')

    })
    it('social media links',()=>{
        cy.visit("http://automationpractice.com/index.php")
        const sn = new footerSN_Locators
        sn.FacebookLink().should('exist')
        sn.TwitterLink().should('exist')
        sn.YoutubeLink().should('exist')
        sn.GPlusLink().should('exist')
        /*
        codigo deprecado
        cy.get('a[href*="www.facebook.com/groups/525066904174158"]').should('exist')//facebook link present?
        cy.get('a[href*="https://twitter.com/seleniumfrmwrk"]').should('exist')//twitter link present?
        cy.get('a[href*="https://www.youtube.com/channel/UCHl59sI3SRjQ-qPcTrgt0tA"]').should('exist')//YT link present?
        cy.get('a[href*="https://plus.google.com/111979135243110831526/posts"]').should('exist')//g+ link present?
        */


    })
    
})