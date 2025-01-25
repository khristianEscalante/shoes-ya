describe('Gestionar el carrito', () => {
  beforeEach(() => {
    // Paso 1: Navegar al producto y agregarlo al carrito antes de cada prueba
    cy.visit('http://localhost:5173/detalle/3'); // Cambia el `1` por el ID del producto deseado.
    cy.get('button').contains('Agregar al carrito').click(); // Haz clic en "Agregar al carrito".

    // Paso 2: Navegar al carrito para iniciar las pruebas
    cy.visit('http://localhost:5173/carrito'); // Asegúrate de que la URL sea correcta.
  });

  it('Debería mostrar correctamente los productos en el carrito', () => {
    // Verifica que el carrito contiene productos añadidos previamente
    cy.get('.item-cart').should('have.length.at.least', 1); // Asegúrate de que hay al menos un producto.
    cy.get('.item-cart').first().within(() => {
      cy.get('#test-name').should('exist');
      cy.get('#test-price').should('exist');
    });
    // Verifica que el total general esté visible y no sea 0
    cy.get('#test-total').should('exist').and('not.contain', '$0.00');
  });

  it('Debería modificar la cantidad de un producto y actualizar los totales', () => {
    // Modifica la cantidad del primer producto
    cy.get('.item-cart').first().within(() => {

      cy.get('#test-aumentar').click(); // Si es necesario, haz clic en un botón para actualizar.
      // Verifica que el subtotal se actualiza correctamente
      cy.get('.product-subtotal').should('not.be.empty');
    });
    // Verifica que el total general se actualice
    cy.get('#test-total').should('not.contain', '$0.00');
  });

  it('Debería eliminar un producto del carrito y actualizar el total', () => {
    // Elimina el primer producto del carrito
    cy.get('.item-cart').first().within(() => {
      cy.get('#test-cart-delete').click(); 
    });
    // Verifica que el producto fue eliminado
    cy.get('.item-cart').should('have.length.lessThan', 1); // Cambia según el número inicial de productos.
    // Verifica que el total general se ajusta
    cy.get('#test-total').should('exist').and('not.contain', '$0.00');
  });
});
