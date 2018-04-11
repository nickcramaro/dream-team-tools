let menu = document.getElementById('menu');
let secondary = document.getElementById('secondary');
let encodeNav = document.getElementById('encodeNav');
let loremNav = document.getElementById('loremNav');
let rgbNav = document.getElementById('rgbNav');
let encodeMenu= document.getElementById('encodeMenu');
let loremMenu = document.getElementById('loremMenu');
let rgbMenu = document.getElementById('rgbMenu');
let backBtn = document.getElementById('backBtn');

encodeNav.addEventListener('click', e => {
    menu.style.display = 'none';
    secondary.style.display = 'block';
    encodeMenu.style.display = 'block';
});

loremNav.addEventListener('click', e => {
    menu.style.display = 'none';
    secondary.style.display = 'block';
    loremMenu.style.display = 'block';
});

rgbNav.addEventListener('click', e => {
    menu.style.display = 'none';
    secondary.style.display = 'block';
    rgbMenu.style.display = 'block';
});

backBtn.addEventListener('click', e => {
    menu.style.display = 'block';
    secondary.style.display = 'none';
    rgbMenu.style.display = 'none';
    loremMenu.style.display = 'none';
    encodeMenu.style.display = 'none';
});