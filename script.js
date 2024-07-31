let header = document.querySelector('header');
let scrollNav = document.querySelectorAll('.scrollNav li');
window.onscroll = () => {
    if (scrollY > 200) {
        header.style.background = 'rgb(8, 8, 24)';
        scrollNav.forEach(list => {
            list.style.transform = 'rotate(-90deg) translateX(0%)'
        })
    }
    else {
        header.style.background = 'transparent';
        scrollNav.forEach(list => {
            list.style.transform = 'rotate(-90deg) translateX(-1000%)'
        })
    }
}


let products = [
    {
        picture: 'img/1.png',
        name: 'iPhone 14 Pro Max',
        price: '1400 $',
        category: 'phone',
        data: 1400
    },
    {
        picture: 'img/2.png',
        name: 'iPhone 12 Mini',
        price: '350 $',
        category: 'phone',
        data: 350
    },
    {
        picture: 'img/3.png',
        name: 'iPhone 12',
        price: '550 $',
        category: 'phone',
        data: 550
    },
    {
        picture: 'img/4.png',
        name: 'iPhone 14 Pro Max',
        price: '1500 $',
        category: 'phone',
        data: 1500
    },
    {
        picture: 'img/5.png',
        name: 'iPhone 11',
        price: '500 $',
        category: 'phone',
        data: 500
    },
    {
        picture: 'img/6.png',
        name: 'Apple Watch s7',
        price: '750 $',
        category: 'watch',
        data: 750
    },
    {
        picture: 'img/7.png',
        name: 'Apple Watch s7',
        price: '750 $',
        category: 'watch',
        data: 750
    },
    {
        picture: 'img/8.png',
        name: 'Apple Watch s6',
        price: '750 $',
        category: 'watch',
        data: 750
    },
    {
        picture: 'img/9.png',
        name: 'Mac Book Air 15',
        price: '1300 $',
        category: 'macbook',
        data: 1300
    },
    {
        picture: 'img/10.png',
        name: 'Mac Book Air 15',
        price: '1300 $',
        category: 'macbook',
        data: 1300
    },
    {
        picture: 'img/11.png',
        name: 'Mac Book Pro 16',
        price: '3000 $',
        category: 'macbook',
        data: 3000
    },
    {
        picture: 'img/12.png',
        name: 'Apple AirPods Pro',
        price: '350 $',
        category: 'airpods',
        data: 350
    },
    {
        picture: 'img/13.png',
        name: 'Apple AirPods Max',
        price: '550 $',
        category: 'airpods',
        data: 550
    },
    {
        picture: 'img/14.png',
        name: 'Apple AirPods Max',
        price: '550 $',
        category: 'airpods',
        data: 550
    },
    {
        picture: 'img/15.png',
        name: 'Apple iPad Mini',
        price: '800 $',
        category: 'ipad',
        data: 800
    },
    {
        picture: 'img/16.png',
        name: 'Apple iPad Air 10.9',
        price: '1000 $',
        category: 'ipad',
        data: 1000
    },
]

let contProduct = document.querySelector('.contProducts');

function printProduct(prod) {
    prod.forEach(item => {
        let itemProduct = document.createElement('div');
        contProduct.append(itemProduct);
        itemProduct.className = 'itemProducts';
        let content = document.createElement('div');
        content.className = 'content';
        let filter = document.createElement('div');
        let imgProduct = document.createElement('img');
        content.append(filter, imgProduct);
        let prodText = document.createElement('div');
        prodText.className = 'prodText'
        itemProduct.append(content, prodText);
        filter.className = 'filter';
        let namePriceProd = document.createElement('div');
        namePriceProd.className = 'name-price-prod';
        let nameProduct = document.createElement('h2');
        let priceProduct = document.createElement('h3');
        namePriceProd.append(nameProduct, priceProduct);
        let iconsAdd = document.createElement('div');
        let cartPlus = document.createElement('i');
        let heart = document.createElement('i');
        iconsAdd.className = 'icons-add';
        iconsAdd.append(cartPlus, heart);
        cartPlus.className = 'fa fa-cart-plus addCart';
        heart.className = 'fa fa-heart';
        prodText.append(namePriceProd, iconsAdd);
        imgProduct.src = item.picture;
        nameProduct.textContent = item.name;
        priceProduct.textContent = item.price;
    })
}

