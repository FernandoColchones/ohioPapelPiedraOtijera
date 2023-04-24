radio.onReceivedNumber(function (receivedNumber) {
    tool = randint(0, 2)
    if (tool == 0) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (tool == 0) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(777)
})
let tool = 0
radio.setGroup(777)
