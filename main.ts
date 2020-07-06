input.onButtonPressed(Button.A, function () {
    Hero.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    Hero.change(LedSpriteProperty.X, 1)
})
let Enemy: game.LedSprite = null
let Hero: game.LedSprite = null
Hero = game.createSprite(2, 4)
let Enemy_Alive = 0
game.setScore(0)
basic.forever(function () {
    if (input.acceleration(Dimension.X) > 0) {
        Hero.change(LedSpriteProperty.X, 1)
        basic.pause(200)
    }
    if (input.acceleration(Dimension.X) < 0) {
        Hero.change(LedSpriteProperty.X, -1)
        basic.pause(200)
    }
    if (input.acceleration(Dimension.Y) > 0) {
        Hero.change(LedSpriteProperty.Y, 1)
        basic.pause(200)
    }
    if (input.acceleration(Dimension.Y) < 0) {
        Hero.change(LedSpriteProperty.Y, -1)
        basic.pause(200)
    }
    if (Enemy_Alive == 0) {
        Enemy = game.createSprite(randint(0, 4), 0)
        Enemy_Alive = 1
    }
    basic.pause(750)
    Enemy.change(LedSpriteProperty.Y, 1)
    if (Enemy.get(LedSpriteProperty.Y) == 4) {
        basic.pause(250)
        Enemy.delete()
        Enemy_Alive = 0
    }
    if (Hero.isTouching(Enemy)) {
        Enemy.delete()
        Enemy_Alive = 0
        game.addScore(1)
    }
    if (game.score() >= 3) {
        Hero.delete()
        Enemy.delete()
        basic.showString("score")
        basic.showNumber(game.score())
        basic.showString("You win")
        game.gameOver()
    }
})
