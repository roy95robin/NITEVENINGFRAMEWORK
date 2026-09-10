import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { DashboardPage } from '../pages/dashboardPage'
import { CartPage } from '../pages/cartPage'
import { PaymentPage } from '../pages/paymentPage'
import paymentDetails from '../testdata/paymentDetails.json'

const testData = require('../testdata/testdata.json')

let lp: LoginPage
let dp: DashboardPage
let cp: CartPage
let pp: PaymentPage

const productName = 'ADIDAS ORIGINAL'

test.beforeEach(async ({ page }) => {
    lp = new LoginPage(page)
    dp = new DashboardPage(page)
    cp = new CartPage(page)
    pp = new PaymentPage(page)

    await lp.launchUrl(testData.url)
    await lp.loginIntoApplication(testData.email, testData.password)
    await expect(lp.homePageIdentifier).toBeVisible()
})

test('payment page should complete the cart checkout flow', async () => {
    await dp.viewAndAddProduct(productName, 1)
    await expect(dp.addToCartMessage).toContainText(testData.successMessage || 'Product Added To Cart')

    await dp.cart.click()
    await expect(cp.cartRows.first()).toBeVisible()

    const isVisibleInCart = await cp.verifyProductInCart(productName)
    expect(isVisibleInCart).toBeTruthy()

    await cp.goToCheckout()
    await pp.selectCountry(paymentDetails.country)
    expect(paymentDetails.cardNumber).toMatch(/^\d{16}$/)
    expect(paymentDetails.expiry).toMatch(/^(0[1-9]|1[0-2])\/\d{2}$/)
    expect(paymentDetails.cvv).toMatch(/^\d{3}$/)
    await pp.placeOrder()

    await expect(pp.orderConfirmation).toBeVisible()
})
