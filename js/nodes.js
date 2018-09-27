function nodesWrapper(){
    
    let nodes = Array.from(document.querySelectorAll('.node'));
    let nodeGradientStop = document.querySelectorAll('#RadialGradient2 stop');
    
    nodes.forEach((node)=> {
        let nodeClone = node.cloneNode();
        node.parentNode.insertBefore(nodeClone, node);
        nodeClone.classList.add('node-hover');
        nodeClone.classList.remove('node');
    
        node.addEventListener('mouseover', (e)=>{
            nodeClone.classList.add('node-hover-show');
            nodeGradientStop[0].style.animation = "node-glow 2s linear infinite";
        })
        node.addEventListener('mouseleave', (e)=>{
            nodeClone.classList.remove('node-hover-show');
            nodeGradientStop[0].style.animation = "none";
        })
    
    })
}

export default nodesWrapper;