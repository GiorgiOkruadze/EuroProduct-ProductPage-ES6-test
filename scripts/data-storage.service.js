class DataStorageService
{
    static allProductsArray = LocalStorageService.readFromLocalStorage();

    static setProductsData(products){
        LocalStorageService.writeInLocalStorage(products);
        DataStorageService.allProductsArray.concat(products);
    }

    static getProductsData(){
        return DataStorageService.allProductsArray;
    }
}