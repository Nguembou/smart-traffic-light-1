def on_received_number(receivedNumber):
    if receivedNumber == 4:
        pass
radio.on_received_number(on_received_number)

def green():
    global range_2
    range_2 = strip.range(2, 1)
    range_2.show_color(neopixel.colors(NeoPixelColors.GREEN))
    range_2 = strip.range(1, 1)
    range_2.show_color(neopixel.colors(NeoPixelColors.BLACK))
    range_2 = strip.range(0, 1)
    range_2.show_color(neopixel.colors(NeoPixelColors.BLACK))

def on_button_pressed_a():
    global counter
    for index in range(9):
        basic.pause(500)
        counter += -1
        if counter == 0:
            red()
            basic.show_leds("""
                . . # . .
                                # # # # #
                                . . # . .
                                . # # # .
                                # . . . #
            """)
            basic.pause(5000)
    counter = 9
    for index2 in range(9):
        basic.show_number(counter)
        basic.pause(500)
        counter += -1
        if counter == 0:
            green()
            basic.show_leds("""
                . # # # .
                                # # . . #
                                # . # . #
                                # . . # #
                                . # # # .
            """)
    counter = 9
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    pass
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    pass
input.on_button_pressed(Button.B, on_button_pressed_b)

def red():
    global range_2
    range_2 = strip.range(0, 1)
    range_2.show_color(neopixel.colors(NeoPixelColors.RED))
    range_2 = strip.range(1, 1)
    range_2.show_color(neopixel.colors(NeoPixelColors.BLACK))
    range_2 = strip.range(2, 1)
    range_2.show_color(neopixel.colors(NeoPixelColors.BLACK))
range_2: neopixel.Strip = None
counter = 0
strip: neopixel.Strip = None
radio.set_group(77)
basic.show_leds("""
    . # # # .
        # # . . #
        # . # . #
        # . . # #
        . # # # .
""")
strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
strip.set_brightness(70)
counter = 9
green()

def on_forever():
    pass
basic.forever(on_forever)
