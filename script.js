/* ================================
   CARD NAVIGATION
================================ */

function nextCard() {

    const card1 = document.getElementById("card-1");
    const card2 = document.getElementById("card-2");

    card1.classList.add("card-exit");

    setTimeout(() => {

        card1.classList.add("hidden");
        card1.classList.remove("card-exit");

        card2.classList.remove("hidden");
        card2.classList.add("card-enter");

        updateProgress(2);

    }, 450);
}

/* ========================================
   PROGRESS BAR
======================================== */

function updateProgress(cardNumber) {

    const progressItems =
        document.querySelectorAll(
            "#progress span"
        );


    progressItems.forEach(
        (item, index) => {

            item.classList.remove(
                "active"
            );

            if (index < cardNumber) {

                item.classList.add(
                    "active"
                );

            }

        }
    );

}


/* ================================
   CARD 2 → CARD 3
================================ */

function goToNextCard() {

    const card2 = document.getElementById("card-2");
    const card3 = document.getElementById("card-3");

    if (!card2 || !card3) {
        console.error("Card 2 or Card 3 was not found.");
        return;
    }

    card2.classList.add("card-exit");

    setTimeout(() => {

        card2.classList.add("hidden");
        card2.classList.remove("card-exit");

        card3.classList.remove("hidden");
        card3.classList.add("card-enter");

        updateProgress(3);

    }, 450);

}


/* ================================
   NO BUTTON — IMPOSSIBLE MODE 😈
================================ */

const noButton = document.getElementById("noButton");


// Desktop
noButton.addEventListener("mouseenter", moveNoButton);


// Mobile / Touch
noButton.addEventListener("touchstart", function (event) {

    event.preventDefault();

    moveNoButton();

}, {
    passive: false
});


function moveNoButton() {

    const card = document.getElementById("card-2");

    const cardRect = card.getBoundingClientRect();
    const buttonRect = noButton.getBoundingClientRect();

    /*
        Keep the button completely inside
        the Card 2 area.
    */

    const padding = 25;

    const maxX =
        cardRect.width -
        buttonRect.width -
        padding * 2;

    const maxY =
        cardRect.height -
        buttonRect.height -
        padding * 2;


    /*
        Generate completely random
        X and Y coordinates.
    */

    const randomX =
        padding +
        Math.random() * maxX;

    const randomY =
        padding +
        Math.random() * maxY;


    /*
        Make the button independent
        from the normal button layout.
    */

    noButton.style.position = "fixed";

    noButton.style.left =
        `${cardRect.left + randomX}px`;

    noButton.style.top =
        `${cardRect.top + randomY}px`;


    /*
        Little random rotation
        makes it feel more playful.
    */

    const rotation =
        Math.random() * 30 - 15;

    noButton.style.transform =
        `rotate(${rotation}deg)`;
}

/* ================================
   CARD 3 → CARD 4
================================ */

function goToCard4() {

    const card3 = document.getElementById("card-3");
    const card4 = document.getElementById("card-4");

    if (!card3 || !card4) {
        console.error("Card 3 or Card 4 not found.");
        return;
    }

    card3.classList.add("card-exit");

    setTimeout(() => {

        card3.classList.add("hidden");
        card3.classList.remove("card-exit");

        card4.classList.remove("hidden");
        card4.classList.add("card-enter");

        updateProgress(4);

    }, 450);

}

/* ================================
   CARD 3 — NO BUTTON 😈
================================ */

const noButton3 = document.getElementById("noButton3");


// Desktop
noButton3.addEventListener("mouseenter", moveNoButton3);


// Mobile / Touch
noButton3.addEventListener("touchstart", function (event) {

    event.preventDefault();

    moveNoButton3();

}, {
    passive: false
});


function moveNoButton3() {

    const card = document.getElementById("card-3");

    const cardRect =
        card.getBoundingClientRect();

    const buttonRect =
        noButton3.getBoundingClientRect();


    /*
        Keep button inside Card 3
    */

    const padding = 25;


    const maxX =
        cardRect.width -
        buttonRect.width -
        padding * 2;


    const maxY =
        cardRect.height -
        buttonRect.height -
        padding * 2;


    /*
        Random X position
    */

    const randomX =
        padding +
        Math.random() * maxX;


    /*
        Random Y position
    */

    const randomY =
        padding +
        Math.random() * maxY;


    /*
        Move button
    */

    noButton3.style.position = "fixed";


    noButton3.style.left =
        `${cardRect.left + randomX}px`;


    noButton3.style.top =
        `${cardRect.top + randomY}px`;


    /*
        Small random rotation
    */

    const rotation =
        Math.random() * 30 - 15;


    noButton3.style.transform =
        `rotate(${rotation}deg)`;
}

