class Modal{
    constructor(element, interfaceEl){
        this.element = element;
        this.shown = false;
        this.interfaceEl = interfaceEl;
    }

    toggleShow(event){
        event.stopPropagation();
        if(event.currentTarget == this.interfaceEl){
            this.shown ?  this.element.classList.toggle('show-modal') : null;
            this.shown ? this.shown = !this.shown : null;
            this.interfaceEl.classList.remove('interface-bg');
        }
        else{
            this.element.classList.toggle('show-modal');
            this.shown = !this.shown;
            this.interfaceEl.classList.toggle('interface-bg');
        }
    }
}


export default Modal;