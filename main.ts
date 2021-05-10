input.onButtonPressed(Button.A, function () {
    music.setVolume(0)
    basic.pause(30000)
    music.setVolume(255)
})
music.setVolume(255)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) > 650) {
        pins.analogPitch(100000, 60000)
    } else {
        pins.analogPitch(0, 5e+100)
    }
})
basic.forever(function () {
    basic.showString("" + (pins.analogReadPin(AnalogPin.P0)))
})