/* ================================
   CARD 4 — NO BUTTON 😈
================================ */

const noButton4 = document.getElementById("noButton4");


// Desktop
noButton4.addEventListener("mouseenter", moveNoButton4);


// Mobile / Touch
noButton4.addEventListener("touchstart", function (event) {

    event.preventDefault();

    moveNoButton4();

}, {
    passive: false
});


function moveNoButton4() {

    const card = document.getElementById("card-4");

    const cardRect =
        card.getBoundingClientRect();

    const buttonRect =
        noButton4.getBoundingClientRect();


    const padding = 25;


    const maxX =
        cardRect.width -
        buttonRect.width -
        padding * 2;


    const maxY =
        cardRect.height -
        buttonRect.height -
        padding * 2;


    const randomX =
        padding +
        Math.random() * maxX;


    const randomY =
        padding +
        Math.random() * maxY;


    noButton4.style.position = "fixed";


    noButton4.style.left =
        `${cardRect.left + randomX}px`;


    noButton4.style.top =
        `${cardRect.top + randomY}px`;


    const rotation =
        Math.random() * 30 - 15;


    noButton4.style.transform =
        `rotate(${rotation}deg)`;
}

function goToCard5() {

    const card4 = document.getElementById("card-4");
    const card5 = document.getElementById("card-5");

    card4.classList.add("card-exit");

    setTimeout(() => {

        card4.classList.add("hidden");
        card4.classList.remove("card-exit");

        card5.classList.remove("hidden");
        card5.classList.add("card-enter");

    }, 450);

}

/* ================================
   CARD 4 → CARD 5
================================ */

function goToCard5() {

    const card4 = document.getElementById("card-4");
    const card5 = document.getElementById("card-5");

    if (!card4 || !card5) {
        console.error("Card 4 or Card 5 not found.");
        return;
    }

    card4.classList.add("card-exit");

    setTimeout(() => {

        card4.classList.add("hidden");
        card4.classList.remove("card-exit");

        card5.classList.remove("hidden");
        card5.classList.add("card-enter");

        updateProgress(5);

    }, 450);

}

/* ================================
   CARD 5 → CARD 6
================================ */

function goToCard6() {

    const card5 = document.getElementById("card-5");
    const card6 = document.getElementById("card-6");

    if (!card5 || !card6) {
        console.error("Card 5 or Card 6 not found.");
        return;
    }

    card5.classList.add("card-exit");

    setTimeout(() => {

        card5.classList.add("hidden");
        card5.classList.remove("card-exit");

        card6.classList.remove("hidden");
        card6.classList.add("card-enter");

        updateProgress(6);

    }, 450);

}

/* ================================
   CARD 6 → CARD 7
================================ */

function goToCard7() {

    const card6 = document.getElementById("card-6");
    const card7 = document.getElementById("card-7");

    if (!card6 || !card7) {
        console.error("Card 6 or Card 7 not found.");
        return;
    }

    card6.classList.add("card-exit");

    setTimeout(() => {

        card6.classList.add("hidden");
        card6.classList.remove("card-exit");

        card7.classList.remove("hidden");
        card7.classList.add("card-enter");

        updateProgress(7);

    }, 450);

}

/* ================================
   CARD 6 — NO BUTTON 😈
================================ */

const noButton6 =
    document.getElementById("noButton6");


noButton6.addEventListener(
    "mouseenter",
    moveNoButton6
);


noButton6.addEventListener(
    "touchstart",
    function (event) {

        event.preventDefault();

        moveNoButton6();

    },
    {
        passive: false
    }
);


function moveNoButton6() {

    const card =
        document.getElementById("card-6");

    const cardRect =
        card.getBoundingClientRect();

    const buttonRect =
        noButton6.getBoundingClientRect();

    const padding = 25;

    const maxX =
        cardRect.width -
        buttonRect.width -
        padding * 2;

    const maxY =
        cardRect.height -
        buttonRect.height -
        padding * 2;

    const randomX =
        padding +
        Math.random() * maxX;

    const randomY =
        padding +
        Math.random() * maxY;

    noButton6.style.position = "fixed";

    noButton6.style.left =
        `${cardRect.left + randomX}px`;

    noButton6.style.top =
        `${cardRect.top + randomY}px`;

    const rotation =
        Math.random() * 30 - 15;

    noButton6.style.transform =
        `rotate(${rotation}deg)`;
}

