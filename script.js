function startAnimation(){
    gsap.to(".imagecontainer" , {
        width: "100%" ,
        ease: Expo.easeInOut ,
        duration: 2 ,
        stagger: 2,
    })
    gsap.to(".text h1", {
        ease: Expo.easeInOut,
        stagger: 2.5,
        top: 0
    })
    gsap.to(".text h1", {
        delay: 2,
        ease: Expo.easeInOut,
        stagger: 2,
        top: "-100%",
        onComplete: restartAnimation,
    })
}


function restartAnimation(){
    gsap.set(".imagecontainer", {width: 0});
    gsap.set(".text h1", {top: "100%"})
    startAnimation();
}
startAnimation();