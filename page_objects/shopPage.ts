import { BasePage } from './basePage';

export class ShopPage extends BasePage {
    private btnCategory  = (categoryName: string) => `//nav//*[@class="subcategories"]/../a[contains(text(), "${categoryName}")]`;
    private btnSubCategory  = (categoryName: string, subCategoryName: string) => `${this.btnCategory(categoryName)}/..//*[@class="subcategories"]//a[contains(text(), "${subCategoryName}")]`;
    private btnAddSpecialProductToCard = (productName: string) => `//*[@id="special"]//*[@title="${productName}"]/../../..//*[@class="productcart"]`;
    private btnAddProductToCard = (productName: string) => `//section//*[@title="${productName}"]/../../..//*[@class="productcart"]`;
    private highlightedSpecialProductCard = (productName: string) => `//*[@id="special"]//*[@title="${productName}"]/../../..//*[contains(@class,"added_to_cart")]`;

    async filterByCategories(category: string, subCategory: string): Promise<void> {
        await this.hover(this.btnCategory(category));
        await this.click(this.btnSubCategory(category, subCategory));
    }

    async addSpecialProduct(productName: string): Promise<void> {
        await this.click(this.btnAddSpecialProductToCard(productName));
    }

    async addProduct(productName: string): Promise<void> {
        await this.click(this.btnAddProductToCard(productName));
    }

    async isSpecialProductHighlighted(productName: string): Promise<boolean> {
        return  this.page.locator(this.highlightedSpecialProductCard(productName)).isVisible();
    }
}