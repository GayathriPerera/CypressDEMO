
export function Click(locator)
{
   
    if(locator.includes('//'))
        cy.xpath(locator).click()
    else
        cy.get(locator).click()
}

export function Fill(locator, text)
{
    if(locator.includes('//'))
        cy.xpath(locator).type(text)
    else
        cy.get(locator).type(text)
}

export function Assert(locator)
{
    if(locator.includes('//'))
      return  cy.xpath(locator)
    else
      return  cy.get(locator)

}