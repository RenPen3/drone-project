document.addEventListener('DOMContentLoaded', function () {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    const menu = dropdown.querySelector('.dropdown-menu');

    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });

    // Close the dropdown when clicking outside
    document.addEventListener('click', function (e) {
      if (!dropdown.contains(e.target)) {
        menu.style.display = 'none';
      }
    });
  });
});
