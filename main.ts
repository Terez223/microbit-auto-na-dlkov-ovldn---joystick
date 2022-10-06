let speed = 0
let angle = 0
radio.setGroup(1)
basic.showIcon(IconNames.Chessboard)
joystickbit.initJoystickBit()
basic.forever(function () {
    angle = pins.map(
    joystickbit.getRockerValue(joystickbit.rockerType.X),
    0,
    1023,
    80,
    280
    )
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P13)) {
        speed = 100
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P14)) {
        speed = -100
    } else {
        speed = 0
    }
    radio.sendValue("angle", angle)
    radio.sendValue("speed", speed)
})
