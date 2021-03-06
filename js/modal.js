class Modal{
    constructor(element, interfaceEl){
        this.element = element;
        this.shown = false;
        this.interfaceEl = interfaceEl;
    }

    hide(){
        this.element.classList.remove('show-modal');
        this.interfaceEl.classList.remove('interface-bg');
        this.shown = false;
    }

    toggleShow(event){
        event.stopPropagation();
        if(event.currentTarget == this.interfaceEl || event.currentTarget.classList.contains('close-button')){
            this.shown ?  this.hide() : null;
        }
        else{
            this.element.classList.toggle('show-modal');
            this.interfaceEl.classList.toggle('interface-bg');
            this.shown = !this.shown;
        }
    }
}


export default Modal;