(function () {
  const menuElement = document.querySelector('#navbarSupportedContent');

  const setMenuType = (docWidth, menuEl) => {
    if (docWidth < 1024 && !menuEl.classList.contains('mobile')) {
      menuEl.classList.add('mobile');
    } else if (docWidth >= 1024 && menuEl.classList.contains('mobile')) {
      menuEl.classList.remove('mobile');
    }
  };

  window.addEventListener('DOMContentLoaded', (event) => {
    const viewportWidth = event.currentTarget.visualViewport.width;

    setMenuType(viewportWidth, menuElement);
  });

  window.addEventListener('resize', (event) => {
    const viewportWidth = event.currentTarget.visualViewport.width;

    setMenuType(viewportWidth, menuElement);
  });
})();