/* ================================
   CARD 7 → CARD 8
================================ */

function goToCard8() {

    const card7 = document.getElementById("card-7");
    const card8 = document.getElementById("card-8");

    if (!card7 || !card8) {
        console.error("Card 7 or Card 8 not found.");
        return;
    }

    card7.classList.add("card-exit");

    setTimeout(() => {

        card7.classList.add("hidden");
        card7.classList.remove("card-exit");

        card8.classList.remove("hidden");
        card8.classList.add("card-enter");

        updateProgress(8);

    }, 450);

}

/* ================================
   CARD 7 — NO BUTTON 😈
================================ */

const noButton7 =
    document.getElementById("noButton7");


noButton7.addEventListener(
    "mouseenter",
    moveNoButton7
);


noButton7.addEventListener(
    "touchstart",
    function (event) {

        event.preventDefault();

        moveNoButton7();

    },
    {
        passive: false
    }
);


function moveNoButton7() {

    const card =
        document.getElementById("card-7");

    const cardRect =
        card.getBoundingClientRect();

    const buttonRect =
        noButton7.getBoundingClientRect();

    const padding = 25;

    const maxX =
        cardRect.width -
        buttonRect.width -
        padding * 2;

    const maxY =
        cardRect.height -
        buttonRect.height -
        padding * 2;

    const randomX =
        padding +
        Math.random() * maxX;

    const randomY =
        padding +
        Math.random() * maxY;

    noButton7.style.position = "fixed";

    noButton7.style.left =
        `${cardRect.left + randomX}px`;

    noButton7.style.top =
        `${cardRect.top + randomY}px`;

    const rotation =
        Math.random() * 30 - 15;

    noButton7.style.transform =
        `rotate(${rotation}deg)`;
}

/* ================================
   CARD 8 → CARD 9
================================ */

function goToCard9() {

    const card8 = document.getElementById("card-8");
    const card9 = document.getElementById("card-9");

    if (!card8 || !card9) {
        console.error("Card 8 or Card 9 not found.");
        return;
    }

    card8.classList.add("card-exit");

    setTimeout(() => {

        card8.classList.add("hidden");
        card8.classList.remove("card-exit");

        card9.classList.remove("hidden");
        card9.classList.add("card-enter");

        updateProgress(9);

    }, 450);

}

/* ================================
   CARD 8 — NO BUTTON 😈
================================ */

const noButton8 =
    document.getElementById("noButton8");


noButton8.addEventListener(
    "mouseenter",
    moveNoButton8
);


noButton8.addEventListener(
    "touchstart",
    function (event) {

        event.preventDefault();

        moveNoButton8();

    },
    {
        passive: false
    }
);


function moveNoButton8() {

    const card =
        document.getElementById("card-8");

    const cardRect =
        card.getBoundingClientRect();

    const buttonRect =
        noButton8.getBoundingClientRect();


    const padding = 25;


    const maxX =
        cardRect.width -
        buttonRect.width -
        padding * 2;


    const maxY =
        cardRect.height -
        buttonRect.height -
        padding * 2;


    const randomX =
        padding +
        Math.random() * maxX;


    const randomY =
        padding +
        Math.random() * maxY;


    noButton8.style.position = "fixed";


    noButton8.style.left =
        `${cardRect.left + randomX}px`;


    noButton8.style.top =
        `${cardRect.top + randomY}px`;


    const rotation =
        Math.random() * 30 - 15;


    noButton8.style.transform =
        `rotate(${rotation}deg)`;

}

/* ================================
   CARD 9 → CARD 10
================================ */

function goToCard10() {

    createLoveExplosion();

    const card9 =
        document.getElementById("card-9");

    const card10 =
        document.getElementById("card-10");


    if (!card9 || !card10) {

        console.error(
            "Card 9 or Card 10 not found."
        );

        return;
    }


    card9.classList.add("card-exit");


    setTimeout(() => {

        card9.classList.add("hidden");

        card9.classList.remove(
            "card-exit"
        );

        card10.classList.remove(
            "hidden"
        );

        card10.classList.add(
            "card-enter"
        );

        updateProgress(10);

    }, 900);

}

/* ================================
   LOVE EXPLOSION 💗
================================ */

