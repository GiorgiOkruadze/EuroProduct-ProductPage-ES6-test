class ProductService{

    constructor(){
        this.apiUrl = "https://europroductcms.azurewebsites.net/api/fetchProducysStepByStep/1/350"
        this.productsArea = document.querySelector(".products");
        this.getProductsObjects();
    }

    shutDownAnimation(){
        var animation = document.querySelector(".loading");
        animation.style.display = "none";
    }

    getProductHtml(obj){
        return `<div class="card mb-3" style="max-width: 480px; max-height: 235px;">
                    <div class="row no-gutters">
                        <div class="col-md-6">
                            <img class="prod-img" src="${obj.CoverImages[0]}" class="card-img" alt="...">
                        </div>
                        <div class="col-md-6">
                            <div class="card-body">
                                <h5 class="card-title">${obj.Name}</h5>
                                <span class="card-text">${obj.LongDescription}</span>
                                <p class="card-text"><small class="text-muted">product category : ${obj.ProductCategory.Name}</small></p>
                            </div>
                        </div>
                    </div>
                </div>`
    }

    renderProductsItems(objects){
        objects.forEach(o => {
            this.productsArea.innerHTML += this.getProductHtml(o);
        });
    }

    getProductsObjects(){
        var self = this;
        WebWorker.getJsonFromApi(this.apiUrl,(objects) => {
            self.renderProductsItems(objects);
            self.shutDownAnimation();
        });
    }
}