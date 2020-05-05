/// <reference types="cypress"/>
import LoginClss from '../Page_Object_Model/LoginA.js'
describe('Login positivo',()=>{
    //cargamos el fixture con la login data
     before (()=>{
        cy.fixture('logindata').as('logind')
    //revisar https://docs.cypress.io/guides/core-concepts/variables-and-aliases.html#Sharing-Context
    })
    it('Login',()=>{
        const logger= new LoginClss() //inicializacion de la clase
        cy.visit('http://automationpractice.com/index.php')
        cy.get('@logind').then((logind)=>{//traemos el fixture y aplicamos then para usarlo
            const logi = logind //inicializamos una variable con el fixture
            logger.LoginUser(logi.email,logi.password) //usar fields de fixture para login
            })
         cy.get('.account > span').should('be.visible') //validacion de login

    })
    it('Logout',()=>{

        const sigouter=new LoginClss()
        sigouter.SignOut()

    })
    it('Login con command',()=>{
        const logger= new LoginClss() //inicializacion de la clase
        cy.visit('http://automationpractice.com/index.php')
        cy.get('@logind').then((logind)=>{//traemos el fixture y aplicamos then para usarlo
            const logi = logind //inicializamos una variable con el fixture
            cy.typeLogin(logi) //usar fields de fixture para login
                })
        cy.get('.account > span').should('be.visible') //validacion de login
    })





})