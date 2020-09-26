import LoginPage from '../pageObjects/loginPage.json';
import Logoutpage from '../pageObjects/logoutPage.json';
import SearchPage from'../pageObjects/searchPage.json';
const CommonMethods = require('./commonMethods.js')
import TestData from '../fixtures/testdata.json';

export function open()
{ 
     cy.visit(Cypress.env('url1'));
}

export function login ()
{

//Click on login button and login link
  CommonMethods.Click(LoginPage.btn_LoginButton)
  
  //Enter user name and password and click on login button
  CommonMethods.Fill(LoginPage.txt_username, TestData.UserData.Email)
  CommonMethods.Fill(LoginPage.txt_password, TestData.UserData.Password)
  CommonMethods.Click(LoginPage.btn_Submit)

  //Taking a explicit screenshot
  cy.screenshot('Capturing the screenshot after successful login')
    
}

 export function productSearch()
{
        //search the product
        CommonMethods.Click(SearchPage.txt_Searchfield)
        CommonMethods.Fill(SearchPage.txt_Searchfield, TestData.UserData.ProductName)
        CommonMethods.Click(SearchPage.btn_Search)

}

export function wishlistAddition()
{
        //Adding to wishlist
        CommonMethods.Click(SearchPage.lnk_AddToWishlist)
        cy.wait(4000)
        CommonMethods.Click(SearchPage.btn_BrowseWishlist)
       
}

export function clear()
{
    CommonMethods.Click(SearchPage.txt_Searchfield)
        cy.get(SearchPage.txt_Searchfield).type('Hi!').focused().clear()
           
}


export function viewcart()
{
    CommonMethods.Click(SearchPage.lnk_Cart)
    cy.wait(1000)
   // CommonMethods.Click(SearchPage.btn_ViewCart)
   cy.xpath('//div[@class="product-content-detail"]/a[contains(text(),"Tempered Glass Screen Protector Samsung Galaxy – A10")]').then($selectedelement=> {
     
    expect($selectedelement).to.have.text(TestData.UserData.ProductName)
    })
   
}

export function selectdropdownvalue()
{
    cy.xpath(SearchPage.dbc_ProductCat).select('Atlas Clay')
    CommonMethods.Click(SearchPage.btn_Search)
    
}

export function scroll()
{
    cy.scrollTo('bottom');
    cy.wait(2000)
    cy.get('footer').scrollIntoView()
    cy.wait(3000)
    cy.get('header').scrollIntoView()
    cy.wait(2000)
}



export function Assertlocator (locator)
{
    if(locator.includes('//'))
        {
        cy.xpath(locator).should('be visible')
        }      
                    
         else {
        cy.get(locator).should('be visible')
        }
 }

export function Hover(locator)
{
    if(locator.includes('//'))
        {
        cy.xpath(locator).trigger('mouseover')
        }      
                    
         else {
            cy.get(locator).trigger('mouseover')
        }
  }

  //Logout
  export function Logout()
  {
      CommonMethods.Click(Logoutpage.btn_AccountButton)
      CommonMethods.Click(Logoutpage.btn_LogoutButton)
  }