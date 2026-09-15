const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");
menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", isOpen);
});
document.querySelectorAll(".nav a").forEach((link) =>
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }),
);
if (
  window.gsap &&
  window.ScrollTrigger &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  gsap.registerPlugin(ScrollTrigger);
  const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
  intro
    .from(".header", { y: -80, opacity: 0, duration: 0.75 })
    .from(
      ".hero-animate",
      { y: 34, opacity: 0, duration: 0.8, stagger: 0.12 },
      "-=.3",
    )
    .from(".hero-image", { scale: 1.12, opacity: 0, duration: 1.4 }, "-=1")
    .from(
      ".hero-image-wrap blockquote,.hand-note",
      { y: 20, opacity: 0, duration: 0.7, stagger: 0.16 },
      "-=.7",
    );
  gsap.utils
    .toArray(".reveal")
    .forEach((el) =>
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: "top 84%" },
        y: 42,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      }),
    );
  gsap.utils
    .toArray(".reveal-left")
    .forEach((el) =>
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: "top 82%" },
        x: -65,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      }),
    );
  gsap.utils
    .toArray(".reveal-right")
    .forEach((el) =>
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: "top 82%" },
        x: 65,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      }),
    );
  gsap.from(".service-card", {
    scrollTrigger: { trigger: ".service-grid", start: "top 88%", once: true },
    y: 38,
    duration: 0.65,
    stagger: 0.08,
    ease: "power3.out",
    clearProps: "transform",
  });
  gsap.from(".benefit-grid>div", {
    scrollTrigger: { trigger: ".benefits", start: "top 65%" },
    y: 35,
    opacity: 0,
    duration: 0.75,
    stagger: 0.12,
  });
  gsap.from(".testimonial", {
    scrollTrigger: { trigger: ".testimonial-grid", start: "top 82%" },
    y: 45,
    opacity: 0,
    duration: 0.8,
    stagger: 0.13,
  });
  gsap.to(".benefits-bg", {
    yPercent: 10,
    ease: "none",
    scrollTrigger: {
      trigger: ".benefits",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
  gsap.to(".soft-orbit", {
    rotation: 180,
    scale: 1.15,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: 1,
    },
  });
}
