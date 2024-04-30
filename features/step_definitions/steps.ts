import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { page } from '../support/hooks';
import { ShopPage, CategoryPage, CheckoutPage } from '../../page_objects';

Given('I am on the homepage', async function () {
    await page.goto('https://automationteststore.com/');
});

Given('I have added items {string} to the cart', async function (saleProductNames: string) {
    const shopPage = new ShopPage(page);
    this.productNames = saleProductNames.split(',').map(name => name.trim());
    await Promise.all(this.productNames.map(async (productN: string) => {
        await shopPage.addProduct(productN);
    }));
});

When('I filter products by {string} and {string}', async function (category: string, subCategory: string) {
    const shopPage = new ShopPage(page);
    await shopPage.filterByCategories(category, subCategory);
});

When('I add a sale product {string} to the cart', async function (saleProductName: string,) {
    const shopPage = new ShopPage(page);
    this.productName = saleProductName;
    await shopPage.addSpecialProduct(saleProductName);
});

When('I view the cart', async function () {
    await page.goto('https://automationteststore.com/index.php?rt=checkout/cart');
});

Then('I should see {string}', async function (productNames: string) {
    const expectedProductNames = productNames.split(',').map(name => name.trim());
    const allProducts = await new CategoryPage(page).getProductsName();
    expect(allProducts, `Expected products list`).to.have.members(expectedProductNames);
});

Then('The product cart should be highlighted', async function () {
    const shopPage = new ShopPage(page);
    await expect(await shopPage.isSpecialProductHighlighted(this.productName),`Expected product: '${this.productName}' card should be highlighted`)
        .to.be.true;
});

Then('I should see the added items', async function () {
    const checkoutPage = new CheckoutPage(page);
    await Promise.all(this.productNames.map(async (productN: string) => {
        await expect(await checkoutPage.isProductPresent(productN),`Expected product: '${productN}' should be added`)
            .to.be.true;
    }));
});
