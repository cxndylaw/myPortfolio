document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".project-card video").forEach((video) => {
    const card = video.closest(".project-card");
    card.addEventListener("mouseenter", () => {
      video.currentTime = 0;
      video.play();
    });
    card.addEventListener("mouseleave", () => {
      video.pause();
    });
  });
});
