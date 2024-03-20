// Locomotive
function locoScroll() {
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    tablet: { smooth: true },
    smartphone: { smooth: true },
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
  // Scroll to contact
  document.addEventListener("DOMContentLoaded", function () {
    document
      .querySelector("#contactLink")
      .addEventListener("click", function () {
        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: "#contact-page",
            offsetY: 0,
          },
        });
      });
  });
}
locoScroll();
function cursorEffect() {
  let heroContent = document.querySelector("#hero-content");
  let cursor = document.querySelector("#cursor");

  heroContent.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      css: { x: dets.clientX, y: dets.clientY },
      duration: 0.3,
    });
  });
  heroContent.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
      duration: 0.3,
    });
  });
  heroContent.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
      duration: 0.3,
    });
  });
}
cursorEffect();
function pageContentAnimation() {
  gsap.from(".elem h2, #content-introduce-top h3 span", {
    y: 100,
    opacity: 0,
    stagger: 0.1,
    duration: 0.4,
    scrollTrigger: {
      trigger: "#content-introduce",
      scroller: "#main",
      start: "center bottom",
      end: "center center",
      scrub: true,
    },
  });
  gsap.from(".line-1", {
    scrollTrigger: {
      trigger: ".line-1",
      scroller: "#main",
      opacity: 0,
      scrub: true,
      start: "center bottom",
      end: "center center",
    },
    scaleX: 0,
    transformOrigin: "left center",
    ease: "none",
  });
  gsap.from(".line-2", {
    scrollTrigger: {
      trigger: ".line-2",
      scroller: "#main",
      opacity: 0,
      scrub: true,
      start: "center bottom",
      end: "center center",
    },
    scaleX: 0,
    transformOrigin: "left center",
    ease: "none",
  });
  gsap.from("#work-page-top", {
    y: 100,
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#work-page",
      scroller: "#main",
      start: "top center",
      end: "top top",
    },
  });
  gsap.from("#contact-page .topic", {
    x: -80,
    opacity: 0,
    scrollTrigger: {
      trigger: "#contact-page",
      scroller: "#main",
      start: "top center",
      end: "top top",
      scrub: true,
    },
  });
  gsap.to("#work-elements .box", {
    y: -80,
    stagger: 0.15,
    opacity: 1,
    duration: 0.4,
    scrollTrigger: {
      trigger: "#work-page",
      scroller: "#main",
      start: "top center",
      end: "top top",
      scrub: true,
    },
  });
  gsap.from(".contact-list .contact-item", {
    y: -80,
    stagger: 0.15,
    opacity: 0,
    duration: 0.4,
    scrollTrigger: {
      trigger: "#contact-page",
      scroller: "#main",
      start: "top center",
      end: "top top",
      scrub: true,
    },
  });
}
pageContentAnimation();
// Loader
let tl = gsap.timeline();
tl.from("#loader h3", {
  x: 20,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
});
tl.to("#loader h3", {
  opacity: 0,
  x: -20,
  stagger: 0.1,
});
tl.to("#loader", {
  opacity: 0,
});
tl.to("#loader", {
  display: "none",
});
// Hero
tl.from("#hero-content h1 span", {
  y: 100,
  opacity: 0,
  stagger: 0.2,
  duration: 0.5,
});
