document.addEventListener("DOMContentLoaded", function() {
  var carouselItems = document.querySelectorAll(".carousel-item");
  carouselItems.forEach(function(item, index) {
    setTimeout(function() {
      item.classList.remove("carousel-item-initial");
    }, index * 1000);
  });
});