radio.onReceivedNumber(function (receivedNumber) {
    tool = randint(0, 2)
    if (tool == 0) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . . # . .
            . # # # .
            `)
    } else if (tool == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . # .
            . # # # .
            # . . # .
            `)
    } else {
        basic.showLeds(`
            . # . . .
            # # . . .
            # # # # .
            # # . . .
            . # . . .
            `)
    }
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(777)
})
let tool = 0
radio.setGroup(777)
