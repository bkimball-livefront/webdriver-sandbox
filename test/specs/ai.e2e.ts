import { browser, expect } from '@wdio/globals'
import { z } from 'zod'

describe('My Login application (AI steps)', () => {
    it('should login with valid credentials', async () => {
        await browser.url('https://the-internet.herokuapp.com/login')

        await browser.act('Log in as {{username}} with password {{password}}', {
            values: { username: 'tomsmith', password: 'SuperSecretPassword!' }
        })

        const message = await browser.extract('the text of the flash message', z.string())
        expect(message).toContain('You logged into a secure area!')
    })
})
