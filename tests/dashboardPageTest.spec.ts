
import {test , expect} from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { DashboardPage } from '../pages/dashboardPage'

// first time lets perform action using hard coded value 
const url = " https://rahulshettyacademy.com/client/#/auth/login"
let email= 'testnHNk@gmail.com'
let password= 'Testing@1234'
let productName= "ADIDAS ORIGINAL"
// email: bexeb75958@fidhost.com
// PW: Test@123

let lp:LoginPage
let dp:DashboardPage
test.beforeEach(async ({page}) =>{
    lp = new LoginPage(page)
    dp = new DashboardPage(page)
    await lp.launchUrl(url)
    await lp.loginIntoApplication(email, password)
    await expect(lp.homePageIdentifier).toBeVisible()
})

test('Add the item to cart', async() =>{
    await dp.viewAndAddProduct(productName, 1)
    await expect(dp.addToCartMessage).toHaveText('Product Added To Cart ')

})
test('View the item', async() =>{
    await dp.viewAndAddProduct(productName, 0)
    await expect(dp.viewPageProductPrice).toHaveText(dp.homePageProductPrice)

})



