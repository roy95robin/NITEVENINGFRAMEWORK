# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: paymentPageTest.spec.ts >> payment page should complete the cart checkout flow
- Location: tests\paymentPageTest.spec.ts:28:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('div.cartSection').first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('div.cartSection').first()

```

```yaml
- navigation:
  - link "Automation Automation Practice":
    - /url: ""
    - heading "Automation" [level=3]
    - paragraph: Automation Practice
  - link "🎯 I'll help you prepare for your next QA job — Explore the QA Career Accelerator.":
    - /url: https://rahulshettyacademy.com/qa-career-accelerator-job-ready
  - list:
    - listitem:
      - button " HOME"
    - listitem
    - listitem:
      - button " ORDERS"
    - listitem:
      - button " Cart"
    - listitem:
      - button "Sign Out"
- heading "My Cart" [level=1]
- button "Continue Shopping❯"
- heading "No Products in Your Cart !" [level=1]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | import { LoginPage } from '../pages/loginPage'
  3  | import { DashboardPage } from '../pages/dashboardPage'
  4  | import { CartPage } from '../pages/cartPage'
  5  | import { PaymentPage } from '../pages/paymentPage'
  6  | import paymentDetails from '../testdata/paymentDetails.json'
  7  | 
  8  | const testData = require('../testdata/testdata.json')
  9  | 
  10 | let lp: LoginPage
  11 | let dp: DashboardPage
  12 | let cp: CartPage
  13 | let pp: PaymentPage
  14 | 
  15 | const productName = 'ADIDAS ORIGINAL'
  16 | 
  17 | test.beforeEach(async ({ page }) => {
  18 |     lp = new LoginPage(page)
  19 |     dp = new DashboardPage(page)
  20 |     cp = new CartPage(page)
  21 |     pp = new PaymentPage(page)
  22 | 
  23 |     await lp.launchUrl(testData.url)
  24 |     await lp.loginIntoApplication(testData.email, testData.password)
  25 |     await expect(lp.homePageIdentifier).toBeVisible()
  26 | })
  27 | 
  28 | test('payment page should complete the cart checkout flow', async () => {
  29 |     await dp.viewAndAddProduct(productName, 1)
  30 |     await expect(dp.addToCartMessage).toContainText(testData.successMessage || 'Product Added To Cart')
  31 | 
  32 |     await dp.cart.click()
> 33 |     await expect(cp.cartRows.first()).toBeVisible()
     |                                       ^ Error: expect(locator).toBeVisible() failed
  34 | 
  35 |     const isVisibleInCart = await cp.verifyProductInCart(productName)
  36 |     expect(isVisibleInCart).toBeTruthy()
  37 | 
  38 |     await cp.goToCheckout()
  39 |     await pp.selectCountry(paymentDetails.country)
  40 |     expect(paymentDetails.cardNumber).toMatch(/^\d{16}$/)
  41 |     expect(paymentDetails.expiry).toMatch(/^(0[1-9]|1[0-2])\/\d{2}$/)
  42 |     expect(paymentDetails.cvv).toMatch(/^\d{3}$/)
  43 |     await pp.placeOrder()
  44 | 
  45 |     await expect(pp.orderConfirmation).toBeVisible()
  46 | })
  47 | 
```