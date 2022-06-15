let coins = 0;

function plus() {
    coins++;
    document.querySelector('h2').innerHTML = coins;
    document.querySelector('h2').style.color= '#041d63';
}

function minus() {
    coins--;
    document.querySelector('h2').innerHTML = coins;
    document.querySelector('h2').style.color= 'red';
}