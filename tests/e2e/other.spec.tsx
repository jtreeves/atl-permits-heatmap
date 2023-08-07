import { mount } from '@cypress/react'
import App from '@/App'

describe('other for cypress', () => {
    it('works', () => {
        mount(<App />)
        cy.get('p').contains('Hello, world!')
    })
})