printProduct(products);

let openBasket = document.querySelector('.openBasket');
let basket = document.querySelector('.basket');
let closeBasket = document.querySelector('.closeBasket');
let addCart = document.querySelectorAll('.addCart');
let contBasket = document.querySelector('.contBasket')


openBasket.onclick = () => {
    if (!basket.classList.contains('showBasket')) {
        basket.classList.add('showBasket');
        openBasket.className = 'fa fa-close';
        // document.body.style.overflow = 'hidden';
        header.style.background = 'transparent';
    }
    else {
        basket.classList.remove('showBasket');
        openBasket.className = 'fa fa-shopping-bag';
        // document.body.style.overflow = 'auto';
        header.style.background = 'rgb(8, 8, 24)';
    }
}

// closeBasket.onclick = () => {
//     basket.classList.remove('showBasket')
// }


let total = document.querySelector('.total');
let count = document.querySelector('.count');
let sum = 0;


for (let i = 0; i < addCart.length; i++) {
    addCart[i].onclick = () => {
        addCart[i].style.pointerEvents = 'none';
        addCart[i].style.color = 'rgb(119, 78, 119)';
        let parent = addCart[i].parentElement.parentElement.parentElement;
        let imgProd = parent.children[0].children[1].src;
        let nameProd = parent.children[1].children[0].children[0].textContent;
        let priceProd = parent.children[1].children[0].children[1].textContent;
        let itemBasket = document.createElement('div');
        contBasket.append(itemBasket);
        let imgProducts = document.createElement('img');
        let nameProducts = document.createElement('h2');
        let priceProducts = document.createElement('h3');
        let iconsDiv = document.createElement('div');
        let increment = document.createElement('i');
        let countBasket = document.createElement('p');
        let decrement = document.createElement('i');
        iconsDiv.append(decrement, countBasket, increment);
        itemBasket.append(imgProducts, nameProducts, priceProducts, iconsDiv);
        imgProducts.src = imgProd;
        nameProducts.textContent = nameProd;
        priceProducts.textContent = priceProd;
        iconsDiv.id = 'iconsButton';
        increment.className = 'fa fa-plus';
        decrement.className = 'fa fa-trash trash';
        countBasket.textContent = 1;
        count.textContent++;
        sum += parseInt(priceProd)
        total.textContent = sum + '$';
        increment.onclick = function () {
            countBasket.textContent++;
            decrement.className = 'fa fa-minus';
            sum += parseInt(priceProd)
            total.textContent = sum + '$';
            decrement.onclick = function () {
                sum -= parseInt(priceProd)
                total.textContent = sum + '$';
                countBasket.textContent--;
                if (countBasket.textContent == 1) {
                    decrement.className = 'fa fa-trash trash';
                }
                let trash = document.querySelectorAll('.trash');
                trash.forEach(del => {
                    del.onclick = function () {
                        this.parentElement.parentElement.remove();
                        sum -= parseInt(priceProd)
                        total.textContent = sum + '$';
                        count.textContent--;
                        let itemProduct = document.querySelectorAll('.itemProduct');
                        itemProduct.forEach(($, _) => {
                            if (this.parentElement.parentElement.children[0].src == $.children[0].children[1].src) {
                                $.children[1].children[1].children[0].style.color = 'transparent'
                                $.children[1].children[1].children[0].style.pointerEvents = 'painted'
                            }
                        })
                    }
                })
            }
        }
        let trash = document.querySelectorAll('.trash');
        trash.forEach(del => {
            del.onclick = function () {
                this.parentElement.parentElement.remove();
                sum -= parseInt(priceProd)
                total.textContent = sum + '$';
                count.textContent--;
                let itemProduct = document.querySelectorAll('.itemProduct');
                itemProduct.forEach(($, _) => {
                    if (this.parentElement.parentElement.children[0].src == $.children[0].children[1].src) {
                        $.children[1].children[1].children[0].style.color = 'transparent'
                        $.children[1].children[1].children[0].style.pointerEvents = 'painted'
                    }
                })
            }
        })
    }
}








