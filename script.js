const container = document.querySelector('.container');
const loginbox = document.querySelector('.loginbox');
const registerbox = document.querySelector('.Registerbox');

loginbox.addEventListener('click', () => {
    container.classList.remove('active');
});

registerbox.addEventListener('click', () => {
    container.classList.add('active');
});

