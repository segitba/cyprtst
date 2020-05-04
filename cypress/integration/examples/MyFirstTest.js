describe('My First Test', () => {
    it('Does not do much!', (done) => {
      cy.visit('https://www.miro360.com.ar')
      //cy.title().should('eq','Google')
      cy.on('uncaught:exception', (err, runnable) => {
        expect(err.message).to.include(" '#' is not a valid selector")
    
        // using mocha's async done callback to finish
        // this test so we prove that an uncaught exception
        // was thrown
        done()
    
        // return false to prevent the error from
        // failing this test
        return false
      })
      cy.get('.btn-secondary').click()
      //cy.get('#login-form > :nth-child(3) > :nth-child(1) > .form-group > .form-control').type("hola")
      cy.get('#login-form > :nth-child(3) > :nth-child(1) > .form-group > .form-control').should('be.visible').type("algo")
    })
  })