
import {test,expect} from  '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { DashboardPage } from '../pages/dashboardPage'
import { Excelutils } from '../utils/excelutils'
import path from 'node:path'


// filepath
const filepath = path.join(__dirname,"../testdata/login.xlsx")

// take the sheetname from the excel 
const sheetname = "LoginData"
let datas:any
try {
    datas = Excelutils.getExcelData(filepath, sheetname)
}
catch(e){
    console.log(e);
}

let lp :LoginPage
let dp: DashboardPage

test.beforeEach(async({page}) =>{
    lp = new LoginPage(page)
    dp = new DashboardPage(page)
})

for(let products of datas){

      test(`add the item to cart ${products.productName}`, async() =>{
            await lp.launchUrl(products.url)
            await lp.loginIntoApplication(products.username, products.password)
            await expect(lp.homePageIdentifier).toBeVisible()
            await dp.viewAndAddProduct(products.productName,1)
            await expect(dp.addToCartMessage).toHaveText('Product Added To Cart')
        })
}