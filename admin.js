const $ = document.querySelector.bind(document)
var openFrm = $(".btn-addProduct")
openFrm.addEventListener('click', function () {
    $(".container-form").classList.add("open")
})
// open form edit


$(".close").addEventListener('click', function () {
    $(".container-form").classList.remove("open")
})
// $(".close1").addEventListener('click', function () {
//     $(".form-edit").classList.remove("open")
// })
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
//     product.fromJSONs = function (jsonListProduct) {
//         var fullListProduct = new Array();
//         var listProduct = JSON.parse(jsonListProduct);
//         for (var i = 0; i < listProduct.length; i++) {
//             var product = listProduct[i];
//             var fullProduct = createProducts(product.image, product.sale, product.name, product.price)
//             fullListProduct[i] = fullProduct;
//         }
//         return fullListProduct;
//     }

    return product;
}

// set list object to HTML 
// input: listProduct
// output: HTML show listProduct
function productToHTML(listProduct) {
    var HTMLproduct = '<div class="container-wrap-product">';
    for (let i = 0; i < listProduct.length; i++) {
        var products = listProduct[i];
        var htmlProduct = objectToHTML(products);
        HTMLproduct = HTMLproduct + htmlProduct;
    }
    HTMLproduct += '</div>'
    return HTMLproduct;
}
// set object to HTML
// input: object
//output: HTML
function objectToHTML(sanPham) {
    var format = sanPham.price
    format = format.toLocaleString('it-IT', {style : 'currency', currency : 'VND'}); 
    var html = '';
    html += '<div class="product-wrap">'
    html += '<img src="' + sanPham.image + '" alt="" class="img-product-wrap">'
    html += '<div class="menu-item-2">'
    html += '<i class="icon-product-wrap fas fa-arrows-rotate"></i>'
    html += ' <i class="icon-product-wrap fas fa-magnifying-glass-plus"></i>'
    html += '<i class="icon-product-wrap fas fa-eye"></i>'
    html += '</div>'
    html += '<p class="khuyen-mai">-' + sanPham.sale + '%</p>'
    html += '<a href="index2.html" class="title-product-wrap">' + sanPham.name + '</a>'
    html += '<p class="price-product-wrap">gi?? ' + format + ' <span class="sale"> <strike></strike></span></p>'
    html += '<button onclick="onClickEdit(\'' + sanPham.id + '\')" class="btn btn-editProduct">Edit</button>'
    html += '<button onclick="onClickXoa(\'' + sanPham.id + '\')" class="btn btn-deleteProduct">Delete</button>'
    html += '</div>'
    return html;
}

function getElementById() {
    var JsonProduct = localStorage.getItem('product')
    var listProduct = JSON.parse(JsonProduct)

    for (let i = 0; i < listProduct.length; i++) {
        var currenProduct = listProduct[i];
        if (currenProduct.id == id) {
            return currenProduct;
        }
    }
}


var listProduct = JSON.parse(localStorage.getItem('product'));
if (listProduct == null) {
    listProduct = new Array();
}
$("#form").addEventListener('submit', (e) => {
    e.preventDefault();
    const image = $("#image").value
    const name = $("#name").value
    var nodeprice = $("#price")
    const price = parseInt(nodeprice.value)
    var nodesale = $("#sale")
    const sale = parseInt(nodesale.value)
    if(image === "" || name === "" || price ==="" || sale ===""){
        alert("Vui l??ng nh???p ?????y ????? th??ng tin")
    }else {
        var product = createProducts(image, sale, name, price, null)
        //th??m s???n ph???m v??o danh s??ch s???n ph???m
        listProduct.push(product)
        var productJson = JSON.stringify(listProduct);
        //l??u tr??? danh s??ch s???n ph???m xu???ng localStorage
        localStorage.setItem('product', productJson);
    }

})



    //1. get Product from localStorage
    var jsonListProduct = localStorage.getItem('product')
    var listProduct = JSON.parse(jsonListProduct);
    var listProducts = function createProducts(listProduct)

   
    // 2. change object to HTML
    var HTML = productToHTML(listProduct);
    
    //3. set HTML to section product
    var nodeProduct = $("#product");
    
    nodeProduct.innerHTML = HTML;

// $(".btn-deleteProduct").addEventListener('click', function() {
//     alert("click")
// })


function onClickXoa(idProduct) {
    var current = listProduct;
    for (let i = 0; i < current.length; i++) {
        var product = current[i];
        if (idProduct === product.id) {
            listProducts.splice(i, 1);
            alert("???? x??a 1 s???n ph???m")
            console.log(listProducts);
            localStorage.removeItem('product')
        
            var productJson = JSON.stringify(listProducts);
        
            //l??u tr??? danh s??ch s???n ph???m xu???ng localStorage
            localStorage.setItem('product', productJson);
            productToHTML(listProducts);
        }
    }
    //x??a local v?? l??u l???i danh s??ch s???n ph???m
  
}


