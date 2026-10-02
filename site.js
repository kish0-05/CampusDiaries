document.addEventListener("DOMContentLoaded", () => {

  const items = document.querySelectorAll(".reveal");

  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries, observer) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  items.forEach((item) => {
    observer.observe(item);
  });

});
