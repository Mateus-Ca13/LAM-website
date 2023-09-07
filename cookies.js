
const popup = document.querySelector('[data-cookies-popup]');
const btn = document.querySelector('[data-cookie-btn]');
const btn2 = document.querySelector('[data-cookie-btn2]');


if(Cookies.get('acceptedCookies')) {popup.classList.add('d-none')}

btn.addEventListener('click', () => {gerarCookie(); popup.classList.add('d-none')})

btn2.addEventListener('click', () => {gerarCookie(); popup.classList.add('d-none')})


function gerarCookie () {
    Cookies.set('acceptedCookies', true, {expires: 7})
}