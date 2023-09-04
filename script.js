// Header interativo

const headerNav = document.querySelector('.navbar')
headerNav.classList.add('banner-focus')
  
  window.addEventListener('scroll', function() {
    if (window.scrollY === 0) {
        headerNav.classList.add('banner-focus')

    } else {
        headerNav.classList.remove('banner-focus')
    }
  });

// Galeria de ambientes

const listaAmbientes = document.querySelector('[data-lista-ambientes]').querySelectorAll('img')
const select = document.querySelector('[data-select-ambiente]')
const inputs = document.querySelectorAll('input[type="radio"]')

select.addEventListener('change', () => {
  listaAmbientes.forEach((foto) => 
  foto.dataset.ambiente == select.value ? foto.classList.remove('d-none') : fotosAparentes(select.value, foto))
})

inputs.forEach(input => input.addEventListener('change', (event) => {
  listaAmbientes.forEach((foto) => 
  foto.dataset.ambiente == event.target.value ? foto.classList.remove('d-none') : fotosAparentes(event.target.value, foto))
}))

function fotosAparentes(valor, foto) {
  valor == 'todos' ? foto.classList.remove('d-none') : foto.classList.add('d-none')
}

//Zoom nas fotos

const fotoModal = document.querySelector('[data-modal-photo]')
listaAmbientes.forEach(foto => {foto.addEventListener('click', (event) => fotoModal.src = event.target.src
)})



