class ProductsFilterService {
    static getFilterProducts(ids){
        var rezult = DataStorageService.getProductsData()
            .filter(o => ids.some(x => x == o.ProductCategory.Id));

        return rezult;
    }
}