function createLoveExplosion() {

    const numberOfHearts = 45;


    for (
        let i = 0;
        i < numberOfHearts;
        i++
    ) {

        const heart =
            document.createElement("span");


        heart.classList.add(
            "love-particle"
        );


        heart.innerHTML =
            Math.random() > 0.5
                ? "♥"
                : "♡";


        /*
            Random starting position
        */

        const startX =
            Math.random() * 100;


        const startY =
            40 +
            Math.random() * 20;


        /*
            Random movement
        */

        const moveX =
            (Math.random() - 0.5) * 500;


        const moveY =
            -150 -
            Math.random() * 500;


        const size =
            12 +
            Math.random() * 24;


        const duration =
            1.5 +
            Math.random() * 1.5;


        heart.style.left =
            `${startX}%`;


        heart.style.top =
            `${startY}%`;


        heart.style.fontSize =
            `${size}px`;


        heart.style.setProperty(
            "--move-x",
            `${moveX}px`
        );


        heart.style.setProperty(
            "--move-y",
            `${moveY}px`
        );


        heart.style.animationDuration =
            `${duration}s`;


        document.body.appendChild(
            heart
        );


        /*
            Remove after animation
        */

        setTimeout(() => {

            heart.remove();

        }, duration * 1000 + 500);

    }

}

/* ================================
   CARD 9 — NO BUTTON 😈
================================ */

const noButton9 =
    document.getElementById("noButton9");


noButton9.addEventListener(
    "mouseenter",
    moveNoButton9
);


noButton9.addEventListener(
    "touchstart",
    function (event) {

        event.preventDefault();

        moveNoButton9();

    },
    {
        passive: false
    }
);


function moveNoButton9() {

    const card =
        document.getElementById("card-9");

    const cardRect =
        card.getBoundingClientRect();

    const buttonRect =
        noButton9.getBoundingClientRect();


    const padding = 25;


    const maxX =
        cardRect.width -
        buttonRect.width -
        padding * 2;


    const maxY =
        cardRect.height -
        buttonRect.height -
        padding * 2;


    const randomX =
        padding +
        Math.random() * maxX;


    const randomY =
        padding +
        Math.random() * maxY;


    noButton9.style.position = "fixed";


    noButton9.style.left =
        `${cardRect.left + randomX}px`;


    noButton9.style.top =
        `${cardRect.top + randomY}px`;


    const rotation =
        Math.random() * 30 - 15;


    noButton9.style.transform =
        `rotate(${rotation}deg)`;

}

/* ========================================
   CARD 10 — DATE SELECTION
======================================== */

function chooseDate(dateType) {

    console.log(
        "She chose:",
        dateType
    );

    createLoveExplosion();

    setTimeout(() => {

        goToCard11();

    }, 700);

}


/* ========================================
   CARD 10 → CARD 11
======================================== */

function goToCard11() {

    const card10 =
        document.getElementById("card-10");

    const card11 =
        document.getElementById("card-11");


    if (!card10 || !card11) {

        console.error(
            "Card 10 or Card 11 not found."
        );

        return;

    }


    card10.classList.add(
        "card-exit"
    );


    setTimeout(() => {

        card10.classList.add(
            "hidden"
        );

        card10.classList.remove(
            "card-exit"
        );

        card11.classList.remove(
            "hidden"
        );

        card11.classList.add(
            "card-enter"
        );

        updateProgress(11);

    }, 450);

}

/* ========================================
   CARD 11 — PLACE SELECTION
======================================== */

function choosePlace(place) {

    console.log(
        "She chose:",
        place
    );

    createLoveExplosion();

    setTimeout(() => {

        goToCard12();

    }, 700);

}


/* ========================================
   CARD 11 → CARD 12
======================================== */

function goToCard12() {

    const card11 =
        document.getElementById("card-11");

    const card12 =
        document.getElementById("card-12");


    if (!card11 || !card12) {

        console.error(
            "Card 11 or Card 12 not found."
        );

        return;

    }


    card11.classList.add(
        "card-exit"
    );


    setTimeout(() => {

        card11.classList.add(
            "hidden"
        );

        card11.classList.remove(
            "card-exit"
        );

        card12.classList.remove(
            "hidden"
        );

        card12.classList.add(
            "card-enter"
        );

        updateProgress(12);

    }, 450);

}

/* ========================================
   CARD 12 — OUTFIT SELECTION
======================================== */

function chooseOutfit(outfit) {

    console.log(
        "She chose:",
        outfit
    );

    createLoveExplosion();

    setTimeout(() => {

        goToCard13();

    }, 700);

}


