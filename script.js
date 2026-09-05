document.addEventListener('DOMContentLoaded', function () {

  // Event delegation on document.body: works even if .sidebar is
  // injected later (e.g. fetched from sidebar.html) after this script runs.

  document.body.addEventListener('click', function (e) {

    // Nav link active-state toggle
    const link = e.target.closest('.sidebar-nav .nav-link');
    if (link) {
      e.preventDefault();
      document.querySelectorAll('.sidebar-nav .nav-link').forEach(function (l) {
        l.classList.remove('active');
      });
      link.classList.add('active');
      return;
    }

    // User card click (sidebar footer)
    if (e.target.closest('.user-card')) {
      console.log('User profile clicked');
      return;
    }

    // Hamburger toggle (tablet/mobile off-canvas sidebar)
    if (e.target.closest('.topbar-toggle')) {
      const sidebar = document.querySelector('.sidebar');
      const backdrop = document.querySelector('.sidebar-backdrop');
      if (sidebar && backdrop) {
        sidebar.classList.toggle('show');
        backdrop.classList.toggle('show');
      }
      return;
    }

    // Backdrop click closes the off-canvas sidebar
    if (e.target.classList.contains('sidebar-backdrop')) {
      const sidebar = document.querySelector('.sidebar');
      e.target.classList.remove('show');
      if (sidebar) sidebar.classList.remove('show');
    }
  });

});