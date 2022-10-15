function titles(){

    let i = 0;
    let arr = Array.prototype.slice.call(document.getElementsByClassName("projects")[0].getElementsByTagName("h3"));
    arr.forEach(el => {
        let current = functions[i++]
        el.innerHTML += current[3] 
        el.childNodes[1].setAttribute("href", current[2])
    });

}

titles();