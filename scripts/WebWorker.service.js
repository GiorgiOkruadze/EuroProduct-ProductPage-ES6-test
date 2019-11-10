class WebWorker {
    static getJsonFromApi(api,func){
        var xmlHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.open("GET",api,true);
        xmlHttpRequest.onloadend = function(){
            var jsonObjsText = xmlHttpRequest.responseText;
            var objects = JSON.parse(jsonObjsText);
            func(objects);
        }
        xmlHttpRequest.send();
    }
}