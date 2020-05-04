class Loginclss 

{
    LoginUser(email,passw){
        cy.get('#header > div.nav > div > div > nav > div.header_user_info > a').click()
        cy.title().should('be.equal','Login - My Store')
        cy.get('.account > span').should('not.be.visible')
        cy.get('#email').type(email)
        cy.get('#passwd').type(passw)
        cy.get('#SubmitLogin > span').click()


    }
    SignOut(){
        cy.get('.logout').click()
        cy.get('.account > span').should('not.be.visible')

    }

}

export default Loginclss