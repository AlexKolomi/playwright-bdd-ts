import { BasePage } from './basePage';

export class CheckoutPage extends BasePage {
    private lblProductName  =  (productName: string) => `//*[@class="contentpanel"]//table//td/a[contains(text(), "${productName}")]`;

    async isProductPresent(productName: string): Promise<boolean> {
        return this.page.locator(this.lblProductName(productName)).isVisible();
    }
}