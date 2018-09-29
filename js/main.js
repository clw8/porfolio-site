import modalsWrapper from './modals.js';
import nodesWrapper from './nodes.js';
import interfaceOperations from './interface.js';

import Typed from '../node_modules/typed.js/src/typed.js';

//uncomment below for webpack
import '../css/styles.css';

nodesWrapper();
modalsWrapper();
interfaceOperations();



//contact form
const contactSubmit = document.querySelector('#contact-submit');
const formInputs = document.querySelectorAll('.form-input');
contactSubmit.addEventListener('click', (e)=> {
    e.preventDefault();
    //json triggers preflight, so we are manually serializing the input data rather than sending as a json object
   let data = "";
    for (let i = 0; i < formInputs.length; ++i) {
      let input = formInputs[i];
      if (input.name) {
      data += `${input.value}%$`;
      }
    }

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("submit-res").innerHTML = "Thank you for your message :)";
        document.getElementById("submit-res").classList.add('ok');
      }
      else if(this.status !== 0 && this.status !== 200 && this.status !== undefined){
        document.getElementById("submit-res").innerHTML = "Something went wrong..Please try again.";       
        document.getElementById("submit-res").classList.add('error');
      }
    };

   const url = "https://script.google.com/macros/s/AKfycbyuFIEsLSei7wgbmO4aUuurv_5xAypuyqweNQYrdZNY01pQ7vg/exec";
   xhttp.open("POST", url, true);
    xhttp.setRequestHeader('Content-Type', 'text/plain');
   xhttp.setRequestHeader('Accept', 'text/plain');
    xhttp.send(data);
})



//header with typed.js
let options = {
  strings: ["Full Stack Developer", "Creative Problem Solver", "Growth Hacker", "Ruby on Rails", "ReactJS", "Node.js", "Vue.js"],
  typeSpeed: 40,
  loop: true,
  startDelay: 400,
  backDelay: 1900,
  backSpeed: 50,
}

let typed = new Typed(".typed", options);
