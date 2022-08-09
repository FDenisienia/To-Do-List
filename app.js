const button = document.getElementById('button')
const containerList = document.getElementById('container-list')




const agregarTarea = (event) => {

    event.preventDefault()

    const input = document.getElementById('input').value

    const divContenedor = document.createElement('div')
    divContenedor.classList.add('div-container-item')

    let inputValue = document.createElement('p')
    inputValue.classList.add('p-list')
    const inputCheck = document.createElement('input')
    inputCheck.setAttribute('type', 'checkbox')
    inputCheck.classList.add('checkbox')
    const btnCerrar = document.createElement('button')
    btnCerrar.classList.add('btn-cerrar')

    btnCerrar.innerHTML = 'x'
    inputValue.innerHTML = input

    divContenedor.appendChild(inputValue)
    divContenedor.appendChild(btnCerrar)
    divContenedor.appendChild(inputCheck)

    containerList.appendChild(divContenedor)

    const eliminarTarea = () => {
        containerList.removeChild(divContenedor)
    }


    btnCerrar.addEventListener("click", eliminarTarea)
}



button.addEventListener("click", agregarTarea)