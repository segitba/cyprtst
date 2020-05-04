import Login from '../Page Object Model/Site_header'

describe('My First Test', () => {
  
  it('Does not do much!', () => {
      
      const mghj =new Login()
      cy.visit('https://www.miro360.com.ar')
      mghj.loginButton()
    
      //cy.get('[name="summary"]').type("casas")
      //cy.get('.btn > span').click()
      //cy.get('#login-form > :nth-child(3) > :nth-child(1) > .form-group > .form-control').type("hola")
      //cy.get('#login-form > :nth-child(3) > :nth-child(1) > .form-group > .form-control').should('be.visible').type("algo")
    })
  })