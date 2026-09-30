// Small progressive enhancement: reveal sections as they enter the viewport.
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll(".project, .stack-card, .about-copy").forEach(el => {
  el.classList.add("reveal");
  observer.observe(el);
});

document.head.insertAdjacentHTML("beforeend", `<style>
.reveal{opacity:0;transform:translateY(18px);transition:opacity .7s ease,transform .7s ease}
.reveal.visible{opacity:1;transform:none}
</style>`);
