describe('SOP page links', () => {
  it('should navigate to the linked page', () => {
    cy.visit('http://localhost:5173/SOP');


    cy.get('a').each(($link) => {
      const href = $link.prop('href');

      if (href && !href.includes('#')) {
        cy.request(href)
          .its('status')
          .should('equal', 200);
      }
    });
  });
});
