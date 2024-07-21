document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('p.linkbox_desc').forEach(function(p) {
    p.addEventListener('wheel', function(event) {
      event.preventDefault();
      var lineHeight = parseFloat(window.getComputedStyle(p).lineHeight);
      var scrollAmount = event.deltaY > 0 ? lineHeight : -lineHeight;
      p.scrollTop += scrollAmount;
    });
  });
});