/* ========================================
   CARD 12 → CARD 13
======================================== */

function goToCard13() {

    const card12 =
        document.getElementById("card-12");

    const card13 =
        document.getElementById("card-13");


    if (!card12 || !card13) {

        console.error(
            "Card 12 or Card 13 not found."
        );

        return;

    }


    card12.classList.add(
        "card-exit"
    );


    setTimeout(() => {

        card12.classList.add(
            "hidden"
        );

        card12.classList.remove(
            "card-exit"
        );

        card13.classList.remove(
            "hidden"
        );

        card13.classList.add(
            "card-enter"
        );

        updateProgress(13);

    }, 450);

}

/* ========================================
   CARD 13 — PAYMENT
======================================== */

function choosePayment(payment) {

    console.log(
        "Payment choice:",
        payment
    );

    createLoveExplosion();

    setTimeout(() => {

        goToCard14();

    }, 700);

}


/* ========================================
   CARD 13 → CARD 14
======================================== */

function goToCard14() {

    const card13 =
        document.getElementById("card-13");

    const card14 =
        document.getElementById("card-14");


    if (!card13 || !card14) {

        console.error(
            "Card 13 or Card 14 not found."
        );

        return;
    }


    card13.classList.add(
        "card-exit"
    );


    setTimeout(() => {

        card13.classList.add(
            "hidden"
        );

        card13.classList.remove(
            "card-exit"
        );

        card14.classList.remove(
            "hidden"
        );

        card14.classList.add(
            "card-enter"
        );

        updateProgress(14);

    }, 450);

}

/* ========================================
   CARD 14 → CARD 15
======================================== */

function goToCard15() {

    createLoveExplosion();

    const card14 =
        document.getElementById("card-14");

    const card15 =
        document.getElementById("card-15");


    if (!card14 || !card15) {

        console.error(
            "Card 14 or Card 15 not found."
        );

        return;
    }


    card14.classList.add(
        "card-exit"
    );


    setTimeout(() => {

        card14.classList.add(
            "hidden"
        );

        card14.classList.remove(
            "card-exit"
        );

        card15.classList.remove(
            "hidden"
        );

        card15.classList.add(
            "card-enter"
        );

        updateProgress(15);

    }, 700);

}

/* ========================================
   CARD 14 — NO BUTTON 😈
======================================== */

const noButton14 =
    document.getElementById("noButton14");


noButton14.addEventListener(
    "mouseenter",
    moveNoButton14
);


noButton14.addEventListener(
    "touchstart",
    function (event) {

        event.preventDefault();

        moveNoButton14();

    },
    {
        passive: false
    }
);


function moveNoButton14() {

    const card =
        document.getElementById("card-14");

    const cardRect =
        card.getBoundingClientRect();

    const buttonRect =
        noButton14.getBoundingClientRect();

    const padding = 25;

    const maxX =
        cardRect.width -
        buttonRect.width -
        padding * 2;

    const maxY =
        cardRect.height -
        buttonRect.height -
        padding * 2;

    const randomX =
        padding +
        Math.random() * maxX;

    const randomY =
        padding +
        Math.random() * maxY;

    noButton14.style.position =
        "fixed";

    noButton14.style.left =
        `${cardRect.left + randomX}px`;

    noButton14.style.top =
        `${cardRect.top + randomY}px`;

    const rotation =
        Math.random() * 30 - 15;

    noButton14.style.transform =
        `rotate(${rotation}deg)`;

}

/* ========================================
   CARD 15 → FINAL PROPOSAL
======================================== */

function goToFinalProposal() {

    createLoveExplosion();

    const card15 =
        document.getElementById("card-15");

    const finalCard =
        document.getElementById("card-16");


    if (!card15 || !finalCard) {

        console.error(
            "Card 15 or Card 16 not found."
        );

        return;
    }


    card15.classList.add(
        "card-exit"
    );


    setTimeout(() => {

        card15.classList.add(
            "hidden"
        );

        card15.classList.remove(
            "card-exit"
        );

        finalCard.classList.remove(
            "hidden"
        );

        finalCard.classList.add(
            "card-enter"
        );

        updateProgress(16);

    }, 900);

}

/* ========================================
   CARD 15 — NO BUTTON 😈
======================================== */

const noButton15 =
    document.getElementById("noButton15");


noButton15.addEventListener(
    "mouseenter",
    moveNoButton15
);


noButton15.addEventListener(
    "touchstart",
    function (event) {

        event.preventDefault();

        moveNoButton15();

    },
    {
        passive: false
    }
);


