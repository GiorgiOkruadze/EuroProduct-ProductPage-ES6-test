class FiltersService {
    static filterElementsIds = new Array();
    constructor(){
        this.apiUrl = "https://europroductcms.azurewebsites.net/api/productcategory";
        this.filterArea = document.querySelector(".filteres-list");
        this.getFilterObjects();
    }

    getFilterHtml(obj){
        return `<li onclick="FiltersService.filterItemClick(event,${obj.Id})" class="list-group-item"><img src="${obj.ImageUrl}"> ${obj.Name}</li>`
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

    static filterItemClick(event,id){
        let tmpProd = new Array();
        FiltersService.saveOrDeleteId(id);
        FiltersService.addStyleToFilterItem(event);

        if(FiltersService.filterElementsIds.length != 0){
            tmpProd = ProductsFilterService
                .getFilterProducts(FiltersService.filterElementsIds);
        }else{
            tmpProd = DataStorageService.getProductsData();
        }
        
        var productsService = new ProductService();
        productsService.renderProductsItems(tmpProd);
    }

    static addStyleToFilterItem(event){
        event.toElement.classList.toggle("selectedItem");
    }

    static saveOrDeleteId(id){
        var exist = FiltersService.filterElementsIds
            .some(o => o == id);
        
        if(exist){
            let index = FiltersService.filterElementsIds.indexOf(id);
            FiltersService.filterElementsIds.splice(index,1);
        }else{
            FiltersService.filterElementsIds.push(id);
        }
    }
}