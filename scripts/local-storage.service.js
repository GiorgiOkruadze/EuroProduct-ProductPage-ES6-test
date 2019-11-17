class LocalStorageService
{
    static writeInLocalStorage(product){
        localStorage["products"] = JSON.stringify(product);
    }

    static readFromLocalStorage(){
        var tmpProducts;
        try{
            tmpProducts = JSON.parse(localStorage['products']);
        }catch(arr){
            tmpProducts = new Array();
        }

        return tmpProducts;
    }

    static checkLocalStorage(){
        return LocalStorageService.readFromLocalStorage().length != 0;
    }
}