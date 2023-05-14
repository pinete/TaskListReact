/* global cy */
describe('Testeamos nuestra aplicacion de notas', () => {
  it('se renderiza correctamente', () => {
    cy
    .visit('/')
    .contains('Task List v2 - hosted on: Firebase')
  })
})