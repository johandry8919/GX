





function runAnimationIN() {
    let dur = 0.5;
  
    if (window.top.spxRenderer && window.top.spxRenderer.fps) {
      gsap.ticker.fps(window.top.spxRenderer.fps);
      console.log("spxRenderer: " + window.top.spxRenderer.fps + " FPS");

      gsap.set("#ccontainer", { delay: 0.1, opacity: 1});
     
    }

   


  
}


function runAnimationOUT() {
    gsap.set("#container", { delay: 0.1, opacity: 0});
    
  }