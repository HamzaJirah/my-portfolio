// select element from DOM
const copyright = document.querySelector('.copyright');
// create date object
const date = new Date();
// set the innerHTML for copyright
copyright.innerHTML = `Ibrahim Jirah Hamza &copy; ${date.getFullYear()}`;