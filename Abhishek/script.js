var tl = gsap.timeline({scrollTrigger:{
    trigger:"#part-1",
    // markers:true,
    start:"50% 50%",
    end:"100% 50%",
    scrub:1,
    duration: 1,
    pin:true,
  }});
  tl
  .to(".part-1-img",{
    width: "100%",
    top: "0%"
  },'a')
  .to("#part-1 h1",{
    fontSize: "5vw",
    opacity: 0
  },'a')
  .to("#part-1 p",{
    opacity: 0
  },'a')