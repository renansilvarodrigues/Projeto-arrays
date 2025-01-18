const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
let myLi = ''

function showAll() {

    menuOptions.forEach(product => {
        myLi += `
         <li>
             <img src="${product.src}" alt="">
             <p>${product.name}</p>
             <p class="${product.price}">R$30,00</p>
         </li>
         `
    })

    list.innerHTML = myLi

}

buttonShowAll.addEventListener('click', showAll)