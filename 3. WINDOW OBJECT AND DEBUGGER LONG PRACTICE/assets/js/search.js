export function findElementById(id) {
    // Return the element in the DOM with corresponding `id`

    // Your code here
    return Object.values(document.body.children).find(el => el.id === id)
}

export function findFirstElementOfTag(tag) {
    function traverseTree(element) {
      if (element.tagName.toLowerCase() === tag.toLowerCase()) {
        return element;
      }

      for (let i = 0; i < element.children.length; i++) {
        console.log(i)
        const foundElement = traverseTree(element.children[i]);
        if (foundElement) {
          return foundElement;
        }
      }

      return null;
    }

    return traverseTree(document.body);
  }



export function findFirstElementOfClass(cls) {
    // Return the first occurence of an element of class `cls`

    // Your code here
    for(let i=0; i < document.body.children.length; i++) {
        if(document.body.children[i].classList.value === cls){
            return document.body.children[i]
        }
    }
}

export function findElementsOfTag(tag) {
    // Return an array of elements that have a tag name of `tag`

    // Your code here
    const array = [];

    function traverseTree(element) {
      if (element.tagName.toLowerCase() === tag.toLowerCase()) {
        array.push(element);
      }

      for (let i = 0; i < element.children.length; i++) {
        traverseTree(element.children[i]);
      }
    }

    traverseTree(document.body);
    return array;
}

export function findElementsOfClass(cls) {
    // Return an array of elements that have are of class `cls`

    // Your code here
    const array = [];

    function traverseTree(element) {
      if (element.classList.value.toLowerCase() === cls.toLowerCase()) {
        array.push(element);
      }

      for (let i = 0; i < element.children.length; i++) {
        traverseTree(element.children[i]);
      }
    }

    traverseTree(document.body);
    return array;
}
