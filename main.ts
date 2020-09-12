input.onButtonPressed(Button.A, function () {
    basic.showNumber(feet)
    basic.showString("Feet")
    basic.showString("=")
    yards = feet / 3
    basic.showNumber(yards)
    basic.showString("Yards")
})
input.onButtonPressed(Button.AB, function () {
    cm = inches / 2.54
    basic.showNumber(cm)
    basic.showString("Cm")
})
input.onButtonPressed(Button.B, function () {
    inches = feet / 12
    basic.showNumber(inches)
    basic.showString("Inches")
})
input.onGesture(Gesture.Shake, function () {
    Meters = feet / 3
})
let Meters = 0
let inches = 0
let cm = 0
let yards = 0
let feet = 0
feet = randint(0, 100)
