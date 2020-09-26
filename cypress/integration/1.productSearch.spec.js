const Testmethod = require('../testbase/testbase.js')
const assert = require('assert')
const CommonMethods = require('../testbase/commonMethods.js')
import LoginPage from '../pageObjects/loginPage.json';
import TestData from '../fixtures/testdata.json';




// runs once before all tests in the it block
before(function() {
  cy.log("Opening the Wasi.lk sight")
  cy.clearCookies()  
})

 // runs before each test in the it block
beforeEach(function() {
   cy.log("I am in beforeEach")
})
//--------------------Test case 1---------------------
describe('Test Suit 1', ()=> {
    it.only('Testcase_1: should login to the wasi.lk site and do a product search', () => {
    cy.log("I am only in Test Case 1 ")
    Testmethod.open();
    Testmethod.login();

    //Verify the logged in user's name
    CommonMethods.Assert(LoginPage.lbl_loggedInUsername).then($selectedelement=> {
      expect($selectedelement).to.contain(TestData.UserData.AssertText)
    })
   
    // Testmethod.productSearch();
    // Testmethod.clear();
    // Testmethod.viewcart();
    // Testmethod.Logout();
})

   //Mostly Used for TearDown Part
 after(function(){
  cy.log("End of the Testcase")
})

// runs after each test in the it block
      afterEach(function() {
        cy.log("I am in afterEach")
})

//--------------------Test case 2---------------------


      it('Test case 2', function() {
      // Test Steps/Commands for Test Case 2
      cy.log("I am in Test Case 2 ")
      })

      
 //-------------------Testcase 3----------------------     
      
      it.skip('Test case 3', function() {
        // Test Steps/Commands for Test Case 3
        cy.log("Test Case 3- Skiped")
        })
  
})