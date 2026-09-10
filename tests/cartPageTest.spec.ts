import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { DashboardPage } from '../pages/dashboardPage'
import { CartPage } from '../pages/cartPage'

const testData = require('../testdata/testdata.json')

let lp: LoginPage
let dp: DashboardPage
let cp: CartPage

const productName = 'ADIDAS ORIGINAL'

test.beforeEach(async ({ page }) => {
    lp = new LoginPage(page)
    dp = new DashboardPage(page)
    cp = new CartPage(page)

    await lp.launchUrl(testData.url)
    await lp.loginIntoApplication(testData.email, testData.password)
    await expect(lp.homePageIdentifier).toBeVisible()
})

test('cart page should show the product added from dashboard', async () => {
    await dp.viewAndAddProduct(productName, 1)
    await expect(dp.addToCartMessage).toContainText(testData.successMessage || 'Product Added To Cart')

    await dp.cart.click()
    await expect(cp.cartRows.first()).toBeVisible()

    const isVisibleInCart = await cp.verifyProductInCart(productName)
    expect(isVisibleInCart).toBeTruthy()
})


/*
Create a new folder 
Enable AI agents 
ask the agent to download the playwright
and the give any url and ask it to generate the framework in POM formet. 
Having  separate page and test files and also testdata file. 

*/