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
            basic.showLeds(`
                . # # # .
                # # . . #
                # . # . #
                # . . # #
                . # # # .
                `)
            basic.pause(500)
            orange()
            basic.pause(1000)
            red()
        }
    }
    counter = 9
})
input.onButtonPressed(Button.B, function () {
	
})
function orange () {
    range_2 = strip.range(1, 1)
    range_2.showColor(neopixel.colors(NeoPixelColors.Orange))
    range_2 = strip.range(2, 1)
    range_2.showColor(neopixel.colors(NeoPixelColors.Black))
    range_2 = strip.range(0, 1)
    range_2.showColor(neopixel.colors(NeoPixelColors.Black))
}
function red () {
    range_2 = strip.range(0, 1)
    range_2.showColor(neopixel.colors(NeoPixelColors.Red))
    range_2 = strip.range(1, 1)
    range_2.showColor(neopixel.colors(NeoPixelColors.Black))
    range_2 = strip.range(2, 1)
    range_2.showColor(neopixel.colors(NeoPixelColors.Black))
}
let distance = 0
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
strip = neopixel.create(DigitalPin.P16, 3, NeoPixelMode.RGB)
strip.setBrightness(70)
counter = 9
red()
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P1, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P1, 0)
    distance += pins.pulseIn(DigitalPin.P2, PulseValue.High) / 58
    basic.pause(500)
    if (distance > 3.43) {
        green()
        basic.pause(5000)
    }
})
