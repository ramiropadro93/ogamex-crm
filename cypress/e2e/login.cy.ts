describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://hyper.ogamex.net/empire');
    cy.get('.btnPlay').first().click();
    cy.contains('.btnBottom', 'Login').click({force: true});
    cy.get('input[name="Email"]').first().type('ramiroperez301193@gmail.com');
    cy.get('input[name="Password"]').first().type('rami38050222');
    cy.get('#btnLogin').click();
    cy.get('.server-item').first().find('a[href="/connect?serverId=cc9220f8-077f-4b3c-93d5-48f51dc7f51d"]').invoke('attr', 'target', '_self').click();
  });
})

