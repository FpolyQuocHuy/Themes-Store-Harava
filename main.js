


function taoId() {
    var id = ""
    id = Math.random().toString().substring(2, 10) + "-" + String(new Date().getTime());
    return id;
}
function createProducts(image, sale, name, price, id) {
    const product = new Object();
    product.image = image;
    product.sale = sale;
    product.name = name;
    product.price = price;
    if (id != null) {
        product.id = id;
    } else {
        product.id = taoId();
    }
    product.phanTramSale = function () {
        var giaBan = (this.price * (this.sale / 100));
        return giaBan;
    }
    product.toJson = function () {
        var json = JSON.stringify(this);
        return json;
    }
    product.fromJSONs = function (jsonListProduct) {
        var fullListProduct = new Array();
        var listProduct = JSON.parse(jsonListProduct);
        for (var i = 0; i < listProduct.length; i++) {
            var product = listProduct[i];
            var fullProduct = createProducts(product.image, product.sale, product.name, product.price)
            fullListProduct[i] = fullProduct;
        }
        return fullListProduct;
    }

    return product;
}
var listProduct = JSON.parse(localStorage.getItem('product'));

// set list object to HTML 
// input: listProduct
// output: HTML show listProduct
