/// <reference types="cypress" />
/* global cy */

describe('Testeamos nuestra aplicacion de notas', () => {
  beforeEach(()=> {
    cy.visit('/')
  });
  // o tambien beforeAll() que se ejecuta una vez para todos los tests, pero queremos que se cargue en cada test

  it('se renderiza correctamente', () => {
    cy.contains('Task List v2 - hosted on: Firebase')
  });

  it("Podemos añadir una nueva tarea", () => {
    const textNewTask = "Testeamos en cypress"
    // Busca un input con placeholder "New Task"
    cy.get('input[placeholder = "New Task"]')
      // escribe el value de textNewTask
      .type(textNewTask)
    // Busca un boton con la clase "btn"
    cy.get('button#btnCreateTask')
      //Púlsalo
      .click()
    // Espera 2 seg para dar tiempo a que se cree la nueva tarea
    cy.wait(2000);
    // Busca el elemento con clase "list-none" y obten los li que tengas dentro
    cy.get('li.list-none')
      // El último debe contener el valor de 'textNewTask'
      .last().contains(textNewTask)
  });

  it("Podemos eliminar la tarea", () => { 
    // pulsamos boton Del de la tarea que hemos creado
    const item = cy.get('li.list-none').last()
    const btnDel = item.children('.testb1')
    btnDel.click()
    //Pulsamos boton Yes de modal ¿esta seguro?
    const modal = cy.get('#modalOkCancel')
    const modalBtnYes = modal.get('button').contains('Yes, delete it')
    modalBtnYes.click()
  });
})