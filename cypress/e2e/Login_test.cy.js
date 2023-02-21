///<reference types ="cypress" />
//()//*[@id="email"]

it('SWAGLAB LOGIN Test', function()
{

  cy.visit('https://brandhook.com.bd/')

  cy.xpath("//button[contains(@onclick,'moeRemoveBanner()')]").click()
  cy.xpath("(//a[contains(.,'Login')])[1]").click()
  cy.xpath("//*[@id='email']").type('pg.purnoghosh@gmail.com')
  cy.xpath("//input[@id='password']").type('11111111')
  cy.xpath("//button[contains(.,'Login')]").click()


}

)