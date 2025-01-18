describe('Ver detalles de un producto en Shoes-Ya', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/productos'); // Navegar a la sección de productos
  });

  it('Debería redirigir a la página de detalles del producto y mostrar información correcta', () => {
    cy.get('.grid > div') // Selector de los productos en la cuadrícula
      .first()
      .within(() => {
        // Hacer clic en el enlace del producto
        cy.get('a').click();
      });

    cy.url().should('include', '/detalle');

    cy.get('h1').should('exist').and('not.be.empty');

    cy.get('#price') // Cambia el selector según tu diseño
      .should('exist')
      .and('contain.text', '$');

    cy.get('#image') // Cambia el selector según tu diseño
      .should('have.length.at.least', 1)
      .and('be.visible');

    cy.get('#description') // Cambia el selector según tu diseño
      .should('exist')
      .and('not.be.empty');
  });
});