//open form edit

function onClickEdit(idProduct) {
    $(".form-edit").classList.add("open")
    
    var spId = listProduct;
    for (let i = 0; i < spId.length; i++) {
        const element = spId[i];
        if(idProduct == element.id){
            $("#image-edit").value = element.image;
            $("#name-edit").value = element.name;
            $("#price-edit").value = element.price;
            $("#sale-edit").value = element.sale;

        }
    }
    

    $("#form-edit").addEventListener('submit', (e) => {
        e.preventDefault();
        const imageEdit = $("#image-edit").value
        const nameEdit = $("#name-edit").value
        var nodeprice = $("#price-edit")
        const priceEdit = parseInt(nodeprice.value)
        var nodesale = $("#sale-edit")
        const saleEdit = parseInt(nodesale.value)


        var current = listProduct;
        if(imageEdit ==="" || nameEdit === "" ||priceEdit ===""||saleEdit ===""){
            alert("Vui l??ng nh???p ?????y ????? th??ng tin")
        }else {
         var newProduct = createProducts(imageEdit, saleEdit, nameEdit, priceEdit, null);

         for (let i = 0; i < current.length; i++) {
             var product = current[i];
             if (idProduct === product.id) {
                alert("Th??m s???n ph???m th??nh c??ng")
                 listProduct[i] = newProduct;
                 console.log(listProduct);
                 localStorage.removeItem('product')
 
                 var productJson = JSON.stringify(listProduct);
                 localStorage.setItem('product', productJson);
                 productToHTML(listProduct);
 
             }
 
         }
        }
    })
    
}
$(".close1").addEventListener('click', function () {
    $(".form-edit").classList.remove("open")
})


//l???y th??ng tin s???n ph???m mu???n s???a len form



function searchProduct() {
    const inputSearch = $("#search-product").value
    if(inputSearch === ""){
        alert("M???i b???n nh???p t??n s???n ph???m mu???n t??m ki???m")
    }else {
        var listSearch = listProduct;
        var flag = true;
        for(let i = 0; i < listSearch.length; i++){
            var current = listSearch[i];
            var name = current.name.toLowerCase();
            var nameSearch = inputSearch.toLowerCase();
            if(name === nameSearch){
                alert("???? t??m th???y s???n ph???m")
                // $("#container-wrap-product-search").classList.add("open")
                var HTML = resultSearch(current)
                var nodeShow = $('#container-result-search')
                nodeShow.innerHTML = HTML
                flag = true;
            }
        }
        
        if(!flag) {
            alert("S???n ph???m b???n t??m kh??ng c?? trong danh s??ch")
        }
       
    }
}

function resultSearch(listProduct) {
    var HTMLproduct = '<div class="container-wrap-product-search" id="result-search">';
        var product = listProduct
        var htmlProduct = sanPhamTimKiem(product);
        HTMLproduct = HTMLproduct + htmlProduct;
  
    HTMLproduct += '</div>'
    return HTMLproduct;
}

              
function sanPhamTimKiem(product){
    var format = product.price
    format = format.toLocaleString('it-IT', {style : 'currency', currency : 'VND'}); 
    var html ='<div class="product-wrap" id="product-search">\n'+
    '                    <img src="'+ product.image +'" alt="" class="img-product-wrap">\n'+
    '                    <div class="menu-item-2">\n'+
    '                        <i class="icon-product-wrap fas fa-arrows-rotate"></i>\n'+
    '                        <i class="icon-product-wrap fas fa-magnifying-glass-plus"></i>\n'+
    '                        <i class="icon-product-wrap fas fa-eye"></i>\n'+
    '                    </div>\n'+
    '                    <p class="khuyen-mai">-'+ product.sale +'%</p>\n'+
    '                    <a href="index2.html" class="title-product-wrap">'+ product.name +'</a>\n'+
    '                    <p class="price-product-wrap">'+ format +'<span class="sale"> </span>\n'+
    '                    </p>\n'+
    '                    <button onclick="onClickEdit(\'' + product.id + '\')" class="btn btn-editProduct">Edit</button>\n'+
    '                    <button onclick="onClickXoa(\'' + product.id + '\')" class="btn btn-deleteProduct">Delete</button>\n'+
    '                    <button class="btn btn-product-details">Chi ti???t s???n ph???m</button>\n'+
    '                    <button onclick="close()" class="close">x</button>\n'+
    '                </div>'


    return html;
}
function close() {
    $(".container-result-search").classList.remove("open")
    
}
