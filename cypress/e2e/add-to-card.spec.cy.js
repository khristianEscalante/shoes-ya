describe('Agregar producto al carrito', () => {
  beforeEach(() => {
    // Navega al producto con el id correspondiente
    cy.visit('http://localhost:5173/detalle/1'); // Cambia el `1` por el id que quieras probar.
  });

  it('Debería mostrar correctamente los detalles del producto', () => {
    // Verifica que los elementos esenciales del producto estén presentes
    cy.get('#image').should('be.visible');
    cy.get('#description').should('not.be.empty');
    cy.get('#price').should('exist')
  });

  it('Debería agregar el producto al carrito correctamente', () => {
    // Selecciona una talla (si aplica)
    cy.get('select').select('42'); // Cambia '42' según las opciones disponibles.

    // Haz clic en el botón "Agregar al carrito"
    cy.get('button').contains('Agregar al carrito').click();

    // Verifica que se muestre la notificación de confirmación
    cy.contains('1').should('be.visible');

    // Navega al carrito
    cy.visit('http://localhost:5173/carrito');

    // Verifica que el producto esté en el carrito
    cy.get('.item-cart').should('exist');
  });

  it('Deberia autem')
});
