// creates a random Number
// uniqueNumber
let uniqueNumber = 0

function silverBoxUniqueNumberMaker(maxVal) {

    // randomNumber
    const randomNumber = Math.floor((Math.random() * maxVal) + 1);
    // checks if the number exists in the array, if true it will pushed into the array and also will be returned
    if (uniqueNumber !== randomNumber) {
        uniqueNumber = randomNumber
        return uniqueNumber;
    }
    // if it's false, the function will be called once again
    else {
        silverBoxUniqueNumberMaker(maxVal);
    }

}

export default silverBoxUniqueNumberMaker