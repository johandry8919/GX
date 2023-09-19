





function runAnimationIN() {
  let dur = 0.5;

  if (window.top.spxRenderer && window.top.spxRenderer.fps) {
    gsap.ticker.fps(window.top.spxRenderer.fps);
    console.log("spxRenderer: " + window.top.spxRenderer.fps + " FPS");

    
  
   
    //gsap.set("#segunda_right", { delay: 0.1, opacity: 0});
    //gsap.set("#tercera_right", { delay: 0.1, opacity: 0});
    gsap.set("#apariciones_left", { delay: 0.1, opacity: 0});
    gsap.set("#apariciones_right", { delay: 0.1, opacity: 0});
    gsap.set("#salvados_left", { delay: 0.1, opacity: 0});
    gsap.set("#salvados_right", { delay: 0.1, opacity: 0});
    //gsap.set("#segunda_left", { delay: 0.1, opacity: 0});
    //gsap.set("#tercera_left", { delay: 0.1, opacity: 0});
    gsap.set("#cont-2", { delay: 0.1, opacity: 0});
    gsap.set("#cont-3", { delay: 0.1, opacity: 0});
  }

  //title

  gsap.fromTo(
      "#cont-2",
      { opacity: 0 },
      {
        delay: 0.4,
        duration: dur - 0.2,
        opacity: 1,
        ease: "Power3.easeOut",
      }
    );

    gsap.fromTo(
      "#cont-2",
      { y: 200 },
      { delay: 0.4, duration: dur - 0.2, y: 0, ease: "back.out(0.3)" }
    );

    gsap.fromTo(
      "#cont-2",
      { opacity: 0 },
      {
        delay: 0.4,
        duration: dur - 0.2,
        opacity: 2,
        ease: "Power3.easeOut",
      }
    );




  //title

  //container

      setTimeout(()=>{
          gsap.fromTo(
              "#cont-3",
              { opacity: 0 },
              {
                delay: 0.6,
                duration: dur - 0.2,
                opacity: 1,
                ease: "Power3.easeOut",
              }
            );
        
            gsap.fromTo(
              "#cont-3",
              { y: -100 },
              { delay: 0.6, duration: dur - 0.2, y: 0, ease: "back.out(0.3)" }
            );
        
            gsap.fromTo(
              "#cont-3",
              { opacity: 0 },
              {
                delay: 0.6,
                duration: dur - 0.2,
                opacity: 2,
                ease: "Power3.easeOut",
              }
            );
      
      },500)

      setTimeout(()=>{
          

        // right
  gsap.fromTo(
      "#apariciones_right",
      { opacity: 0 },
      {
        delay: 0.2,
        duration: dur - 0.2,
        opacity: 1,
        ease: "Power3.easeOut",
      }
    );

    gsap.fromTo(
      "#apariciones_right",
      { x: 200 },
      { delay: 0.2, duration: dur - 0.2, x: 0, ease: "back.out(0.3)" }
    );

    gsap.fromTo(
      "#apariciones_right",
      { opacity: 0 },
      {
        delay: 0.2,
        duration: dur - 0.2,
        opacity: 2,
        ease: "Power3.easeOut",
      }
    );

    //salvados_left
  gsap.fromTo(
      "#salvados_right",
      { opacity: 0 },
      {
        delay: 0.4,
        duration: dur - 0.2,
        opacity: 1,
        ease: "Power3.easeOut",
      }
    );

    gsap.fromTo(
      "#salvados_right",
      { x: 300 },
      { delay: 0.4, duration: dur - 0.2, x: 0, ease: "back.out(0.3)" }
    );

    gsap.fromTo(
      "#salvados_right",
      { opacity: 0 },
      {
        delay: 0.4,
        duration: dur - 0.2,
        opacity: 2,
        ease: "Power3.easeOut",
      }
    );
    //segunda_right
  gsap.fromTo(
      "#segunda_right",
      { opacity: 0 },
      {
        delay: 0.6,
        duration: dur - 0.2,
        opacity: 1,
        ease: "Power3.easeOut",
      }
    );

    gsap.fromTo(
      "#segunda_right",
      { x: 300 },
      { delay: 0.6, duration: dur - 0.2, x: 0, ease: "back.out(0.3)" }
    );

    gsap.fromTo(
      "#segunda_right",
      { opacity: 0 },
      {
        delay: 0.6,
        duration: dur - 0.2,
        opacity: 2,
        ease: "Power3.easeOut",
      }
    );
    //tercera_right
  gsap.fromTo(
      "#tercera_right",
      { opacity: 0 },
      {
        delay: 0.8,
        duration: dur - 0.2,
        opacity: 1,
        ease: "Power3.easeOut",
      }
    );

    gsap.fromTo(
      "#tercera_right",
      { x: 300 },
      { delay: 0.8, duration: dur - 0.2, x: 0, ease: "back.out(0.3)" }
    );

    gsap.fromTo(
      "#tercera_right",
      { opacity: 0 },
      {
        delay: 0.8,
        duration: dur - 0.2,
        opacity: 2,
        ease: "Power3.easeOut",
      }
    );
      // right

      // Left
  gsap.fromTo(
      "#apariciones_left",
      { opacity: 0 },
      {
        delay: 0.2,
        duration: dur - 0.2,
        opacity: 3,
        ease: "Power3.easeOut",
      }
    );

    gsap.fromTo(
      "#apariciones_left",
      { x: -200 },
      { delay: 0.2, duration: dur - 0.2, x: 0, ease: "back.out(0.3)" }
    );

    gsap.fromTo(
      "#apariciones_left",
      { opacity: 0 },
      {
        delay: 0.2,
        duration: dur - 0.2,
        opacity: 2,
        ease: "Power3.easeOut",
      }
    );

    //salvados_left
  gsap.fromTo(
      "#salvados_left",
      { opacity: 0 },
      {
        delay: 0.4,
        duration: dur - 0.2,
        opacity: 1,
        ease: "Power3.easeOut",
      }
    );

    gsap.fromTo(
      "#salvados_left",
      { x: -300 },
      { delay: 0.4, duration: dur - 0.2, x: 0, ease: "back.out(0.3)" }
    );

    gsap.fromTo(
      "#salvados_left",
      { opacity: 0 },
      {
        delay: 0.4,
        duration: dur - 0.2,
        opacity: 2,
        ease: "Power3.easeOut",
      }
    );
    //segunda_right
  gsap.fromTo(
      "#segunda_left",
      { opacity: 0 },
      {
        delay: 0.6,
        duration: dur - 0.2,
        opacity: 1,
        ease: "Power3.easeOut",
      }
    );

    gsap.fromTo(
      "#segunda_left",
      { x: -300 },
      { delay: 0.6, duration: dur - 0.2, x: 0, ease: "back.out(0.3)" }
    );

    gsap.fromTo(
      "#segunda_left",
      { opacity: 0 },
      {
        delay: 0.6,
        duration: dur - 0.2,
        opacity: 2,
        ease: "Power3.easeOut",
      }
    );
    //tercera_right
  gsap.fromTo(
      "#tercera_left",
      { opacity: 0 },
      {
        delay: 0.8,
        duration: dur - 0.2,
        opacity: 1,
        ease: "Power3.easeOut",
      }
    );

    gsap.fromTo(
      "#tercera_left",
      { x: -300 },
      { delay: 0.8, duration: dur - 0.2, x: 0, ease: "back.out(0.3)" }
    );

    gsap.fromTo(
      "#tercera_left",
      { opacity: 0 },
      {
        delay: 0.8,
        duration: dur - 0.2,
        opacity: 1,
        ease: "Power3.easeOut",
      }
    );
      //left

      },1200)




  //container



}


function runAnimationOUT() {
  gsap.set("#container", { delay: 0.1, opacity: 0});
  
}