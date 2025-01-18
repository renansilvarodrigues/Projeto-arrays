const list = document.querySelector('ul')
const product = { name: 'X-Salada', price: 30, vegan: false, src: './img/xsalada.jpeg' }

list.innerHTML=
`<li>
            <img src="${product.src}" alt="">
            <p>${product.name}</p>
            <p class="${product.price}">R$30,00</p>
        </li>`