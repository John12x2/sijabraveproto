document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.getElementById("navLinks");

  let isExpanded = false;

  document.getElementById("menuToggle").addEventListener("click", () => {
    isExpanded = !isExpanded;

    if (isExpanded) {
      navLinks.classList.remove("w-0", "opacity-0", "scale-90");
      navLinks.classList.add(
        "flex",
        "w-[16rem]",
        "opacity-100",
        "scale-100",
        "mt-4"
      );
    } else {
      navLinks.classList.remove("opacity-100", "scale-100", "mt-4");
      navLinks.classList.add("opacity-0", "scale-90");

      // Delay collapse so opacity transition completes first
      setTimeout(() => {
        navLinks.classList.remove("w-[16rem]");
        navLinks.classList.add("w-0");
      }, 300);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("logoContainer");
  const text = document.getElementById("logoText");

  let isExpanded = false;

  container.addEventListener("click", () => {
    isExpanded = !isExpanded;

    if (isExpanded) {
      container.classList.remove("w-[5rem]");
      container.classList.add("w-[16rem]");

      setTimeout(() => {
        text.classList.remove("opacity-0", "scale-90");
        text.classList.add("opacity-100", "scale-100");
      }, 200);
    } else {
      text.classList.remove("opacity-100", "scale-100");
      text.classList.add("opacity-0", "scale-90");

      setTimeout(() => {
        container.classList.remove("w-[16rem]");
        container.classList.add("w-[5rem]");
      }, 200);
    }
  });
});
