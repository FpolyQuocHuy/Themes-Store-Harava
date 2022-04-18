var keyLocalStorage = 'chiTietSanPham'

showItemdetails();

function getItemProductDetails() {
    var listItemProductDetails = new Array();

    var jsonListProduct = localStorage.getItem('chiTietSanPham')

    if(jsonListProduct != null) {
        listItemProductDetails = JSON.parse(jsonListProduct)
        console.log("có");
    }else {
        console.log("Chưa có sản phẩm truyền vào");
    }
    return listItemProductDetails;
}
function showItemdetails(){
    //bước 1: lấy item sản phẩm chi tiết dưới local Storage
    var listItemDetails = getItemProductDetails();
    //bước 2: chuyển danh sách item lấy lên thánh HTML
    var HTML = productToHTML(listItemDetails)
    //bước 3: truy cập inner HTML để hiển thị
    var elementFromHtml = document.getElementById('container-product')
    // console.log(elementFromHtml);
    elementFromHtml.innerHTML = HTML;
}
function productToHTML(listProduct) {
    var htmlTong = '';
    // console.log(listProduct);
        htmlTong += objectToHTML(listProduct);
        // console.log(htmlTong);
    return htmlTong;
}
// set object to HTML
// input: object
//output: HTML
function objectToHTML(itemDetails) {
    var format = itemDetails.price
    format = format.toLocaleString('it-IT', {style : 'currency', currency : 'VND'}); 
    var html = '<div class="product-box-content">\n'+
    '                        <div class="product-content-img">\n'+
    '                            <img src="'+itemDetails.image+'" alt="" class="product-img1">\n'+
    '                            <img src="'+itemDetails.image+'" alt="" class="product-img">\n'+
    '                            <img src="/img/product-content-img3.webp" alt="" class="product-img">\n'+
    '                            <img src="/img/product-content-img4.webp" alt="" id="frirst-child" class="product-img">\n'+
    '                            <img src="/img/product-content-img5.webp" alt="" class="product-img">\n'+
    '                        </div>\n'+
    '                        <div class="product-content-decs">\n'+
    '                            <h1 class="title-product-content">'+itemDetails.name+'</h1>\n'+
    '                            <div class="preview-procuct-price">\n'+
    '                                <p class="price-after"><span>'+format+'</span><del></del></p>\n'+
    '                                <p class="discout">-'+itemDetails.sale+'%</p>\n'+
    '                            </div>\n'+
    '                            <div class="select-swatch">\n'+
    '                                <p id="frirst-child" class="item-select-swatch ">\n'+
    '                                    <img src="/img/product-content-img1.webp" alt="">\n'+
    '                                    <span>Xanh dương</span>\n'+
    '                                </p>\n'+
    '                                <p class="item-select-swatch">\n'+
    '                                    <img src="/img/product-content-img2.webp" alt="">\n'+
    '                                    <span>Đỏ</span>\n'+
    '                                </p>\n'+
    '                                <p class="item-select-swatch">\n'+
    '                                    <img src="/img/product-content-img3.webp" alt="">\n'+
    '                                    <span>Đen</span>\n'+
    '                                </p>\n'+
    '                                <p class="item-select-swatch">\n'+
    '                                    <img src="/img/product-content-img4.webp" alt="">\n'+
    '                                    <span>Xanh</span>\n'+
    '                                </p>\n'+
    '\n'+
    '\n'+
    '                            </div>\n'+
    '                           \n'+
    '                            <div class="wrap-addcart">\n'+
    '                                <input type="button" value="Thêm vào giỏ">\n'+
    '                                <input type="button" value="Mua ngay">\n'+
    '                            </div>\n'+
    '                            <div class="pro-service">\n'+
    '                                <div class="pro-service-item">\n'+
    '                                    <img src="/img/pro-service1.webp" alt="">\n'+
    '                                    <p>Sản phẩm 100% chính hãng</p>\n'+
    '                                </div>\n'+
    '                                <div class="pro-service-item">\n'+
    '                                    <img src="/img/pro-service2.webp" alt="">\n'+
    '                                    <p>Tư vấn mua hàng tận tâm 24/7. Hotline: 1900 1009</p>\n'+
    '                                </div>\n'+
    '                                <div class="pro-service-item">\n'+
    '                                    <img src="/img/pro-service3.webp" alt="">\n'+
    '                                    <p>Miễn phí vận chuyển cho giá trị đơn hàng từ 499.000đ</p>\n'+
    '                                </div>\n'+
    '                            </div>\n'+
    '                        </div>\n'+
    '                    </div>';
    return html;
}
