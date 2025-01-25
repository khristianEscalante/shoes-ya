describe('Formulario de Contacto - Shoes-Ya', () => {
  beforeEach(() => {
    // Navegar al sitio web y acceder a la sección de contacto
    cy.visit('http://localhost:5173/contacto'); // Asegúrate de ajustar la ruta si es diferente.
  });

  it('Debería enviar un mensaje de contacto exitosamente', () => {
    // Verifica que los elementos esenciales del formulario estén presentes
    cy.get('h1').should('contain', 'Contáctanos');
    cy.get('input#name').should('be.visible');
    cy.get('input#mail').should('be.visible');
    cy.get('textarea#message').should('be.visible');
    cy.get('button[type="submit"]').should('be.visible').and('not.be.disabled');

    // Completar los campos del formulario con datos válidos
    cy.get('input#name').type('Juan Pérez');
    cy.get('input#mail').type('juan.perez@example.com');
    cy.get('textarea#message').type('¿Tienen disponibilidad del modelo XYZ en talla 42?');

    // Enviar el formulario
    cy.get('button[type="submit"]').click();

    // Verificar que se muestra el mensaje de éxito
    cy.get('.text-green-500').should('contain', '¡Mensaje enviado exitosamente!');

    // Asegurarse de que los campos del formulario estén vacíos después del envío
    cy.get('input#name').should('have.value', '');
    cy.get('input#mail').should('have.value', '');
    cy.get('textarea#message').should('have.value', '');
  });

  it('Debería mostrar errores de validación si faltan campos obligatorios', () => {
    // Intentar enviar el formulario sin completar los campos
    cy.get('button[type="submit"]').click();

    // Verificar que aparecen los mensajes de error
    cy.get('p.text-red-500').should('contain', 'El nombre es requerido.');
    cy.get('p.text-red-500').should('contain', 'El correo electrónico es requerido.');
    cy.get('p.text-red-500').should('contain', 'El mensaje es requerido.');
  });

  it('Debería validar el formato del correo electrónico', () => {
    // Completar los campos con un correo inválido
    cy.get('input#name').type('Juan Pérez');
    cy.get('input#mail').type('correo-invalido');
    cy.get('textarea#message').type('Este es un mensaje de prueba.');

    // Intentar enviar el formulario
    cy.get('button[type="submit"]').click();

    // Verificar el mensaje de error para el correo
    cy.get('p.text-red-500').should('contain', 'El correo electrónico no es válido.');
  });
});
