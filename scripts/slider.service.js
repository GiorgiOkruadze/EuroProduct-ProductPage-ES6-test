class SliderService {
    constructor(){
        var randProdIndex = Math.floor(Math.random()*100);
        this.apiUrl = `https://europroductcms.azurewebsites.net/api/fetchProducysStepByStep/${randProdIndex}/${randProdIndex+6}`;
        this.carouselArea = document.querySelector(".carousel-inner");
        this.getSliderObjects();
    }

    getSliderItemHtml(prodObjs,activeClass){
        return `<div class="carousel-item ${activeClass}">
                    <img src="${prodObjs.CoverImages[0]}" class="d-block w-100" alt="https://bit.ly/36SArIG">
                </div>`
    }

    renderSliderItems(objects){
        for(var i = 0; i < objects.length; i++){
            var specialClass = i == 0 ? "active":"";
            this.carouselArea.innerHTML += this.getSliderItemHtml(objects[i],specialClass)
        }
    }

    getSliderObjects(){
        var self = this;
        WebWorker.getJsonFromApi(this.apiUrl,(objects) => {
            self.renderSliderItems(objects)
        })
    }
}