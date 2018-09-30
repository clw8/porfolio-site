class ProjectCard{
    constructor(element, position, lastIndex){
        this.element = element;
        this.position = position;
        this.lastIndex = lastIndex;
        this.addNewPosition(this.position);
    }

    removeOldPosition(){
        this.element.style.transform = null;
        this.element.style.zIndex = null;
        this.element.style.animation = null;
        this.element.style.WebkitAnimation = null;
}
    
    addNewPosition(newPosition){
        let oldPosition = this.position;
        this.position = newPosition;
    // console.log(newPosition)
        this.classNameChange(oldPosition);
        this.activeInactive();
    }
    
    classNameChange(oldPosition){
        //when it goes from the back to index 0
        if(oldPosition == this.lastIndex && this.position == 0){
            this.element.style.transform = `translate(${this.position * -4}%, ${this.position * 3}%)`;
            this.element.style.zIndex = `${99 + (this.position * -1)}`;
            this.element.style.WebkitAnimation = "b-to-f-card-transition 0.7s ease";
            this.element.style.animation = "b-to-f-card-transition 0.7s ease";
        }
        //when it goes from index 0 to the back
        else if(oldPosition == 0 && this.position == this.lastIndex){
            this.element.style.transform = `translate(${this.position * -4}%, ${this.position * 3}%)`;
            this.element.style.zIndex = `${99 + (this.position * -1)}`;
            this.element.style.animation = "f-to-b-card-transition 0.7s ease";
            this.element.style.WebkitAnimation = "f-to-b-card-transition 0.7s ease";
        }
        else{
            this.element.style.transform = `translate(${this.position * -4}%, ${this.position * 3}%)`;
            this.element.style.zIndex = `${99 + (this.position * -1)}`;
            this.element.style.animation = null;
            this.element.style.WebkitAnimation = null;
        }
    }

    activeInactive(){
        if(this.position !== 0){
            this.element.classList.add('inactive-card');
        }
        else{
            this.element.classList.remove('inactive-card');
        }
    }
}


export default ProjectCard;