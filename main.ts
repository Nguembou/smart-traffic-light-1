radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 4) {
    	
    }
})
function green () {
    range_2 = strip.range(2, 1)
    range_2.showColor(neopixel.colors(NeoPixelColors.Green))
    range_2 = strip.range(1, 1)
    range_2.showColor(neopixel.colors(NeoPixelColors.Black))
    range_2 = strip.range(0, 1)
    range_2.showColor(neopixel.colors(NeoPixelColors.Black))
}
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 9; index++) {
        basic.pause(500)
        counter += -1
        if (counter == 0) {
            green()
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
            red()
            basic.showLeds(`
                . # # # .
                # # . . #
                # . # . #
                # . . # #
                . # # # .
                `)
        }
    }
    counter = 9
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
function red () {
    range_2 = strip.range(0, 1)
    range_2.showColor(neopixel.colors(NeoPixelColors.Red))
    range_2 = strip.range(1, 1)
    range_2.showColor(neopixel.colors(NeoPixelColors.Black))
    range_2 = strip.range(2, 1)
    range_2.showColor(neopixel.colors(NeoPixelColors.Black))
}
let range_2: neopixel.Strip = null
let counter = 0
let strip: neopixel.Strip = null
radio.setGroup(77)
basic.showLeds(`
    . # # # .
    # # . . #
    # . # . #
    # . . # #
    . # # # .
    `)
strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
strip.setBrightness(70)
counter = 9
red()
basic.forever(function () {
	
})
