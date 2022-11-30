radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 4) {
    	
    }
})
function green () {
    range_2 = strip.range(3, 1)
    range_2.showColor(neopixel.colors(NeoPixelColors.Green))
    strip.clear()
}
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 9; index++) {
        basic.pause(500)
        counter += -1
        if (counter == 0) {
            red()
            basic.showLeds(`
                . . # . .
                # # # # #
                . . # . .
                . # # # .
                # . . . #
                `)
            basic.pause(5000)
        }
    }
    counter = 9
    for (let index = 0; index < 9; index++) {
        basic.showNumber(counter)
        basic.pause(500)
        counter += -1
        if (counter == 0) {
            green()
            basic.showLeds(`
                . # # # .
                # # . . #
                # . # . #
                # . . # #
                . # # # .
                `)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
function red () {
    range_2 = strip.range(0, 1)
    range_2.showColor(neopixel.colors(NeoPixelColors.Red))
    strip.clear()
}
let range_2: neopixel.Strip = null
let counter = 0
let strip: neopixel.Strip = null
basic.showLeds(`
    . # # # .
    # # . . #
    # . # . #
    # . . # #
    . # # # .
    `)
strip = neopixel.create(DigitalPin.P16, 3, NeoPixelMode.RGB)
strip.setBrightness(70)
radio.setGroup(77)
counter = 9
basic.forever(function () {
	
})
