
if (window.innerWidth > 1000) {
    gsap.to('.video-box', {
        // width: 320,
        width: 1200,
        // height: "30%",
        duration: 2,
        delay: 2,
        borderRadius: '500',
        scrollTrigger: {
            scroller: 'body',
            // trigger: '.video-container',
            trigger: '.video-box',
            // markers: true,
            scrub: 2,
            start: 'top 70%',
            end: 'top 20%'
        }



    })
}

if (window.innerWidth < 767) {
    gsap.to('.video-box', {
        width: 340,
        // width: 1200,
        height: "80%",
        duration: 2,
        delay: 2,
        borderRadius: '500',
        scrollTrigger: {
            scroller: 'body',
            trigger: '.video-box',
            scrub: 2,
            start: 'top 100%',
            end: 'top 30%'
        }



    })
}



gsap.to(".anim", {
    x: 0,
    duration: 1,
    opacity: 1,
    stagger: 0.1,
    scrollTrigger: ".anim"
})
gsap.to('.anim2', {
    y: 0,
    duration: 1,
    opacity: 1,

    stagger: 0.1,
    scrollTrigger: ".anim"
})