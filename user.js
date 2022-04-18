const $ = document.querySelector.bind(document)

var keyLocalStorage = 'chiTietSanPham'

function getItemProductDetails() {
    var listItemProductDetails = new Array();

    var jsonListProduct = localStorage.getItem('keyLocalStorage')

    if(jsonListProduct != null) {
        listItemProductDetails = JSON.parse(jsonListProduct)
    }
    return listItemProductDetails;
}
