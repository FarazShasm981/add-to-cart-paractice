    
//SIGN UP
var signUpName = document.getElementById('username');
var signUpMail = document.getElementById('useremail');
var signUpPass = document.getElementById('userpassword');

function signup() {
    if (signUpName.value !== `` && signUpMail.value !== `` && signUpPass.value !== ``) {
        localStorage.setItem('name', signUpName.value);
        localStorage.setItem('mail', signUpMail.value);
        localStorage.setItem('password', signUpPass.value);
        window.location.href = 'index1.html';
    } else {
        alert("Please Fill Out All Fields")
    }
}

//LOG IN 

var loginEmail = document.getElementById('useremail');
var loginPass = document.getElementById('userpassword');

function login() {
    var abc = localStorage.getItem('mail');
    var cde = localStorage.getItem('password');
    if (loginEmail.value == abc && loginPass.value == cde) {
        alert('Welcome')
        window.location.href = 'index2.html'
    } else {
        alert('Please Enter Valid Email/Password')
    }
}


//DASHBOARD
// var userNameStore = localStorage.getItem('name');
// var User = document.getElementById('showname');
// User.textContent = userNameStore;


///ADDD TO CART///////
var openShopping = document.querySelector('.shopping');
var closeShopping = document.querySelector('.closeshopping');
var list = document.querySelector('.list');
var listCard = document.querySelector('.listcard');
var total = document.querySelector('.total');
var quantity = document.querySelector('.quantity');
var body = document.querySelector('body');


openShopping.addEventListener('click', function () {
    body.classList.add('active');

});
closeShopping.addEventListener('click', function () {
    body.classList.remove('active');
});
var product = [
    {
        id: 1,
        Name: 'Chair',
        Image: './images/1.PNG',
        Price: 25
    },
    {
        id: 2,
        Name: 'Blue Comforter Sofa',
        Image: './images/8.PNG',
        Price: 35
    },
    {
        id: 3,
        Name: 'Decent Brown Comforter',
        Image: './images/10.PNG',
        Price: 45
    },
    {
        id: 4,
        Name: 'Levish Sofa',
        Image: './images/5.PNG',
        Price: 50
    },
    {
        id: 5,
        Name: 'Simple White Sofa',
        Image: './images/6.PNG',
        Price: 40
    },
    {
        id: 6,
        Name: 'Simple Comforter With Side Table',
        Image: './images/7.PNG',
        Price: 48
    },
];
var listCards = [];
function initApp() {
    product.forEach(function (value, key) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <img src="./${value.Image}"/>
        <div class = 'title'>${value.Name}</div>
        <div class = 'price'>$ ${value.Price.toLocaleString()}</div>
        <button onclick = 'addtoCart(${key})'>Add To Cart</button>
        `;

        list.appendChild(newDiv);
    })
}
initApp();

function addtoCart(key) {
    if (listCards[key] == null) {
        listCards[key] = product[key];
        listCards[key].quantity = 1;
    }
    reloadCard();
};
function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach(function (value, key) {
        totalPrice = totalPrice + value.Price;
        count = count + value.quantity;



        if (listCard != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
            <div><img src="./${value.Image}"/></div>
            <div>${value.Name}</div>
            <div>$ ${value.Price.toLocaleString()}</div>
            <div>
            <button onclick = 'changeQuantity(${key},${value.quantity - 1})'>-</button>
            <div class = 'count'>${value.quantity}</div>
            <button onclick = 'changeQuantity(${key},${value.quantity + 1})'>+</button>
            </div>
            `;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
};
function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].Price = quantity * product[key].Price;
    }
    reloadCard();
}
