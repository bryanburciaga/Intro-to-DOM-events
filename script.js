//  IPO Pattern - Input -> process -> output

//  cached element references - variables that store referenced to DOM elements
const btn = document.querySelector('button');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const body = document.querySelector ('body');
// event listeners
btn.addEventListener('click', handleButtonPress);

ul.addEventListener('click', handleLiClick);
input.addEventListener('keydown', handleEnterPress);  // este es para habilitar enter

function handleEnterPress(event) {    //funcion para habilitar enter
    if(event.keyCode === 13) {
        handleButtonPress(event);
    }
}

// separtion of concerns
// separating the code based on the rol it servers in order to make it easier to maintain
//functions

function handleButtonPress(event) {
    // let's create a DOM element so we can add comments to the list
    const li = document.createElement('li');
    // the next step is getting the next text value from input tag
    li.textContent = input.value;
 // how can I clear the input value? . . . or set it to an empty string
     input.value = '';
     // ading the new li tag to the ul element
     ul.appendChild(li);
     
 }

 function handleLiClick(event) {
    // only allow for li tags to trigger events
    if(event.target.tagName === 'LI') {
    if(event.target.style.textDecoration === 'none') {
        event.target.style.textDecoration = 'line-through'; 
        event.target.style.color = 'green';   
    } else {
    event.target.style.textDecoration = 'none';
    event.target.style.color = 'black';
    
    }
    }
}
    
 