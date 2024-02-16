
// click on the body to reset the game
// document.body.addEventListener('click', function () {
//     reset();
// });

let history_color = []
let history_div = []


for (let i = 0; i < 4; i++) {

    // add event listener for every click to execute the boxing function
    document.getElementsByClassName('box')[i].addEventListener('click', function () {
        boxing(this);
    });


    // document.getElementsByClassName('box')[i].addEventListener('click', function () {
    //     boxing(div);
    // });
}






function reset() {
    // for (item in document.getElementsByClassName('box')) {
    let items = document.getElementsByClassName('box');
    for (i in items) {

        items[i].classList.add('hidden');
        items[i].classList.remove('show');
    }
    history_color = [];
    history_div = [];
}


function boxing(div) {
    // identifies the div that was clicked
    // changes the background color of the div


    if (div.classList.contains('hidden')) {

        div.classList.add('show');
        div.classList.remove('hidden');

        if (history_div.length < 2) {
            history_div.push(div);
        }
        if (history_div.length == 2) {
            
            console.log(history_div[0].classList, history_div[1].classList)
            if (history_div[0].classList !== history_div[1].classList) {
                setTimeout(function () {
                    for (let j = 0; j < 2; j++) {
                        console.log(history_div)
                        history_div[j].classList.add('hidden');
                        history_div[j].classList.remove('show');
                    }
                    history_div = [];
                }, 1000);
            }
        }
    }
}





function boxing2(div) {
    // identifies the div that was clicked
    // changes the background color of the div

    if (history_color.length == 2) {
        if (history_color[0] === history_color[1]) {
            if ('red' in div.classList) {
                div.style.backgroundColor = 'red';
            }
            if ('blue' in div.classList) {
                div.style.backgroundColor = 'blue';
            }
            history_color = [];
        }
        else {
            for (let i = 0; i < 4; i++) {
                let reset = document.getElementsByClassName('box')[i];
                reset.style.backgroundColor = 'black';
            }
            history_color = [];
        }
    }

    if (history_color.length < 2) {

        if (div.classList.contains('red')) {
            div.style.backgroundColor = 'red';
            history_color.push('red');
        }
        if (div.classList.contains('blue')) {
            div.style.backgroundColor = 'blue';
            history_color.push('blue');
        }
    }
}


function boxing1(div) {
    if (div.style.backgroundColor === 'red') {
        div.style.backgroundColor = 'blue';
    } else {
        div.style.backgroundColor = 'red';
    }
}

