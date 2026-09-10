
import { Locator, Page } from "@playwright/test";

export class DashboardPage{

    page:Page
    products: Locator
    homePageProductPrice: string
    viewPageProductName: Locator
    viewPageProductPrice: Locator
    addToCartMessage: Locator
    cart : Locator

        constructor(page:Page){
            this.page = page
            this.products = this.page.locator('div.card-body')
            this.homePageProductPrice = ""
            this.viewPageProductName = this.page.locator('.rtl-text h2')
            this.viewPageProductPrice = this.page.locator('.rtl-text h3')
            this.addToCartMessage = this.page.locator('#toast-container')
            this.cart = this. page.locator('[routerlink="/dashboard/cart"]')

        }

    // methods: 
    async viewAndAddProduct(productName:string, index:number){
        // wait for atleast one product to display 
         await this.products.nth(0).waitFor()
         const countOfProduct = await this.products.count()
         console.log(countOfProduct);

      // use for loop to iterate through all the products list

     for(let i = 0; i<countOfProduct;i++){
      const productText = await this.products.nth(i).locator('b').textContent()

    if(productText?.trim().toLowerCase()===productName.trim().toLowerCase()){
        this.homePageProductPrice = await this.products.nth(i).locator('div.text-muted').innerText()
        await this.products.nth(i).locator('button').nth(index).click()
        break
        }
     }

    }





}