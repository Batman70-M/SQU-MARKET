//we need to get cards to check them
const cards = document.querySelectorAll(".card");
//set variables
let matchedCard = 0;
let firstCard, secoundCard;
let disableDeck = false;
//Function for flipping card when the click on them
function flip({target: clickedCard}) {
    if(firstCard !== clickedCard && !disableDeck) {
        clickedCard.classList.add("flip");
        if(!firstCard) {return firstCard = clickedCard;}
        secoundCard = clickedCard;
        disableDeck = true;
        //get images
        let firstCardImg = firstCard.querySelector(".back-view img").src,
        secoundCardImg = secoundCard.querySelector(".back-view img").src;
        //check if both images matched or not
        match(firstCardImg, secoundCardImg);
    }
}
//Cheak if two selected cards matched or not
function match(image1, image2) {
    if(image1 === image2) {
        matchedCard++;
        /*when user compelate the game, its gonna reset all cards(randomly each time he/she complete the game,
        so the position of card gonna change each time the game comleted) by calling shuffled()
        */
        if(matchedCard == 8) {setTimeout(() => { return shuffled(); }, 1000);}
        firstCard.removeEventListener("click", flip);
        secoundCard.removeEventListener("click", flip);
        firstCard = secoundCard = "";
        return disableDeck = false;
    }
    //when both card matched
    setTimeout(() => { firstCard.classList.add("shake");secoundCard.classList.add("shake");}, 400);
    //when both card not matched
    setTimeout(() => {firstCard.classList.remove("shake", "flip");
                      secoundCard.classList.remove("shake", "flip");
                      firstCard = secoundCard = "";
                      disableDeck = false;}, 1200);
}
//For each round, this code gonna change position for cards randomlly
function shuffled() {
    //To reset the game, wee need to reset two variable first
    matchedCard = 0;
    disableDeck = false;
    //set cards empty again to randomized the pictures again
    firstCard = secoundCard = "";
    //make array list from 1 to 8 related to name of images: img-Number(1,8)
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    //Sort array randomlly
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);
    //Set iamges randomlly
    cards.forEach((card, i) => {card.classList.remove("flip");
                                let imgTag = card.querySelector(".back-view img");
                                imgTag.src = `images/img-${arr[i]}.png`;
                                card.addEventListener("click", flip);});
}

/* 
When user open fun page, this function gonna put images on each card randomly so he or she can try
to match them, it is just for start the game.
*/
shuffled();  
    
