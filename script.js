const courses =[   // array of objects (courses that will be added through javaScript)
    {
        name: "Complete React.js Course",
        price: "15"
    },
    {
        name: "Complete Angular Course",
        price: "20"
    },
    {
        name: "Complete Express.js Course",
        price: "10"
    },
    {
        name: "Complete Python Course",                                                 
        price: "30"
    },
    {
        name: "Complete Vue Course",
        price: "35"
    },
];

function generateList(){
    const ul = document.querySelector(".list-group")   // grab the unordered list
    ul.innerHTML = "";   // reset the unordered list everytime this function is called 

    courses.forEach(course => {    // looop to add the array in the html 

        const li = document.createElement("li");  // create the element 
        li.classList.add("list-group-item");     // add a class to the element

        const name = document.createTextNode(course.name);   // create a text node to the element
        li.appendChild(name);  // add the text node to the element 

        const span = document.createElement("span");
        span.classList.add("float-right");
        const price = document.createTextNode("$ " + course.price);
        span.appendChild(price);

        li.appendChild(span);
        ul.appendChild(li);
    });
}

// generateList();     // the function is called instantly 

window.addEventListener("load", generateList);      // the function is called when the page is load

const button = document.querySelector(".sort-btn")

button.addEventListener("click" , () => {
    courses.sort( (a, b) => (a.price - b.price) );   // The array is sorted with the cheapest courses first and the most expensive courses last.
    generateList();
});

const buton = document.querySelector(".btn-primary")
buton.addEventListener( "click" , () => {   // The most expensive courses appear first in the sorted array, and the least expensive courses appear last. {Descending order}
    courses.sort((a, b) => (b.price - a.price) );   // If the result is positive, b should come before a, meaning b is more expensive. If the result is negative, a should come before b.
    generateList();
} );





//   *   TODO:
//   ?   FIXME:
//   !   