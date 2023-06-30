
        //   <div class="section">
        //     <h2>About me</h2>
        //     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        //         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
        //         nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        //     </p>
        //     <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
        //         fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        //         culpa qui officia deserunt mollit anim id est laborum.</p>
        // </div>
        //   <div class="section">
        //     <h2>About me</h2>
        //     <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        //         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
        //         nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        //     </li>
        //     <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
        //         fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        //         culpa qui officia deserunt mollit anim id est laborum.</p>
        // </div>


        // 1ST
export function findFirstElementOfTag(tag) {
    function traverseTree(document.body) {
      if (document.body.tagName.toLowerCase() === tag.toLowerCase()) {
        return document.body;
      }

      for (let i = 0; i < document.body.children.length; i++) {         // 2
        const foundElement = traverseTree(document.body.children[0]);   // 0    // // THIS IS THE FIRST EXECUTION
        const foundElement = traverseTree(document.body.children[1]);   // 1
        if (foundElement) {
          return foundElement;
        }
      }

      return null;
    }

    return traverseTree(document.body);
  }


  export function findFirstElementOfTag(tag) {
    function traverseTree(document.body.children[0]) {
      if (document.body.children[0].tagName.toLowerCase() === tag.toLowerCase()) {
        // IF NOT SATISFIED THEN IT WILL PROCEED TO LOOP
        return document.body.children[0];
      }

      for (let i = 0; i < document.body.children[0].children.length; i++) {         // 3
        const foundElement = traverseTree(document.body.children[0].children[0]);   // 0    // THIS IS THE FIRST EXECUTION
        const foundElement1 = traverseTree(document.body.children[0].children[1]);   // 1
        const foundElement2 = traverseTree(document.body.children[0].children[2]);   // 2
        if (foundElement) {
          return foundElement;
        }
      }

      return null;
    }

    return traverseTree(document.body.children[0]);
  }

  export function findFirstElementOfTag(tag) {
    function traverseTree(document.body.children[0].children[0]) {
      if (document.body.children[0].children[0].tagName.toLowerCase() === tag.toLowerCase()) {
        // IF NOT SATISFIED THEN IT WILL PROCEED TO LOOP
        return document.body.children[0].children[0];
      }

      for (let i = 0; i < document.body.children[0].children.children[0].length; i++) {         // 0
        // SINCE NO LENGTH IT WILL IMMEDIATELY DONE
        const foundElement = traverseTree(document.body.children[0].children[0].children[i]);
        if (foundElement) {
          return foundElement;
        }
      }

      return null;  // RETURN NULL GO BACK TO LAST FUNCTION WHEN I = 1
    }

    return traverseTree(document.body.children[0].children[0]);
  }
  export function findFirstElementOfTag(tag) {
    function traverseTree(document.body.children[0].children[1]) {
      if (document.body.children[0].children[1].tagName.toLowerCase() === tag.toLowerCase()) {
        // IF NOT SATISFIED THEN IT WILL PROCEED TO LOOP
        return document.body.children[0].children[1];
      }

      for (let i = 0; i < document.body.children[0].children.children[1].length; i++) {         // 0
        // SINCE NO LENGTH IT WILL IMMEDIATELY DONE
        const foundElement = traverseTree(document.body.children[0].children[0].children[i]);
        if (foundElement) {
          return foundElement;
        }
      }

      return null;  // RETURN NULL GO BACK TO LAST FUNCTION WHEN I = 2
    }

    return traverseTree(document.body.children[0].children[1]);
  }

// ALL ELEMENTS NOT MATCH SO IT WILL GO BACK TO THE STACK WHICH IS THE FIRST RECURSION WHEN
// const foundElement = traverseTree(document.body.children[1]);   // 1

// AND THE PROCESS REPEATS
