import modalsWrapper from './modals.js';
import nodesWrapper from './nodes.js';
import interfaceOperations from './interface.js';
nodesWrapper();
modalsWrapper();
interfaceOperations();




const contactSubmit = document.querySelector('#contact-submit');
const formInputs = document.querySelectorAll('.form-input');
contactSubmit.addEventListener('click', (e)=> {
    e.preventDefault();
    //json triggers preflight, so we are manually serializing the input data rather than sending as a json object
   var data = "";
    for (var i = 0; i < formInputs.length; ++i) {
      var input = formInputs[i];
      if (input.name) {
      data += `${input.value}%$`;
      }
    }

    var xhttp = new XMLHttpRequest();
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


