/*
* Global Variables
*/
var rpsJumbotron = document.getElementById("rps-jumbotron");
console.log(rpsJumbotron)


/*
*   This function will be called everytime a user presses a key.
*/
document.onkeyup = function (e) {
        /*
        * Check if the user presses either 'r', 'p', or 's' key
        * If they do we'll log the key
        * Any other key should log a message that says 'bad key'
        */
    if (e.key === 'r' || e.key === 'p' || e.key === 's') {
        console.log('You pressed the ' + e.key + ' key!');
        rpsJumbotron.style.display = "none";
    } else if (e.key === 'q') {
        console.warn('You pressed the ' +e.key + ' key!');
        rpsJumbotron.style.display = "block";

    }
    else {
        console.error('You pressed a bad key!');
    }

}