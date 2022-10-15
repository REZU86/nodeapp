var functions =  [];

changeClass = function(obj){
    let r = obj.parentNode.parentNode.parentNode.childNodes[0].id;
    if(obj.className == "button" ){
      
      functions[r][1] = true
      
      requestAnimationFrame(functions[r][0])
      obj.className = "paused"
      document.querySelectorAll('.paused').forEach(button => {
        if(obj != button){
            button.className = "button"
            functions[button.parentNode.parentNode.parentNode.childNodes[0].id][1] = false;
        }
    })

  }else {
    functions[r][1] = false;
    obj.className = "button"
  }
  
  
}

fullscreenCanvas = function(obj){

    let canv = obj.closest(".card").childNodes[0]; 
     index = canv.id;
     console.log(index);
    canv.setAttribute("id", "fullscreencanvas");
    let g = document.createElement('div');
    g.id = "pop-up";
    document.body.appendChild(g)

    let x = document.createElement('button');
    x.id = "collapse";
    x.setAttribute('onclick','collapsecanv()')
    document.body.appendChild(x);
    
}
collapsecanv = function(){
    let el = document.getElementById("collapse")
    let canv = document.getElementById("fullscreencanvas")
    let pop = document.getElementById("pop-up")
    canv.setAttribute("id", index + "")
    el?.remove();
    pop?.remove();
}




tabchange = function(obj){
   document.getElementById("info").querySelectorAll('li > a').forEach(el => {
     let att = el.getAttribute("data-translate");
     
    if(obj != el){
       
        document.getElementsByClassName(att)[0].style.display = "none"; 
        document.querySelectorAll(".paused").forEach(el => el.className = "button");
        functions.forEach((item, index) => {
            functions[index][1] = false;
           
        })
    }else {
        document.getElementsByClassName(att)[0].style.display = "block";
    }
   })
}
tabchange( document.getElementById("info").querySelectorAll('li > a')[0] )

function createCanvas(){
  
}
createCanvas()

