const select = () => {
    /* Write queries for each of the following */
    const sectionOne = document.getElementById('one')
    const fruits = sectionOne.querySelectorAll('li')
    /* Section 1 */
    // 1. Get all seeded fruit elements
    // Your code here
    fruits.forEach(fruit => fruit.classList.contains('seed') ? console.log("Seeded: ", fruit.innerText) : "")

    // 2. Get all seedless fruit elements
    // Your code here
    fruits.forEach(fruit => fruit.classList.contains('seedless') ? console.log("Seedless: ", fruit.innerText) : "")

    // 3. Get first seedless fruit element
    // Your code here
    const firstSeedless = Object.values(fruits).find(fruit => fruit.classList.contains('seedless'));
    console.log("First Seedless:", firstSeedless.innerText);

    /* Section 2 */
    // 4. Get inner span with text "you"
    // Your code here
    const sectionTwo = document.getElementById('two')
    const wrapper = sectionTwo.childNodes[3]
    const p = wrapper.childNodes[1]
    console.log(p.childNodes[1])


    // 5. Get all children of element "wrapper"
    // Your code here
    console.log(Object.values(wrapper.childNodes))

    // 6. Get all odd number list items in the list
    // Your code here
    const ol = sectionTwo.querySelector('ol')
    const list = ol.querySelectorAll('li')
    list.forEach(li => li.classList.contains('odd') ? console.log("Odds: ", li.innerText) : "")

    // 7. Get all even number list items in the list
    // Your code here
    list.forEach(li => li.classList.contains('odd') ? "" : console.log("Evens: ", li.innerText) )

    /* Section 3 */
    // 8. Get all tech companies without a class name
    // Your code here
    const sectionThree = document.getElementById('three')
    const a = sectionThree.querySelectorAll('a')

    a.forEach(a => a.classList.value === '' ? console.log(a) : "")


    // 9. Get "Amazon" list element
    // Your code here
    const amazon = document.querySelector('.shopping')
    console.log(amazon)

    // 10. Get all unicorn list elements (not the image element)
    // Your code here
    const ulThree = sectionThree.querySelector('ul')
    const imgs = ulThree.querySelectorAll('img')
    imgs.forEach(img => img.classList.contains('unicorn') ? console.log(img.parentElement) : '')

}

window.onload = select;
