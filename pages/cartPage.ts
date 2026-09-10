import { Locator, Page } from '@playwright/test'

export class CartPage {
    page: Page
    cartRows: Locator
    cartProductNames: Locator
    cartProductPrices: Locator
    checkoutButton: Locator
    removeButtons: Locator

    constructor(page: Page) {
        this.page = page
        this.cartRows = this.page.locator('div.cartSection')
        this.cartProductNames = this.page.locator('div.cartSection h3')
        this.cartProductPrices = this.page.locator('div.cartSection .amount')
        this.checkoutButton = this.page.getByText('Checkout')
        this.removeButtons = this.page.locator('button:has-text("Remove")')
    }

    async verifyProductInCart(productName: string): Promise<boolean> {
        await this.cartRows.nth(0).waitFor()
        const count = await this.cartProductNames.count()

        for (let i = 0; i < count; i++) {
            const itemName = (await this.cartProductNames.nth(i).textContent())?.trim().toLowerCase()
            if (itemName === productName.trim().toLowerCase()) {
                return true
            }
        }

        return false
    }

    async goToCheckout() {
        await this.checkoutButton.waitFor()
        await this.checkoutButton.click()
    }
}
