Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvrImg ,.fheading",{videos:["./2.mp4","./3.mp4","./main.mp4"]});


let sections= document.querySelectorAll(".fleftelem")


gsap.to(".fleftelem",{
    scrollTrigger:{
        trigger:"#fimages",
        pin:true,
        start:"top top",
        end:"bottom bottom",
        endtrigger:".last",
        scrub: 1
    },
    y: "-300%",
    ease: Power1,
});

Shery.imageEffect(".img", {
  style: 4,
  config: { onMouse: { value: 1 } },
  slideStyle: (setScroll) => {
    sections.forEach(function (section, index) {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 1,
        onUpdate: function (prog) {
          setScroll(prog.progress + index);
        },
      });
    });
  },
});