function moveNoButton15() {

    const card =
        document.getElementById("card-15");

    const cardRect =
        card.getBoundingClientRect();

    const buttonRect =
        noButton15.getBoundingClientRect();


    const padding = 25;


    const maxX =
        cardRect.width -
        buttonRect.width -
        padding * 2;


    const maxY =
        cardRect.height -
        buttonRect.height -
        padding * 2;


    const randomX =
        padding +
        Math.random() * maxX;


    const randomY =
        padding +
        Math.random() * maxY;


    noButton15.style.position =
        "fixed";


    noButton15.style.left =
        `${cardRect.left + randomX}px`;


    noButton15.style.top =
        `${cardRect.top + randomY}px`;


    const rotation =
        Math.random() * 30 - 15;


    noButton15.style.transform =
        `rotate(${rotation}deg)`;

}

/* ========================================
   FINAL PROPOSAL ❤️
======================================== */

function acceptProposal() {

    const card16 =
        document.getElementById("card-16");

    createMassiveLoveExplosion();

    setTimeout(() => {

        card16.innerHTML = `
        
            <div class="final-love-screen">

                <div class="big-heart">
                    ❤️
                </div>

                <p class="small-text">
                    I was really hoping you'd say that... 🥹
                </p>

                <h1>
                    It's a
                    <span>DATE! ❤️</span>
                </h1>

                <p class="description">
                    No more questions.
                    <br>
                    No more escaping.
                    <br><br>
                    Just you and me...
                    <br>
                    and our first date. 🌹
                </p>

                <div class="final-message">
                    <span>♡</span>
                    <strong>
                        See you soon, beautiful.
                    </strong>
                    <span>♡</span>
                </div>

            </div>

        `;

        card16.classList.add(
            "proposal-accepted"
        );

    }, 800);

}

/* ========================================
   MASSIVE LOVE EXPLOSION 💗
======================================== */

function createMassiveLoveExplosion() {

    const hearts = 120;


    for (
        let i = 0;
        i < hearts;
        i++
    ) {

        const heart =
            document.createElement("span");


        heart.classList.add(
            "love-particle",
            "massive-love"
        );


        const symbols = [
            "♥",
            "♡",
            "💗",
            "💖",
            "💕",
            "💘"
        ];


        heart.innerHTML =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        const startX =
            45 +
            Math.random() * 10;


        const startY =
            50 +
            Math.random() * 10;


        const moveX =
            (Math.random() - 0.5) * 1000;


        const moveY =
            -200 -
            Math.random() * 700;


        const size =
            14 +
            Math.random() * 35;


        const duration =
            2 +
            Math.random() * 2;


        heart.style.left =
            `${startX}%`;


        heart.style.top =
            `${startY}%`;


        heart.style.fontSize =
            `${size}px`;


        heart.style.setProperty(
            "--move-x",
            `${moveX}px`
        );


        heart.style.setProperty(
            "--move-y",
            `${moveY}px`
        );


        heart.style.animationDuration =
            `${duration}s`;


        document.body.appendChild(
            heart
        );


        setTimeout(() => {

            heart.remove();

        }, duration * 1000 + 500);

    }

}

/* ========================================
   FINAL NO BUTTON 😈
======================================== */

const finalNoButton =
    document.getElementById(
        "finalNoButton"
    );


finalNoButton.addEventListener(
    "mouseenter",
    moveFinalNoButton
);


finalNoButton.addEventListener(
    "touchstart",
    function (event) {

        event.preventDefault();

        moveFinalNoButton();

    },
    {
        passive: false
    }
);


function moveFinalNoButton() {

    const card =
        document.getElementById(
            "card-16"
        );

    const cardRect =
        card.getBoundingClientRect();

    const buttonRect =
        finalNoButton.getBoundingClientRect();


    const padding = 25;


    const maxX =
        cardRect.width -
        buttonRect.width -
        padding * 2;


    const maxY =
        cardRect.height -
        buttonRect.height -
        padding * 2;


    const randomX =
        padding +
        Math.random() * maxX;


    const randomY =
        padding +
        Math.random() * maxY;


    finalNoButton.style.position =
        "fixed";


    finalNoButton.style.left =
        `${cardRect.left + randomX}px`;


    finalNoButton.style.top =
        `${cardRect.top + randomY}px`;


    finalNoButton.style.transform =
        `rotate(
            ${Math.random() * 30 - 15}deg
        )`;

}