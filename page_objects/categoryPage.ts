import { BasePage } from './basePage';

export class CategoryPage extends BasePage {
    private lblProductName  = '.list-inline a.prdocutname';

    async getProductsName(): Promise<string[]> {
        return this.page.locator(this.lblProductName).allTextContents();
    }
}