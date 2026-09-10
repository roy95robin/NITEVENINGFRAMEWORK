import { Locator, Page } from '@playwright/test'
import paymentDetails from '../testdata/paymentDetails.json'

export class PaymentPage {
    page: Page
    countryInput: Locator
    countrySuggestion: Locator
    placeOrderButton: Locator
    orderConfirmation: Locator
    toastMessage: Locator

    constructor(page: Page) {
        this.page = page
        this.countryInput = this.page.getByPlaceholder('Select Country')
        this.countrySuggestion = this.page.locator('section.ta-results button')
        this.placeOrderButton = this.page.getByText('Place Order')
        this.orderConfirmation = this.page.getByText('THANKYOU FOR THE ORDER')
        this.toastMessage = this.page.locator('#toast-container')
    }

    async selectCountry(countryName = paymentDetails.country) {
        // The checkout autocomplete only loads suggestions as keyboard input events occur.
        await this.countryInput.pressSequentially(countryName)
        await this.countrySuggestion
            .filter({ hasText: new RegExp(`^\\s*${countryName}\\s*$`, 'i') })
            .click()
    }

    async placeOrder() {
        await this.placeOrderButton.waitFor()
        await this.placeOrderButton.click()
    }
}
