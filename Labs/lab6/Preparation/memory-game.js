
//We play with 6 image pairs
const numberImg = 6
const numberOfImagesFromSite = 1084;

//Total tries so far
let totalTries = 0
//How many pairs have been revealed so far
let revealedPairs = 0


// takes the id (out of 1084) images from the site, and after shuffling them returns 6 of them.
let imagesInUse = shuffleArray(function () {
    let imagesFromSite = new Array();
    for (let id = 0; id <= numberOfImagesFromSite; id++) {
        imagesFromSite.push(id)
    };
    return imagesFromSite;
}(), 0, 6);

// Creating the deck , with the pair of the images in use 
let cards = new Array();
for (let i = 0; i < numberImg; i++) {

    cards.push(imagesInUse[i]);
    cards.push(imagesInUse[i]);

    // cards.push(picsumIds[i]);
}


cards = shuffleArray(cards);

function loadImages() {
    const promises = new Array()

    // ADD CODE HERE
    for (let i = 0; i < numberImg; i++) {
        let p = new Promise(resolve => {
            const image = new Image(300, 200);
            //https://picsum.photos/id/321/300/200
            image.addEventListener("load", function () { resolve(image); });
            image.src = `https://picsum.photos/id/${String(imagesInUse[i])}/300/200`;
        })
        promises.push(p);
    }

    return promises
}

// explain loadImages() and Promise.all
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise






Promise.all(loadImages()).then((messages) => {
    console.log(messages);
    let imagesPanel = document.getElementsByClassName('images-panel')[0];
    for (i in cards) {

        // The cloneNode() method of the Node interface returns a duplicate of the node on which this method was called. Its parameter controls if the subtree contained in a node is also cloned or not.

        // Cloning a node copies all of its attributes and their values, including intrinsic (inline) listeners. It does not copy event listeners added using addEventListener() or those assigned to element properties (e.g., node.onclick = someFunction). Additionally, for a <canvas> element, the painted image is not copied.

        let cloneImg = messages[imagesInUse.indexOf(cards[i])].cloneNode(true);
        cloneImg.id = "image-" + i;

        // The z-index property specifies the stack order of an element.

        // An element with greater stack order is always in front of an element with a lower stack order.

        // Note: z-index only works on positioned elements (position: absolute, position: relative, position: fixed, or position: sticky) and flex items (elements that are direct children of display:flex elements).


        cloneImg.zIndex = 1;
        imagesPanel.append(cloneImg);

        
        let cover = document.createElement('div');
        cover.setAttribute('data-image-id', 'data-' + cards[i]);
        cover.style.zIndex = 2;
        // cover.addEventListener('click', clickListener);
        cover.addEventListener('click', (event)=>{playCard(event.target);});

        document.querySelector('.covers-panel').appendChild(cover);
    }
}
 
)

// //will be called when the user clicks on a cover
// function clickListener(event) {
//     playCard(event.target)
// }

//If no card has been uncovered this is undefined
//otherwise it contains the cover that has been previously clicked
let previouslySelectedCover

// contains the core game logic
//selectedCover is the cover that has just been clicked
function playCard(selectedCover) {
    if (previouslySelectedCover == undefined) {
        previouslySelectedCover = selectedCover
        selectedCover.style.opacity = 0;
        totalTries++;
    }
    else if (previouslySelectedCover != undefined) {
        console.log(selectedCover.getAttribute('data-image-id'));
        selectedCover.style.opacity = 0;

        if (selectedCover == previouslySelectedCover) {
            console.log("same place");
        }
        else if (selectedCover.getAttribute('data-image-id') === previouslySelectedCover.getAttribute('data-image-id')) {
            console.log("same image");
            selectedCover.style.zIndex = -1;
            previouslySelectedCover.style.zIndex = -1;
            revealedPairs += 1;
            previouslySelectedCover = undefined;
        }
        else if (selectedCover.getAttribute('data-image-id') !== previouslySelectedCover.getAttribute('data-image-id')) {
            console.log("nope");
            setTimeout(function () {
                selectedCover.style.opacity = "100%";
                previouslySelectedCover.style.opacity = "100%";
                previouslySelectedCover = undefined;
            }, 300);
        }
    }


    if (revealedPairs == numberImg) {
        let gameEndPanel = document.querySelector('.game-end-panel')
        gameEndPanel.innerHTML = "<p>Χρειάστηκαν συνολικά " + totalTries + " προσπάθειες</p>"
        // gameEndPanel.innerHTML = "<p>It took you " + totalTries + " to finish the game</p>"
        gameEndPanel.style.zIndex = 3
        gameEndPanel.style.opacity = 1
        gameEndPanel.addEventListener('click', restart);
    }
}


function shuffleArray(array, start = 0, end = array.length) {
    for (let i = array.length - 1; i > 0; i--) {
        let rand = Math.floor(Math.random() * (i + 1));
        [array[i], array[rand]] = [array[rand], array[i]]
    }
    return array.slice(start, end);
}
