/* global cy */
import React from 'react'
import TaskList from './TaskList'

describe('<TaskList />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<TaskList />)
  })
})