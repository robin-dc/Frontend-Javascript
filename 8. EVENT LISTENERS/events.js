// Your code here

window.addEventListener('DOMContentLoaded', () => {
    alert("DOM HAS BEEN LOADED")
    const redInput = document.getElementById("red-input")
    function changeColor(){
        if(redInput.value === 'red'){
            redInput.classList.add("bg-red")
        }
        else{
            redInput.classList.remove("bg-red")
        }
    }
    redInput.addEventListener("input", changeColor)

    const addBtn = document.getElementById('add-item')
    const listAdd = document.getElementById('list-add')
    const sectionTwo = document.getElementById('section-2')
    const ulEl = sectionTwo.childNodes[sectionTwo.childNodes.length - 2]

    function add(){
        ulEl.innerHTML += `<li>${listAdd.value}</li>`
        listAdd.value = ""
    }
    addBtn.addEventListener('click', add)

    const colorPicker = document.getElementById('color-select')

    function addColor(e){
        colorPicker.parentElement.style.backgroundColor = e.target.value
    }
    colorPicker.addEventListener('change', e => addColor(e))

    const removeBtn = document.getElementById('remove-listeners')
    removeBtn.addEventListener('click', () => {
        redInput.removeEventListener('input', changeColor)
        addBtn.removeEventListener('click', add)
        colorPicker.removeEventListener('change', e => addColor(e))
    })
})
