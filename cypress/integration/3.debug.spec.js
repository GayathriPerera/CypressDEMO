const Testmethod = require('../testbase/testbase.js')
const assert = require('assert')
const CommonMethods = require('../testbase/commonMethods.js')
import LoginPage from '../pageObjects/loginPage.json';
import TestData from '../fixtures/testdata.json';

describe ('My third test', ()=> {
    
    it.only('should debug with debugger clause',() =>{

     Testmethod.open();
     cy.get('#menu-extra-login').click()
     
    cy.get('#username').click().type('gayathri.aet@gmail.com')
    cy.get('#password').click().type('Asdf@123$')
    cy.get(':nth-child(3) > .woocommerce-Button').click()

    cy.xpath('//div[@class="footer-links"]/div[@class="widget widget_nav_menu"]').then(div=> {
     
    debugger
    expect(div).has.to.length('4')
    })
    })
  

it('should debug with .debug() clause',() =>{

     Testmethod.open();
     cy.get('#menu-extra-login').click()
    cy.get('#username').click().type('gayathri.aet@gmail.com')
    cy.get('#password').click().type('Asdf@123$')
    cy.get(':nth-child(3) > .woocommerce-Button').click()

    cy.xpath('//div[@class="footer-links"]/div[@class="widget widget_nav_menu"]').then(div=> {
     
    
    expect(div).has.to.length('4').debug()
    })
    })
    

})




