input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, dice_list[dice]))
})
input.onButtonPressed(Button.A, function () {
    if (dice < 4) {
        dice = dice + 1
    } else {
        dice = 0
    }
    basic.showString("d" + dice_list[dice])
})
let dice_list: number[] = []
let dice = 0
dice = 0
dice_list = [6, 8, 10, 12, 20]
basic.showString("d" + dice_list[dice])
basic.forever(function () {
	
})
