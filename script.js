// Mobile menu toggle
const nav = document.querySelector(".nav");
const toggle = document.getElementById("navToggle");
const links = document.querySelectorAll("#navLinks a");

toggle?.addEventListener("click", () => nav.classList.toggle("open"));
links.forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));

// Smooth-scroll offset for sticky header
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href");
    if (id && id.length > 1) {
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        const top = el.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  });
});
