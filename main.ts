input.onButtonPressed(Button.A, function () {
    if (Sprite.get(LedSpriteProperty.X) == 2 && Sprite.get(LedSpriteProperty.Y) == 2) {
        game.addScore(1)
        game.setScore(game.score())
        basic.showNumber(game.score())
        basic.pause(100)
    } else {
        basic.showNumber(game.score())
        basic.pause(100)
    }
})
/**
 * LED dot이 랜덤하게 움직일 떄 중앙에 있는 LED에 불이 켜지면 버튼 A를 누르면 점수가 올라가는 게임이다
 * 
 * 20초동안 버튼 A를 누를 떄 x=2, y=2와 일치하면 1점이 올라가고 20초가 지나면 게임이 종료되어 점수가 표시된다
 * 
 * GAME OVER ---> SCORE  점수
 */
let Sprite: game.LedSprite = null
game.setScore(0)
Sprite = game.createSprite(2, 2)
game.startCountdown(20000)
basic.forever(function () {
    Sprite.move(1)
    basic.pause(100)
    Sprite.ifOnEdgeBounce()
    Sprite.set(LedSpriteProperty.X, randint(0, 4))
    Sprite.set(LedSpriteProperty.Y, randint(0, 4))
})
