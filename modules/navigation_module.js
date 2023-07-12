const navLinks = document.querySelectorAll('.nav--link');
const containers = document.querySelectorAll('.containers');
const hideAllContainers = () => {
  containers.forEach((container) => {
    container.classList.add('hide--container');
  });
};
const removeAllActiveLinks = () => {
  navLinks.forEach((link) => {
    link.classList.remove('active--link');
  });
};
const handleNavLinkClick = () => {
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const linkClass = e.target.classList[0];
      hideAllContainers();
      removeAllActiveLinks();
      e.target.classList.add('active--link');
      containers.forEach((container) => {
        if (container.id === linkClass) {
          container.classList.remove('hide--container');
        } else {
          container.classList.add('hide--container');
        }
      });
    });
  });
};
export { hideAllContainers, removeAllActiveLinks, handleNavLinkClick };