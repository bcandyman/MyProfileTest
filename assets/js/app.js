const btn = document.getElementById('slide');
const box = document.getElementsByClassName('box')[0];

const handleOnClick = () => box.classList.toggle('slide-in');

btn.onclick = () => handleOnClick();
