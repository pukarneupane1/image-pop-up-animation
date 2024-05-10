const throttleFunction = (func, delay) => {

    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}
center.addEventListener("mousemove",
    throttleFunction((dets) => {
       var div = document.createElement("div");
       div.classList.add("imagediv");
       
       div.style.left = dets.clientX + "px";
       div.style.top = dets.clientY + "px";
       
       var img = document.createElement("img");
       img.setAttribute("src","https://images.unsplash.com/photo-1715271040278-9c6fcd6e669b?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
       
       document.body.appendChild(div);

        div.appendChild(img);

        gsap.to(img,{
            y:0,
            ease: Power1,
            duration: 0.2
        })
        gsap.to(img,{
            y:"100%",
            delay: 0.5,
            ease: Power2,
        })


       setTimeout(function(){
        div.remove();
       },2000)
    }, 500));