let nameA = document.querySelector('.nameA');
let Surname = document.querySelector('.Surname');
let numberCart = document.querySelector('.number-cart');
let monthYear = document.querySelector('.month-year');
let cvv = document.querySelector('.cvv');
let telnumber = document.querySelector('.telnumber');
let tel = document.querySelectorAll('.tel');
let nameImg = document.querySelector('.nameImg');
let surnameImg = document.querySelector('.surnameImg');
let cartImg = document.querySelector('.cartImg');
let dateImg = document.querySelector('.dateImg');
let cvvImg = document.querySelector('.cvvImg');
let telImg = document.querySelector('.telImg');
let payButton = document.querySelector('.payButton')






// 0 => 96
// 9 => 105


// 0 verev => 48
// 9 verev => 57

numberCart.onkeydown = e => {
    if (e.keyCode == 8) {
        numberCart.value = numberCart.value.slice(0, -1)
    }
    if (e.key >= 0 && e.key <= 9) {
        if (numberCart.value.length == 4 || numberCart.value.length == 9 || numberCart.value.length == 14) {
            numberCart.value = numberCart.value + '-'
        }
    }
    else {
        return false
    }
}

monthYear.onkeydown = e => {
    if (e.keyCode == 8) {
        monthYear.value = monthYear.value.slice(0, -1)
    }
    if (e.key >= 0 && e.key <= 9) {
        if (monthYear.value.length == 2) {
            monthYear.value = monthYear.value + '/'
        }
    }
    else {
        return false
    }
}

cvv.onkeydown = e => {
    if (e.keyCode == 8) {
        cvv.value = cvv.value.slice(0, -1)
    }
    if (e.key >= 0 && e.key <= 9) {
        cvv.value = cvv.value
    }
    else {
        return false
    }
}


telnumber.onkeydown = e => {
    if (e.keyCode == 8) {
        telnumber.value = telnumber.value.slice(0, -1)
    }
    if (e.key >= 0 && e.key <= 9) {
        if (telnumber.value.length == 0) {
            telnumber.value = '+' + telnumber.value
        }
    }
    else {
        return false
    }
}

tel.forEach(num => {
    num.onkeydown = e => {
        if (e.keyCode == 8) {
            num.value = num.value.slice(0, -1)
        }
        if (e.key >= 0 && e.key <= 9) {
            num.value = num.value
        }
        else {
            return false
        }
    }
})


let validName = /^[A-Z]+$/
let validNumber = /^\d{4}-\d{4}-\d{4}-\d{4}$/
let validDate = /^\d{2}\/\d{2}$/
let validCvv = /^\d{3}$/
let validRegion = /\+\d{3}/
let num = /^\d{2}$/i



payButton.onclick = () => {
    nameA.value.match(validName) ? nameImg.style.opacity = '0' : nameImg.style.opacity = '1';
    Surname.value.match(validName) ? surnameImg.style.opacity = '0' : surnameImg.style.opacity = '1';
    numberCart.value.match(validNumber) ? cartImg.style.opacity = '0' : cartImg.style.opacity = '1';
    monthYear.value.match(validDate) ? dateImg.style.opacity = '0' : dateImg.style.opacity = '1';
    cvv.value.match(validCvv) ? cvvImg.style.opacity = '0' : cvvImg.style.opacity = '1';
    telnumber.value.match(validRegion) ? telImg.style.opacity = '0' : telImg.style.opacity = '1';
    tel.forEach(tel => {
        tel.value.match(num) ? telImg.style.opacity = '0' : telImg.style.opacity = '1';
    })

}


let money = document.querySelector('.money');
money.textContent = Math.round(Math.random() * 50000) + '$';





// ---------------------------------------------------------------------------------------------