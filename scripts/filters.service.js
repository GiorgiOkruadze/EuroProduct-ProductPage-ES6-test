class FiltersService {
    constructor(){
        this.apiUrl = "https://europroductcms.azurewebsites.net/api/productcategory";
        this.filterArea = document.querySelector(".filteres-list");
        this.getFilterObjects();
    }

    getFilterHtml(obj){
        return `<li class="list-group-item"><img src="${obj.ImageUrl}"> ${obj.Name}</li>`
    }

    renderFilterItems(objects){
        for(var i = 0; i < objects.length; i++)
        {
            this.filterArea.innerHTML += this.getFilterHtml(objects[i]);
        }
    }

    getFilterObjects(){
        var self = this;
        WebWorker.getJsonFromApi(this.apiUrl,(objects) => {
            this.renderFilterItems(objects);
        })
    }
}