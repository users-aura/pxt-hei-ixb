let Colors = 0
let strip = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
basic.forever(function () {
    for (let index = 0; index <= 7; index++) {
        for (let index2 = 0; index2 < 4; index2++) {
            Colors = neopixel.rgb(randint(0, 255), randint(0, 255), randint(0, 255))
            strip.clear()
            strip.setPixelColor(index, Colors)
            strip.show()
            basic.pause(50)
        }
    }
})
