function interfaceOperations(){
    //INTERFACE
    let stageLinks = Array.from(document.querySelectorAll('.interface-link'));

        let content = document.querySelector('.content');
        let portfolioArm1Link = document.querySelector('#portfolio-arm1-revealer');
        let contactArm2Link = document.querySelector('#contact-arm2-revealer');
        let contactArm3Icons = document.querySelector('#contact-arm3-icons');
    //create our arms object, which will enable us to manipulate the interface with ease
    let armsObj = {};
    let revealerRegex = /-revealer/; //for testing whether the element is an option for opening up our interface or a link/modal
    stageLinks.map((link)=> {

        let currentIdSubstr, currentArm, currentPath, nextArm, nextArmClip, nextArmNum, nextArmId, nextArmOptions, nextArmOptionsId;
        let isArmRevealer = revealerRegex.test(link.id);

        if (isArmRevealer){
            currentIdSubstr = link.id.replace("-revealer", "");
            currentPath = currentIdSubstr.substr(0, currentIdSubstr.length - 5);
            currentArm = document.querySelector("#" + currentIdSubstr);

            nextArmNum = parseInt(currentIdSubstr[currentIdSubstr.length - 1]) + 1;
            nextArmId = currentPath + "-arm" + nextArmNum;
            nextArm = document.querySelector("#" + nextArmId);
            nextArmOptionsId = nextArmId + "-options .link-h";
            nextArmOptions = Array.from(document.querySelectorAll("#" + nextArmOptionsId));
            nextArmClip = document.querySelector("#" + nextArmId + '-clip circle');
        }
        else{
            currentIdSubstr = link.id.replace("-link", "");
            currentArm = currentPath = nextArm = nextArmClip = nextArmOptions = null;
        }

        let currentId = link.id;
        let stageImageId = "#" + currentIdSubstr + "-sphere";
        let stageImage = document.querySelector(stageImageId);

    //inter-relations of DOM elements are locked in by the naming conventions:
    //-sphere, -link, -option, -arm#, -clip...
    //e.g. portfolio-arm1-option is linked to the sphere slide called portfolio-arm1-sphere via the object below
        armsObj[currentId] = {      linkElem: link,//DOM element for interface link
                                    currentArm: currentArm, //the arm that the user is currently on (DOM element)
                                    currentPath: currentPath, //e.g. "about"
                                    currentIdSubstr: currentIdSubstr, //e.g. "about-arm2"
                                    nextArm: nextArm, //the DOM element for the next interface arm
                                    nextArmId: nextArmId,
                                    nextArmClip: nextArmClip, //the mask clip for the next arm
                                    nextArmOptions: nextArmOptions, //the interface links that are on the next arm
                                    stageImage: stageImage, // the sphere images that correspond to this link
                                    shown: false //whether the next arm is shown or not
                                }
    } )
    //manipulate interface for user events
    stageLinks.forEach((link)=>{

        let currentId = link.id;
        let currentArm = armsObj[currentId];
        
        link.addEventListener('mouseenter', (e)=>{
            if(!!currentArm.stageImage){
                currentArm.stageImage.classList.add('show');
            }
        })
        
        link.addEventListener('mouseleave', ()=>{
            if(!!currentArm.stageImage){
                currentArm.stageImage.classList.remove('show');
            }
        })
    
        link.addEventListener('click', (e)=>{
            //only links with the current path property set are interface options to reveal the next arm
            if(!!armsObj[currentId].currentPath){
                let currentPath = armsObj[currentId].currentPath;

                
                //unextend other arms
                Object.keys(armsObj).forEach(arm =>{
                    let armObj = armsObj[arm];
                    if(armObj.currentPath !== currentPath ){
                        if(!!armObj.nextArm){
                            showHideLinksForNextArm(armObj, false);
                            showHideNextArm(armObj, false);
                        }
                    }
                });
                //if there is a next arm, extend it
                if(!!currentArm.nextArm){
                    showHideLinksForNextArm(currentArm, true)
                    showHideNextArm(currentArm, true);
                    //unextend arms further down the branch if the current arm is being hidden
                    if(!currentArm.shown){
                        let nextArmObj = findNextArmObj(currentArm);
                        //remove active class from link leading to the next arms
                        nextArmObj.linkElem.classList.remove('active');
                        if(!!nextArmObj.nextArm){
                            showHideLinksForNextArm(nextArmObj, false);
                            showHideNextArm(nextArmObj, false);
                        }
                    }
                }
                //cycle through all links and remove active class unless on the same path as the clicked link
                stageLinks.map(_link=>{
                    let currentLinkPathRGX = RegExp(currentArm.currentPath);
                    let testIfLinkIsOnCurrentPath = currentLinkPathRGX.test(_link.id)
                    if(!testIfLinkIsOnCurrentPath){
                        _link.classList.remove('active');
                    }
                })
                link.classList.toggle('active');
                //special cases
                if(portfolioArm1Link.classList.contains('active')){
                    content.classList.add('content-transform');
                }
                else{
                    content.classList.remove('content-transform');
                }
                if(contactArm2Link.classList.contains('active')){
                    setTimeout(()=>{
                        contactArm3Icons.classList.add('show');
                    }, 600);
                }
                else{
                    contactArm3Icons.classList.remove('show');                
                }

            }
        })


        function showHideLinksForNextArm(option, toggle){
            let delay = option.shown ? (currentArm.nextArmOptions.length - 1) * 0.2 : 0;
            option.nextArmOptions.map((link)=> {
                link.style.transitionDelay = delay + "s";
                toggle ? link.classList.toggle('show') : link.classList.remove('show');
                option.shown ? delay -= 0.2 : delay += 0.35;
            })
            toggle ? option.shown = !option.shown : option.shown = false;
        }

        function findNextArmObj(option){
            let objKey = option.nextArm.id + '-revealer';
            return armsObj[objKey] || {};
        }

        function showHideNextArm(option, toggle){
            toggle ? option.nextArm.classList.toggle('show') : option.nextArm.classList.remove('show');
            let expandClipClassName =option.nextArm.id + '-expandclip';
            //Firefox browser support with manual javascript
            if(option.nextArmClip.style.r !== undefined){
              toggle ? option.nextArmClip.classList.toggle(expandClipClassName) : option.nextArmClip.classList.remove(expandClipClassName);
             }
            else{
                //toggle ?  option.nextArmClip.setAttribute('r', '250') : option.nextArmClip.setAttribute('r', '50');
                let maxRadius = 250;
                let rate = 2;
                switch(option.nextArmId){
                    case "portfolio-arm2": maxRadius = 245; rate = 2;break;
                    case "contact-arm2": maxRadius = 160; rate = 1; break;
                    case "contact-arm3": maxRadius = 175; rate = 1; break;
                    case "about-arm2": maxRadius = 250; rate = 2; break;
                }
                let baseR = option.shown ? 50 : maxRadius;
                var intervalR = setInterval(increaseR, 5);
                function increaseR(){
                    option.nextArmClip.setAttribute('r', baseR)
                    option.shown ? baseR += rate : baseR -= rate;
                    if(baseR > maxRadius || baseR < 50){
                        clearInterval(intervalR);
                    }
                }
                
            }
        }
    })

}

export default interfaceOperations;