import { hideAllContainers } from './navigation_module.js';
import book from './class_module.js';

const containers = document.querySelectorAll('.containers');
const navLinks = document.querySelectorAll('.nav--link');
const loadDocuments = () => {
  window.addEventListener('DOMContentLoaded', () => {
    book.bookArray = book.getBookFromLocalStorage();
    book.displayBook();
    book.addBookToUI();
    hideAllContainers();
    containers[0].classList.remove('hide--container');
    navLinks[0].classList.add('active--link');
  });
};
export default loadDocuments;