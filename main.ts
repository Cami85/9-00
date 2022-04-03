basic.forever(function () {
    basic.showNumber(input.temperature())
    if (input.temperature() > 36) {
        soundExpression.slide.play()
        basic.showNumber(input.temperature())
        basic.showString("T. Alta")
        basic.showIcon(IconNames.Happy)
    } else if (input.temperature() < 26) {
        soundExpression.soaring.play()
        basic.showNumber(input.temperature())
        basic.showString("T. Baja")
        basic.showIcon(IconNames.Sad)
    } else if (input.temperature() == 29) {
        soundExpression.happy.play()
        basic.showNumber(input.temperature())
        basic.showString("T. Normal")
        basic.showIcon(IconNames.Yes)
    }
})
