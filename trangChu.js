const $ = document.querySelector.bind(document)

class User {
    constructor(name,user,email,password,role){
        this.name = name,
        this.user = user,
        this.email = email,
        this.password = password,
        this.role = role
    }

    getUser(){
        return this.user;
    }
    getPassWord(){
        return this.password
    }
}

class storeUser {
    constructor(){
        this.User = [];
    }
    
    addUser(user){
        const currentUser = this.User;
        let check = false;
        for(let i = 0; i < currentUser.length; i++){
            let listTemp = currentUser[i];
            console.log(listTemp);
            if(listTemp.user === user.getUser()){
                // check = flase;
            }
        }
        if(!check){
            this.User.push(user)
            return true;    
        }
    }

    // login(user , password){
    //     var user = [];
    //     var currentUser = this.User;
    //     console.log(currentUser);
    //     for(let i = 0; i < currentUser.length; i++){
    //         const list = currentUser[i];
    //         console.log(list.user);
    //         if( list.user === user && list.password === password){
    //             user = this.User[i];
               
    //        }
    //     }
    //     return user;
    // }
    listUser(){
        return this.User;
    }
    save(){
        var data = JSON.stringify(this.User);
        localStorage.setItem('User' , data);
    }
    getData(){
        const data = (localStorage.getItem('User'))
        
        if(data){
            const converData = JSON.parse(data);
            const listUser = [];
            for(let i = 0; i < converData.length; i++){
                const user = new User(converData[i].name,converData[i].user,converData[i].email,converData[i].password,converData[i].role);
                listUser.push(user);
            }
            this.User.push(this.listUser)
        }
        return true;
    }
    getUser(){
        return this.User;
    }
}
function login(user , password){
   var userLoginTemp =  localStorage.getItem('User')
    var userLogin = JSON.parse(userLoginTemp)
    var flag = false;
    for(let i = 0; i < userLogin.length;i++){
        var current = userLogin[i];
        if(current.user === user && current.password === password ){
            flag = true;
        }
    }
    return flag;
}

const store = new storeUser();
store.getData();

var openRegist = $(".open-formDk")
var openLogin = $(".open-formDn")
var close = $(".close")
var closeLogin = $(".closeLogin")
openRegist.addEventListener('click' , function(){
    $(".register").classList.add("open")
})

close.addEventListener('click' , function(){
    $(".register").classList.remove("open")
})

$(".container-register").addEventListener('submit' , (e) =>{
    e.preventDefault();
    var name = $("#name").value
    var user = $("#id").value
    var email = $("#email").value
    var password = $("#password").value
    var role = $("#role").value
    if(name === "" || user ===""||email ===""||password===""||role ===""){
        // alert("Vui lòng nhập đầy đủ thôn tin")
    }else {
        const newUser = new User(name,user,email,password,role)
        var isRegister = store.addUser(newUser);
        if(isRegister){
            store.save();
            if(role === "user"){
                alert("Đăng kí tài khoản người dùng thành công")
            }else {
                alert("Đăng kí tài khoản admin")
            }
        }else {
            alert("Đăng kí thất bại")
        }
    }
    
})
$(".container-login").addEventListener('submit' , (e) =>{
    e.preventDefault();
    const users = $("#user").value
    const passwords = $("#pass").value
    const role = $("#roles").value
    if(users ===""|| passwords ===""){
        // alert("Vui lòng nhập đầy đủ thông tin")
    }
    else {

        const isLogin = login(users,passwords);
       
        
        if(isLogin){
          
            if(role === "admin"){
                window.location = "./admin.html"    
            }else if(role == "user"){
                window.location = "./user.html"

            }else {
                alert("Chọn quền truy cập")
            }
        }else {
            alert("Tài khoản hoặc mật khẩu không chính xác")
        }
    }
    // console.log(store.role);
})
openLogin.addEventListener('click' , function(){
    $(".login").classList.add("open")
})

closeLogin.addEventListener('click' , function(){
    $(".login").classList.remove("open")
})

$(".container-login").addEventListener('submit' , (e) =>{
    e.preventDefault();
})

//validation
$(".btn-register").addEventListener('click',function(){
    var mesage = ""
    var showErr = $(".er1") 
     const name = $("#name")
    if(name.value === ""){
        mesage+= "Hãy nhập đầy đủ thông tin!"
        showErr.classList.add("error")
    }else {

    }
    var showHTML = $(".er1")
    showHTML.innerHTML = mesage
})
$(".btn-register").addEventListener('click',function(){
    var mesage = ""
    var showErr = $(".er2") 
     const id = $("#id")
    if(id.value === ""){
        mesage+= "Hãy nhập đầy đủ thông tin!"
        showErr.classList.add("error")
    }else {

    }
    var showHTML = $(".er2")
    showHTML.innerHTML = mesage
})
// 3
$(".btn-register").addEventListener('click',function(){
    var mesage = ""
    var showErr = $(".er3") 
     const email = $("#email")
    if(email.value === ""){
        mesage+= "Hãy nhập đầy đủ thông tin!"
        showErr.classList.add("error")
    }else {

    }
    var showHTML = $(".er3")
    showHTML.innerHTML = mesage
})
$(".btn-register").addEventListener('click',function(){
    var mesage = ""
    var showErr = $(".er4") 
     const pass = $("#password")
    if(password.value === ""){
        mesage+= "Hãy nhập đầy đủ thông tin!"
        showErr.classList.add("error")
    }else {

    }
    var showHTML = $(".er4")
    showHTML.innerHTML = mesage
})
$(".btn-login").addEventListener('click',function(){
    var mesage = ""
    var showErr = $(".er6") 
     const user = $("#user")
    if(user.value === ""){
        mesage+= "Hãy nhập đầy đủ thông tin!"
        showErr.classList.add("error")
    }else {

    }
    var showHTML = $(".er6")
    showHTML.innerHTML = mesage
})
$(".btn-login").addEventListener('click',function(){
    var mesage = ""
    var showErr = $(".er7") 
     const pass = $("#pass")
    if(pass.value === ""){
        mesage+= "Hãy nhập đầy đủ thông tin!"
        showErr.classList.add("error")
    }else {

    }
    var showHTML = $(".er7")
    showHTML.innerHTML = mesage
})

//Search Product



