/// <reference types="cypress" />

class Login 
{

    loginButton(){
        
        const newLocal = cy.get('.btn btn-secondary btn-sm d-none d-md-inline-block')
        newLocal.click()
        return this
    }
    
}
export default Login