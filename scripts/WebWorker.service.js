class WebWorker {
    static getJsonFromApi(api,func){
        var xmlHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.open("GET",api,true);
        xmlHttpRequest.onloadend = function(){
            var jsonObjsText = xmlHttpRequest.responseText;
            var objects = JSON.parse(jsonObjsText);
            DataStorageService.setProductsData(objects)
            func(objects);
        }
        xmlHttpRequest.send();
    }

    static getJsonObjects(api,func){
        if(LocalStorageService.checkLocalStorage()){
            let rezult = DataStorageService.getProductsData();
            func(rezult);
        }else{
            WebWorker.getJsonFromApi(api,func);
        }
    }
}