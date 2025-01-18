describe('Explorar productos por categorías (TC001)', () => {
  beforeEach(() => {
    // Configuración inicial antes de cada prueba
    cy.visit('http://localhost:5173/productos'); // Cambia '/' por la ruta de tu vista de productos si es diferente
  });

  it('Debería mostrar una lista de categorías disponibles', () => {
    // Verificar que las categorías se cargan
    cy.get('button').contains('Todos').should('be.visible');
    cy.get('button').contains('Elegantes').should('be.visible');
    cy.get('button').contains('Deportivos').should('be.visible');
  });

  it('Debería mostrar los productos al seleccionar una categoría', () => {
    // Seleccionar la categoría "Elegantes" y verificar los productos
    cy.get('button').contains('Elegantes').click();
    cy.get('.grid .p-4').each(($product) => {
      cy.wrap($product)
        .find('h3')
        .should('contain.text', 'Elegantes');
    });

    // Seleccionar la categoría "Deportivos" y verificar los productos
    cy.get('button').contains('Deportivos').click();
    cy.get('.grid .p-4').each(($product) => {
      cy.wrap($product)
        .find('h3')
        .should('contain.text', 'Deportivos');
    });
  });

  it('Debería mostrar todos los productos al seleccionar "Todos"', () => {
    // Seleccionar la opción "Todos"
    cy.get('button').contains('Todos').click();
    cy.get('.grid .p-4').should('have.length.greaterThan', 0); // Asegura que haya productos
  });

  it('Los productos deben estar organizados correctamente', () => {
    // Seleccionar una categoría y verificar la consistencia en los productos
    cy.get('button').contains('Elegantes').click();
    cy.get('.grid .p-4').then(($productsElegantes) => {
      const elegantesCount = $productsElegantes.length;

      cy.get('button').contains('Deportivos').click();
      cy.get('.grid .p-4').then(($productsDeportivos) => {
        const deportivosCount = $productsDeportivos.length;

        // Confirmar que los conteos son consistentes y no hay superposición
        expect(elegantesCount).to.be.greaterThan(0);
        expect(deportivosCount).to.be.greaterThan(0);
        expect(elegantesCount + deportivosCount).to.equal(
          $productsElegantes.length + $productsDeportivos.length
        );
      });
    });
  });
});
