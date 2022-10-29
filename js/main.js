/**
 * Start adding functionality to the webpage
 */

/**
 * Start with global variables
 */
// Get the three words, the clear button
const word1 = document.getElementsByClassName('word')[0];
const word2 = document.getElementsByClassName('word')[1];
const word3 = document.getElementsByClassName('word')[2];
const clearBtn = document.getElementById('clear');
// Get the output screen to print out the output
const screen = document.getElementsByClassName('screen')[0];
const curentWord = document.getElementById('curent-word');
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
 * Removing the other words to make sure the person follow the order
 */


/**
 * End Removing the other words to make sure the person follow the order
 */

/**
 * Start making an event listeners to the buttons "Words"
 */
word1.addEventListener('click', (e) => {
    vibrate(30);
});



word2.addEventListener('click', (e) => {
    vibrate(30);
});


word3.addEventListener('click', (e) => {
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
    curentWord.innerText = "";
    counter.innerText = '0';
} )
/**
 * End Adding function to the clear button
 */

/**
 * Start make the counter 
 */
word1.addEventListener('click', (event) => {
    curentWord.innerText = word1.innerText;
    increment();
    max33();
    

});

word2.addEventListener('click', (event) => {
    curentWord.innerText = word2.innerText;
    increment();
    max33();
   
});

word3.addEventListener('click', (event) => {
    curentWord.innerText = word3.innerText;
    increment();
    max33();
    
})

/**
 * Start making function for the counter
 */
// Increamnet function 
let count = 0;
function increment() {
    count += 1
    if (count.innerText == 33) {
        
        counter.innerText = '0';
    }
    counter.innerText = count;

};

// Function to make sure you reached the maximum value 
function max33() {
    if (counter.innerText == 33) {
        window.alert('لقد انتهيت من العد !')
        vibrate(25);
        // show the button in order:
      

        counter.innerText = '0';
        count = 0;
    

    }
};

/**
 * End with function for the counter
 */

/**
 * End of the script
 */