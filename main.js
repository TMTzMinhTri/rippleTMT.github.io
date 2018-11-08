document.addEventListener("DOMContentLoaded",function(){
    var button = document.querySelector("button");
    var hoverAction = true;
    function rippleAnimation(buttion,event){
        let ripple = document.createElement("div");
        let x,y;
        x = event.clientX - button.offsetLeft;
        y = event.clientY - button.offsetTop;
        ripple.classList.add("ripple");
        ripple.style.top = y + "px";
        ripple.style.left = x + "px";
        button.appendChild(ripple);
    }
    button.addEventListener("click",function(event){
        rippleAnimation(button,event);
    });
    button.addEventListener("mouseover",function(event){
        if(hoverAction === true){
            hoverAction =false;
            rippleAnimation(button,event);
            setTimeout(() => {
                hoverAction = true;
            }, 100);
        }
    });
});