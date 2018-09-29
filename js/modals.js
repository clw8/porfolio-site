import Modal from './modal.js';
import ProjectCard from './project-card.js';

function modalsWrapper(){

    // MODALS!!! (with OOP!!!!)
    var interfaceWrapper = document.querySelector('.interface-wrapper');
    
    //toggle for About modal
    var aboutModalEl = document.querySelector('#about-modal');
    var aboutLink = document.querySelector('#about-me-link');
    var aboutModal = new Modal(aboutModalEl, interfaceWrapper);
    var aboutCloseButton = document.querySelector('#about-modal .close-button');

    addModalEventListeners([aboutLink, interfaceWrapper, aboutCloseButton], aboutModal);

    //toggle for Projects Modal
    var projectModalEl = document.querySelector('#project-cards-modal');
    var projectsLinks = Array.from(document.querySelectorAll('#portfolio-arm2-options .interface-link'));
    var projectsModal = new Modal(projectModalEl, interfaceWrapper);
    var projectsCloseButton = document.querySelector('#project-cards-modal .close-button');
    addModalEventListeners([...projectsLinks, interfaceWrapper, projectsCloseButton], projectsModal, (e)=>{
        if(e.currentTarget == interfaceWrapper){
            projectsLinks.map( (link)=> {
                link.classList.remove('active');
            })
        }
        else{
            e.currentTarget.classList.add('active');
        }
        if(!!e.currentTarget.dataset.index){
            changeCard(e.currentTarget.dataset.index, true);
        }
    });



    //toggle for Contact Modal
    var contactModalEl = document.querySelector('#contact-modal');
    var contactLink = document.querySelector('#message-link');
    var contactModal = new Modal(contactModalEl, interfaceWrapper);
    var contactCloseButton = document.querySelector('#contact-modal .close-button');

    addModalEventListeners([contactLink, interfaceWrapper, contactCloseButton], contactModal);


    function addModalEventListeners(arr, modalInstance, callback){
        arr.map((elem) => {
            elem.addEventListener('click', (e)=>{
                modalInstance.toggleShow(e);

                !!callback ? callback(e) : null;
            })
        })
    }

    //setup for our project cards array, which will hold our instances of ProjectCard
    //this array will be useful for transitioning between the cards/ to a specific card
    let projectCards = [].slice.call(document.querySelectorAll('.project-card'));
    let projectCardsArr = [];

    function initProjectCardsArr(){
        projectCardsArr = [];
        projectCards.map( (cardEl, index)=> {
            let cardInstance;
            
            if(index > 0){
                cardInstance = new ProjectCard(cardEl, index, projectCards.length - 1);
            } 
            else{
                cardInstance = new ProjectCard(cardEl, index, projectCards.length - 1);
            }
            
            projectCardsArr.push(cardInstance);
        })    
    }

    initProjectCardsArr();

    //TRANSITION CLASSES FOR PORTFOLIO CARDS

     //creating a new CSS rule according to the no. of cards we have
    var style = document.createElement('style');
    style.type = 'text/css';
    document.querySelector('head').appendChild(style);


    //add transition with JS for front to back transition (back to front transition can be hard-coded)
    let keyFrameTransition = `@keyframes f-to-b-card-transition{
        0%{
            opacity: 0;
        }
        30%{
            opacity: 0;
            -webkit-transform: translate(${(projectCards.length - 1) * -4}%, ${((projectCards.length - 1) * 3) - 25}%);
            -moz-transform: translate(${(projectCards.length - 1) * -4}%, ${((projectCards.length - 1) * 3) - 25}%);
            -o-transform: translate(${(projectCards.length - 1) * -4}%, ${((projectCards.length - 1) * 3) - 25}%);
            -ms-transform: translate(${(projectCards.length - 1) * -4}%, ${((projectCards.length - 1) * 3) - 25}%);
            transform: translate(${(projectCards.length - 1) * -4}%, ${((projectCards.length - 1) * 3) - 25}%);
        }
        to{
            opacity: 1;
            -webkit-transform: translate(${(projectCards.length - 1) * -4}%, ${(projectCards.length - 1) * 3}%);
            -moz-transform: translate(${(projectCards.length - 1) * -4}%, ${(projectCards.length - 1) * 3}%);
            -o-transform: translate(${(projectCards.length - 1) * -4}%, ${(projectCards.length - 1) * 3}%);
            -ms-transform: translate(${(projectCards.length - 1) * -4}%, ${(projectCards.length - 1) * 3}%);
            transform: translate(${(projectCards.length - 1) * -4}%, ${(projectCards.length - 1) * 3}%);
        }
    }`;

    style.innerHTML = keyFrameTransition;


    //add event listeners to inactive cards and prev/next buttons
    projectCardsArr.map( (cardInst) => {

        cardInst.element.addEventListener('click', () => {
            changeCard(cardInst.position, false);
        })
    })

    let nextButton = document.querySelector('#next-card');
    nextButton.addEventListener('click', ()=> {
        changeCard(1, false);
    })
    let prevButton = document.querySelector('#prev-card');
    prevButton.addEventListener('click', ()=> {
        changeCard(projectCardsArr.length - 1, false);
    })



    function changeCard(position, linkClick){
    //rearrange the projectCardsArr array: take out all elements with a lower index than the clicked index, add it to the end of the array
            //e.g. if we click on the card with index "1", we want only want to push 1 card to the back (ie. the card with index "0")
            
            if(linkClick){
                initProjectCardsArr();
            }
            let toTheBack = projectCardsArr.splice(0, position);
            //add these elements to the back of the array
            projectCardsArr = projectCardsArr.concat(toTheBack);
            //organize DOM according to projectCardsArr
            projectCardsArr.map( (_cardInst, _index)=>{
                _cardInst.removeOldPosition();
                _cardInst.addNewPosition(_index);
            })
    }

}

export default modalsWrapper;