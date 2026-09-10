

I want to create the cart and payment page automation for the url that is present in the testdata folder.
I have completed login and dahboard page, it also has separate page class and testdata folder.
in the same way create the script for cart and payment page so it can used as complete E2E flow.
Make sure you create the cart Page.ts and payment page.ts file separately and both will have the test.spec.ts file separately

# Cart and Payment Test Plan

## Application Overview

Use the shared login URL, email, and password from the workspace JSON test data to create a cart and payment regression plan that follows the existing login page object and dashboard product-list behavior across the product cards.

## Test Scenarios

### 1. Cart and Payment Flow

**Seed:** `tests/seed.spec.ts`

#### 1.1. Login and dashboard product discovery

**File:** `tests/cart-payment/login-dashboard.spec.ts`

**Steps:**

1. Navigate to the login URL stored in the JSON test data: https://rahulshettyacademy.com/client/#/auth/login.
   - expect: The login page loads and exposes the email, password, and login controls.
2. Use the email and password from the JSON test data to sign in through the LoginPage page object.
   - expect: The login control is accepted and the routerlink dashboard view becomes visible.
3. Read the products displayed by the DashboardPage products locator on the dashboard.
   - expect: At least one card-body product is visible, and the test can iterate over product cards by product name.

#### 1.2. Add a product from dashboard and land on cart page

**File:** `tests/cart-payment/add-to-cart.spec.ts`

**Steps:**

1. Open the dashboard product list and locate a product by productName from the product fixture set, such as ADIDAS ORIGINAL or ZARA COAT 3.
   - expect: The test finds the matching card-body product and captures the product price from the card.
2. Click the dashboard product card add-to-cart button for the selected product.
   - expect: The toast container shows Product Added To Cart, matching the existing dashboard page object behavior.
3. Click the cart locator bound to the dashboard cart route routerlink="/dashboard/cart".
   - expect: The cart page is opened and the product appears in cart summary.

#### 1.3. Cart page validation and item quantity checkout preparation

**File:** `tests/cart-payment/cart-validation.spec.ts`

**Steps:**

1. On the cart page, assert that the selected product row is visible with its expected name and price.
   - expect: The cart table or order-summary area contains the selected product.
2. Review the quantity controls or item count controls in the cart page.
   - expect: A user can increase, decrease, or keep the quantity without breaking the cart summary.
3. From the cart page, press the checkout button or proceed-to-checkout control.
   - expect: The application transitions from cart to payment or checkout details page without a blank route.

#### 1.4. Payment page and successful completion flow

**File:** `tests/cart-payment/payment.spec.ts`

**Steps:**

1. On the payment page, validate that the order amount and product line items are consistent with the cart item that was added.
   - expect: The editable billing or address section and the payment details section are available.
2. Input a valid payment selection or card details according to the business rules shown by the payment page.
   - expect: The page accepts the payment method and does not emit an error toast.
3. Complete the final payment or order confirmation action.
   - expect: The payment page gives feedback such as an order confirmation message, a success toast, or a redirected dashboard confirmation state.
