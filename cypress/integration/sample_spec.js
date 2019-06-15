describe('My First Test', function() {
  beforeEach(function () {
    cy.visit('https://www.amazon.com/')
  })

  it('should login failed with error account', function () {
    cy.get('#nav-your-amazon').click()
    cy.get('#ap_email').type('hhhh@gmail.com')
    cy.get('#ap_password').type('1234')
    cy.get('#signInSubmit').click()
    cy.get('#auth-error-message-box').should('be.visible')
  })
});