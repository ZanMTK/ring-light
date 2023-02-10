let volume = 0
let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
strip.clear()
strip.show()
basic.forever(function () {
    volume = pins.map(
    input.soundLevel(),
    0,
    100,
    0,
    4
    )
    if (volume > 0) {
        for (let index = 0; index <= 4; index++) {
            strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Blue))
            strip.show()
        }
        strip.clear()
        strip.show()
    }
})
