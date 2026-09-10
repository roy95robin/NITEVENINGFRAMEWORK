import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { DashboardPage } from '../pages/dashboardPage'
import product from '../testdata/product.json'

for(const p of product){

    test.describe(`test login ${p.productName}`,() =>{

        let lp:LoginPage
        let dp:DashboardPage
    
    test.beforeEach(async ({page}) =>{
        lp = new LoginPage(page)
        dp = new DashboardPage(page)
        await lp.launchUrl(p.url)
        await lp.loginIntoApplication(p.email, p.password)
    })

    test(`add the item to cart ${p.productName}`, async() =>{
        await dp.viewAndAddProduct(p.productName,1)
        await expect(dp.addToCartMessage).toContainText(p.sucessMessage,{ignoreCase:true})
    })

    test(`view the product ${p.productName}`, async() =>{
        await dp.viewAndAddProduct(p.productName, 0)
        await expect(dp.viewPageProductPrice).toBeVisible()
    })
})
}