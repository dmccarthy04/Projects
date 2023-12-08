function animation() {
    let id = null;
    let elem = document.getElementById("bustImg");
    let pos = 0;
    clearInterval(id);
    let  direction = 'D';
    id = setInterval( () => {
        if(direction == 'D') {
            pos++;
        } else {
            pos--;
        }
        if (pos >= 10) {
            direction = "U";
        }
        if (pos < 0) {
            direction = 'D';
        }
        elem.style.top = pos + 'px';
        }, 10)
}
let deck = {
    cards: [
        {'img': '2C.png', 'value': 2, suit: 'clubs', 'dealt': false},
        {'img': '2H.png', 'value': 2, suit: 'hearts', 'dealt': false},
        {'img': '2D.png', 'value': 2, suit: 'diamonds', 'dealt': false},
        {'img': '2S.png', 'value': 2, suit: 'spades', 'dealt': false},

        {'img': '3C.png', 'value': 3, suit: 'clubs', 'dealt': false},
        {'img': '3H.png', 'value': 3, suit: 'hearts', 'dealt': false},
        {'img': '3D.png', 'value': 3, suit: 'diamonds', 'dealt': false},
        {'img': '3S.png', 'value': 3, suit: 'spades', 'dealt': false},

        {'img': '4S.png', 'value': 4, suit: 'spades', 'dealt': false},
        {'img': '4H.png', 'value': 4, suit: 'hearts', 'dealt': false},
        {'img': '4D.png', 'value': 4, suit: 'diamonds', 'dealt': false},
        {'img': '4C.png', 'value': 4, suit: 'clubs', 'dealt': false},

        {'img': '5S.png', 'value': 5, suit: 'spades', 'dealt': false},
        {'img': '5H.png', 'value': 5, suit: 'hearts', 'dealt': false},
        {'img': '5D.png', 'value': 5, suit: 'diamonds', 'dealt': false},
        {'img': '5C.png', 'value': 5, suit: 'clubs', 'dealt': false},

        {'img': '6S.png', 'value': 6, suit: 'spades', 'dealt': false},
        {'img': '6H.png', 'value': 6, suit: 'hearts', 'dealt': false},
        {'img': '6D.png', 'value': 6, suit: 'diamonds', 'dealt': false},
        {'img': '6C.png', 'value': 6, suit: 'clubs', 'dealt': false},

        {'img': '7S.png', 'value': 7, suit: 'spades', 'dealt': false},
        {'img': '7H.png', 'value': 7, suit: 'hearts', 'dealt': false},
        {'img': '7D.png', 'value': 7, suit: 'diamonds', 'dealt': false},
        {'img': '7C.png', 'value': 7, suit: 'clubs', 'dealt': false},

        {'img': '8S.png', 'value': 8, suit: 'spades', 'dealt': false},
        {'img': '8H.png', 'value': 8, suit: 'hearts', 'dealt': false},
        {'img': '8D.png', 'value': 8, suit: 'diamonds', 'dealt': false},
        {'img': '8C.png', 'value': 8, suit: 'clubs', 'dealt': false},

        {'img': '9S.png', 'value': 9, suit: 'spades', 'dealt': false},
        {'img': '9H.png', 'value': 9, suit: 'hearts', 'dealt': false},
        {'img': '9D.png', 'value': 9, suit: 'diamonds', 'dealt': false},
        {'img': '9C.png', 'value': 9, suit: 'clubs', 'dealt': false},

        {'img': '10S.png', 'value': 10, suit: 'spades', 'dealt': false},
        {'img': '10H.png', 'value': 10, suit: 'hearts', 'dealt': false},
        {'img': '10D.png', 'value': 10, suit: 'diamonds', 'dealt': false},
        {'img': '10C.png', 'value': 10, suit: 'clubs', 'dealt': false},

        {'img': 'JS.png', 'value': 10, suit: 'spades', 'dealt': false, 'jack' : true},
        {'img': 'JH.png', 'value': 10, suit: 'hearts', 'dealt': false, 'jack' : true},
        {'img': 'JD.png', 'value': 10, suit: 'diamonds', 'dealt': false, 'jack' : true},
        {'img': 'JC.png', 'value': 10, suit: 'clubs', 'dealt': false, 'jack' : true},

        {'img': 'QS.png', 'value': 10, suit: 'spades', 'dealt': false},
        {'img': 'QH.png', 'value': 10, suit: 'hearts', 'dealt': false},
        {'img': 'QD.png', 'value': 10, suit: 'diamonds', 'dealt': false},
        {'img': 'QC.png', 'value': 10, suit: 'clubs', 'dealt': false},

        {'img': 'KS.png', 'value': 10, suit: 'spades', 'dealt': false},
        {'img': 'KH.png', 'value': 10, suit: 'hearts', 'dealt': false},
        {'img': 'KD.png', 'value': 10, suit: 'diamonds', 'dealt': false},
        {'img': 'KC.png', 'value': 10, suit: 'clubs', 'dealt': false},

        {'img': 'AS.png', 'value': [11, 1], suit: 'spades', 'dealt': false, 'flip' : false},
        {'img': 'AH.png', 'value': [11, 1], suit: 'hearts', 'dealt': false, 'flip' : false},
        {'img': 'AD.png', 'value': [11, 1], suit: 'diamonds', 'dealt': false, 'flip' : false},
        {'img': 'AC.png', 'value': [11, 1], suit: 'clubs', 'dealt': false, 'flip' : false}
    ],
    dealtCards : 0,
    getCard : function( hand ){
        let validCard = false;
        let card = null
        while ( !validCard ){
            let rNum = Math.floor( Math.random() * deck.cards.length );
            card = deck.cards[rNum];
            if ( !card.dealt ){
                card.dealt = true;
                this.dealtCards += 1;
                return card;
            } else if ( this.dealtCards == deck.cards.length ){
                alert( `Reshuffling` );
                this.dealtCards = 0;
                for( let i=0; i<this.cards.length; i++ ){
                    this.cards[i].dealt = false;
                    if ( this.inHand( Dealer.hand, this.cards[i])){ //ToDO: Account for dealer hand
                        this.cards[i].dealt = true;
                        this.dealtCards += 1;
                    }
                    if ( this.inHand( User.hand, this.cards[i])){ //ToDO: Account for dealer hand
                        this.cards[i].dealt = true;
                        this.dealtCards += 1;
                    }
                }
                alert( `Done -> dealtCards=${this.dealtCards} `);
            }
        }
        return card;
    },
    inHand : function( hand, card ) {
        for( let i=0; i<hand.length; i++ ){
            if ( hand[i].img == card.img ){
                return true;
            }
        }
        return false;
    }
};
let UI = {
    setBet : function( betId, betDisId, Player){
        let errorMsg = "";
        let gotError = false;
        Player.bet = document.getElementById( betId ).value;
        if ( Player.bet <= 0 || isNaN(Player.bet / 2) || Player.bet == undefined ){
            errorMsg = `<span style='color:red'> Illegal Bet: ${Player.bet} </span>`;
            gotError = true;
        }
        else {
            document.getElementById("secondArea").innerHTML = `Bet: ${Player.bet} - Hit or Stay to continue`;
            document.getElementById("secondArea").style["align-self"] = "end";
            document.getElementById("firstArea").style.display = "none";
            document.querySelector(".Left").style['grid-template-rows'] = "0.2fr 0.2fr 0.5fr"
            Player.balance -= Player.bet;
            this.updateUserTable(Player);
        }
        document.getElementById( betDisId ).innerHTML = errorMsg;
        return gotError;
    },
    displayHand : function ( hand, id ) {
        let resObj = document.getElementById( id  );
        let oStr = "";
        if (id == "dealerCards") {
            oStr = `<h2> Dealer Cards</h2>`
            let cImg = hand[1].img;
            oStr += `<img class='cardImg' id="hidden" src='imgs/purple_back.png'  alt='Card' />`;
            oStr += `<img class='cardImg' src='imgs/${cImg}'  alt='Card' />`;
        }
        else {
            oStr = ` <h2> User Cards</h2>`
            for ( let i=0; i<hand.length; i++ ){
                let cImg = hand[i].img;
                oStr += `<img class='cardImg' src='imgs/${cImg}'  alt='Card' />`;
            }
        }
        resObj.innerHTML += oStr;
    },
    updateGameTable : function (House, Player){
        let dealerVal = 0;
        if (House.handValue > 0) {
            if(House.hand[1]['value'][0] == 11) {
                dealerVal = 11;
            }
            else {
                dealerVal = House.hand[1]['value'];
            }
            if(document.getElementById('hidden').getAttribute('src')!= 'imgs/purple_back.png') {
                dealerVal = House.handValue;
            }
        }
        if (document.getElementById("secondArea").innerText == "")
        {
            document.getElementById("secondArea").innerHTML = "Enter bet to Start";
        }
        let oStr = "";
        oStr += `<table id="handStatus" border=1>`;
        oStr += `<tr><th>Player</th><th>Hand Pts</th><th>Num Hits</th>`;
        oStr += `<tr><th>Dealer</th><td> ${dealerVal} </td><td> ${House.hits} </td>`;
        oStr += `<tr><th>User</th><td> ${Player.handValue} </td><td> ${Player.hits} </td>`;
        oStr += `</table>`;
        document.getElementById("table").innerHTML = oStr;
    },
    updateUserTable : function( Player ) {
        let oStr = `<p> Overall Status</p>`;
        oStr += `<table id="overall" border="1">`;
        oStr += `<tr><th> Balance </th><th> Bet </th><th> Games </th><th> Wins </th><th> Loss </th>`;
        oStr += `<tr><td> ${Player.balance} </td><td> ${Player.bet} </td><td> ${Player.attempts} </td><td> ${Player.totalWins} </td><td> ${Player.attempts - Player.totalWins} </td>`;
        oStr += `</table>`;
        document.getElementById("thirdArea").innerHTML = oStr;
    },
    userTurn : function( Player ) {
        document.getElementById("dealerButtons").innerHTML = "";
        let oStr = "";
        oStr += `<button type="button" id="hit" onClick="User.userHit()"> Hit </button>`;
        oStr += `<button type="button" id="stay" onClick="User.userStay()"> Stay </button>`;
        document.getElementById("userButtons").innerHTML = oStr;
        if(Player.handValue == 21) {
            document.getElementById('stay').click();
        }
    },
    dealerTurn : function( House ) {
        document.getElementById("userButtons").innerHTML = "";
        let oStr = "";
        oStr += `<button type="button" id="dealerPlay" onClick="Dealer.play()"> Dealer Play </button>`;
        document.getElementById("dealerButtons").innerHTML = oStr;
    },
}
let User = {
    hand: [],
    handValue: 0,
    totalWins: 0,
    bet: 0,
    balance: 1000,
    attempts: 0,
    hits: 0,
    stay: false,
    userHit : function() {
        let oStr = "";
        let i = this.hand.length;
        this.hand.push(deck.getCard(this.hand));
        let cImg = this.hand[i].img;
        oStr += `<img class='cardImg' src='imgs/${cImg}'  alt='Card' />`;
        if(this.hand[i]['value'][0] == 11 && this.handValue + 11 <= 21) {
            this.handValue += this.hand[i]['value'][0];
        }
        else if(this.hand[i]['value'][0] == 11 && this.handValue + 11 > 21) {
            this.handValue += this.hand[i]['value'][1];
            this.hand[i]['flip'] = true;
        }
        else if (this.handValue + this.hand[i]['value'] > 21 ) {
            this.handValue += this.hand[i]['value'];
            for (i=0; i<this.hand.length; i++)
            {
                if(this.hand[i]['value'][0] == 11 && this.hand[i]['flip'] == false && this.handValue > 21) {
                    this.handValue -= 10;
                    this.hand[i]['flip'] = true;
                }
            }
        }
        else {
            this.handValue += this.hand[i]['value'];
        }
        document.getElementById("userCards").innerHTML += oStr;
        if (this.handValue == 21) {
            document.getElementById('stay').click();
        }
    },
    userStay : function() {
        this.stay = true;
        document.getElementById("secondArea").innerHTML = "Press Dealer Play to Continue"
    },
}
let Dealer = {
    hand: [],
    handValue: 0,
    hits: 0,
    play : function() {
        if(this.hits == 0) {
            this.revealCard();
        }
        else {
            let oStr = "";
            let i = this.hand.length;
            this.hand.push(deck.getCard(this.hand));
            let cImg = this.hand[i].img;
            oStr += `<img class='cardImg' src='imgs/${cImg}'  alt='Card' />`;
            if (this.hand[i]['value'][0] == 11) {
                this.handValue += this.hand[i]['value'][0];
            }
            else {
                this.handValue += this.hand[i]['value'];
            }
            document.getElementById("dealerCards").innerHTML += oStr;
        }
    },
    revealCard : function() {
        document.getElementById("hidden").setAttribute("src", `imgs/${Dealer.hand[0]['img']}`)
    },
}
let CardGame = {
    PayOuts :  new Map( [
        ['Default', 2],
        ['BlackJack', 3],
    ]),
    NumCards: 2,
    setHand : function( Player ) {
        let hand = [];
        for( let i=0; i<this.NumCards; i++) {
            hand.push(deck.getCard(hand));
            if (hand[i]['value'][0] == 11 && Player.handValue == 11) {
                Player.handValue += hand[i]['value'][1];
            } else if (hand[i]['value'][0] == 11) {
                Player.handValue += hand[i]['value'][0];
            } else {
                Player.handValue += hand[i]['value'];
            }
        }
            return hand;
    },
    checkDealerWin : function( House, Player ) {
        let dealerWin = false;
        if (House.handValue == 21 && House.hits == 0) {
            for (i=0; i<House.hand.length; i++) {
                if (House.hand[i]['jack'] == true) {
                    dealerWin = true;
                    Player.attempts += 1;
                    this.playAgain();
                    let oStr = "";
                    oStr += `<img class='resImg' id="winImg" src='imgs/winner.png'  alt='winner' />`;
                    oStr += `<img class='resImg' id="blackJack" src='imgs/blackJack.png'  alt='winner' />`;
                    document.getElementById("dealerButtons").innerHTML = oStr;
                    oStr = `<img class='resImg' id="loseImg" src='imgs/looser.png'  alt='loser' />`
                    document.getElementById("userButtons").innerHTML = oStr;
                    document.getElementById("secondArea").innerHTML = "Dealer BlackJack, you LOSE!";
                }
            }
        }
        if ((House.handValue >= Player.handValue) && Player.stay == true && House.handValue >= 17) {
            dealerWin = true;
            Player.attempts += 1;
            this.playAgain();
            let oStr = "";
            oStr += `<img class='resImg' id="winImg" src='imgs/winner.png'  alt='winner' />`;
            document.getElementById("dealerButtons").innerHTML = oStr;
            oStr = `<img class='resImg' id="loseImg" src='imgs/looser.png'  alt='loser' />`
            document.getElementById("userButtons").innerHTML = oStr;
            document.getElementById("secondArea").innerHTML = "Dealer's hand wins!";
        }
        return dealerWin;
    },
    checkUserWin : function( Player ) {
        let userWin = false;
        if (Player.handValue == 21 && Player.hits == 0)
        {
            for (i=0; i<Player.hand.length; i++) {
                if (Player.hand[i]['jack'] == true) {
                    userWin = true;
                    Player.totalWins += 1;
                    Player.attempts += 1;
                    this.playAgain();
                    let oStr = "";
                    oStr += `<img class='resImg' id="winImg" src='imgs/winner.png'  alt='winner' />`;
                    oStr += `<img class='resImg' id="blackJack" src='imgs/blackJack.png'  alt='winner' />`;
                    document.getElementById("userButtons").innerHTML = oStr;
                    oStr = `<img class='resImg' id="loseImg" src='imgs/looser.png'  alt='loser' />`
                    document.getElementById("dealerButtons").innerHTML = oStr;
                    Player.balance += this.PayOuts.get('BlackJack') * Player.bet
                    document.getElementById("secondArea").innerHTML = "BlackJack! You WIN!";
                }
            }
        }
        return userWin;
    },
    checkBust : function( House, Player) {
        let bust = false;
        if(Player.handValue > 21) {
            bust = true;
            Player.attempts += 1;
            this.playAgain();
            let oStr = "";
            oStr += `<img class='resImg' id="winImg" src='imgs/winner.png'  alt='winner' />`;
            document.getElementById("dealerButtons").innerHTML = oStr;
            oStr = `<img class='resImg' id="bustImg" src='imgs/busted.png'  alt='loser' />`
            document.getElementById("userButtons").innerHTML = oStr;
            document.getElementById("secondArea").innerHTML = "You take a hit... and BUST!";
            animation();
        }
        if(House.handValue > 21) {
            bust = true;
            Player.attempts += 1;
            Player.totalWins += 1;
            this.playAgain();
            let oStr = "";
            oStr += `<img class='resImg' id="winImg" src='imgs/winner.png'  alt='winner' />`;
            document.getElementById("userButtons").innerHTML = oStr;
            oStr = `<img class='resImg' id="bustImg" src='imgs/busted.png'  alt='loser' />`
            document.getElementById("dealerButtons").innerHTML = oStr;
            Player.balance += this.PayOuts.get('Default') * Player.bet;
            document.getElementById("secondArea").innerHTML = "Dealer takes a hit... and BUSTS!";
            animation();
        }
        if(House.handValue >= 17 && House.handValue < Player.handValue && Player.handValue <= 21 && Player.stay == true) {
            bust = true;
            Player.attempts += 1;
            Player.totalWins += 1;
            this.playAgain();
            let oStr = "";
            oStr += `<img class='resImg' id="winImg" src='imgs/winner.png'  alt='winner' />`;
            document.getElementById("userButtons").innerHTML = oStr;
            oStr = `<img class='resImg' id="loseImg" src='imgs/looser.png'  alt='loser' />`
            document.getElementById("dealerButtons").innerHTML = oStr;
            Player.balance += this.PayOuts.get('Default') * Player.bet;
            document.getElementById("secondArea").innerHTML = "Dealer stays! You WIN!";
        }
        return bust;
    },
    resetHands : function( House, Player ) {
        for( let i=0; i<House.hand.length; i++) {
            House.hand.pop();
        }
        for( let i=0; i<Player.hand.length; i++) {
            Player.hand.pop();
        }
        for(let i = 48; i <deck.cards.length; i++)
        {
            deck.cards[i]['flip'] = false;
        }
        Player.hits = 0;
        House.hits = 0
        Player.handValue = 0;
        House.handValue = 0;
        Player.stay = false;
        let oStr = "";
        document.getElementById("dealerCards").innerHTML = oStr;
        document.getElementById("userCards").innerHTML = oStr;
    },
    playAgain : function () {
        document.getElementById("firstArea").style.display = "block";
        document.querySelector(".Left").style['grid-template-rows'] = "1.5fr 0fr 1fr 2fr"
    },
    gameOver : function ( Player ) {
        if(Player.balance <= 0) {
            alert("gameOver")
        }
    }
}
function startGame() {
    let gotError = UI.setBet("uBet", "betMsg", User);
    if (!gotError) {
        CardGame.resetHands(Dealer, User);
        Dealer.hand = CardGame.setHand(Dealer);
        User.hand = CardGame.setHand(User);
        UI.displayHand(Dealer.hand, "dealerCards");
        UI.displayHand(User.hand, "userCards");
        UI.updateGameTable(Dealer, User);
        if (!CardGame.checkDealerWin(Dealer, User) && !CardGame.checkUserWin(User)) {
            UI.userTurn(User);
            document.querySelector("#hit").addEventListener("click", function () {
                User.hits += 1;
                UI.updateGameTable(Dealer, User);
                CardGame.checkUserWin(User);
                CardGame.checkBust(Dealer, User);
                UI.updateUserTable(User);
            })
            document.querySelector("#stay").addEventListener("click", function () {
                UI.dealerTurn(Dealer);
                document.querySelector("#dealerPlay").addEventListener("click", function () {
                    Dealer.hits += 1;
                    UI.updateGameTable(Dealer, User);
                    if (!CardGame.checkBust(Dealer, User)) {
                        CardGame.checkDealerWin(Dealer, User);
                        UI.updateUserTable(User);
                    }
                    UI.updateUserTable(User)
                })
            })
        } else {
            Dealer.revealCard();
            UI.updateGameTable(Dealer, User);
            UI.updateUserTable(User);
        }
    }
}