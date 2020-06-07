input.onLoudSound(function () {
    music.setVolume(255)
    music.playTone(50000, music.beat(BeatFraction.Breve))
    pins.LED.digitalWrite(true)
})
input.buttonA.onEvent(ButtonEvent.Click, function () {
    music.setVolume(255)
    music.playTone(50000, music.beat(BeatFraction.Breve))
    pins.LED.digitalWrite(true)
})
