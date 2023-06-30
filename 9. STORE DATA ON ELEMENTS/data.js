// Your code here
window.addEventListener("DOMContentLoaded", () => {
    const addBtn = document.getElementById("add")
    const shoppingList = document.getElementById("shopping-list")
    const form = document.querySelector("form")

    form.addEventListener("submit", (e) =>{
        e.preventDefault()
        const formData = new FormData(e.target)
        const name = formData.get("name")
        const category = formData.get("category")

        const li = document.createElement("li")
        li.setAttribute("data-id", category)
        li.innerHTML = `${category.substring(0,1).toUpperCase()+category.substring(1)} product: ${name}`
        shoppingList.append(li)
    })
})
// Set the data-type attribute of each <li> element with the value of the type field.
// For each type, style the <li> a different background color in index.css. Recall that CSS supports attribute selectors using square brackets.
