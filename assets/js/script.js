// TODO: Declare any global variables we need


document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})
let heads = 0
let tails = 0
let percentHeads = 0
let percentTails = 0
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('flip').addEventListener('click', () => {
        let headsFlip = Math.ceil (Math.random() < 0.5)
        if (headsFlip) {
            document.getElementById('penny-image').src = 'assets/images/penny-heads.jpg'
            document.getElementById('message').textContent = 'You Flipped Heads!'
            heads += 1
        }
        else {
            document.getElementById('penny-image').src = 'assets/images/penny-tails.jpg'
            document.getElementById('message').textContent = 'You Flipped Tails!'
            tails += 1
        }
        let total = heads + tails
        if (total > 0){
            percentHeads = Math.round((headsRolls / total) * 100)
            percentTails = Math.round((tailsRolls / total) * 100)
        }
        document.getElementById('heads').textContent = heads
        document.getElementById('heads-percent').textContent = percentHeads + '%'
        document.getElementById('tails').textContent = tails
        document.getElementById('tails-percent').textContent = percentTails + '%'
    })
    document.getElementById('clear').addEventListener('click', function () {
        heads = 0
        tails = 0
        document.getElementById('message').textContent = 'Let\'s Get Rolling!'
        let total = heads + tails
        let percentHeads = 0
        let percentTails = 0
        if (total > 0) {
            percentHeads = Math.round((heads / total) * 100)
            percentTails = Math.round((tails / total) * 100)
        }
        document.getElementById('heads').textContent = heads
        document.getElementById('heads-percent').textContent = percentHeads + '%'
        document.getElementById('tails').textContent = tails
        document.getElementById('tails-percent').textContent = percentTails + '%'
    })
})