/* This is the second version from the application */ 

/**
 * Start adding functionality to the webpage
 */

/**
 * Start with global variables
 */
let count = 0;
// Get the three words, the clear button
const word = document.getElementsByClassName('word');
const clearBtn = document.getElementById('clear');
// Get the output screen to print out the output
const screen = document.getElementsByClassName('screen')[0];
const notify = document.getElementById('notify');
const currentWord = document.getElementById('curent-word');
const counter = document.getElementById('counter');
/**
 * End with global variables 
*/  

/** 
 *  Add vibration function when click the buttons
 */
function vibrate(t) {
    navigator.vibrate(t);
};
/** 
 *  End with Add vibration function when click the buttons
 */

/**
 * Start making an event listeners to the buttons "Words"
 */
word[0].addEventListener('click', (e) => {
    vibrate(30);
});
word[1].addEventListener('click', (e) => {
    vibrate(30);
});
word[2].addEventListener('click', (e) => {
    vibrate(30);
});

clearBtn.addEventListener('click', (e) => {
    vibrate(45);
});
/**
 * End making an event listeners to the buttons "Words"
 */


/**
 * Adding function to the clear button
 */
clearBtn.addEventListener('click', (event) => {
    currentWord.innerText = "";
    counter.innerText = '0';
    notify.innerText = "";
    count = 0;
} )
/**
 * End Adding function to the clear button
 */

/**
 * Start make the counter 
 */
word[0].addEventListener('click', (event) => {
    currentWord.innerText = word[0].innerText;
    increment();
    max33();
    // Adding new sentence
    finalWord();
 
});

word[1].addEventListener('click', (event) => {
    currentWord.innerText = word[1].innerText;
    increment();
    max33();
   
});
word[2].addEventListener('click', (event) => {
    currentWord.innerText = word[2].innerText;
    increment();
    max33();
   
});


/**
 * Start making function for the counter
 */
// Increamnet function 

function increment() {
    count += 1;
    if (count == 33) {
        counter.innerText = '33';
    };   
    counter.innerText = count;
};

// Function to make sure you reached the maximum value 
function max33() {
    if (count == 33) {
        // counter.innerText = '33';
        count = 0;
        notify.innerText = (`لقد انتهيت من عدد  ${currentWord.innerText}`);
        currentWord.innerText = "";
        vibrate(25);


    }
    

};
// Adding new feature => The final sentence at 100
function finalWord() {
    if (
        count == 0
    ) {
        currentWord.innerText = "لا تنسى ذكر 'لا اله الا الله وحده لا شريك له، له الملك و له الحمد و هو على كل شئ قدير'";
    }
};

/**
 * End with function for the counter
 */

/**
 * End of the script
 */