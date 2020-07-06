def on_button_pressed_a():
    Hero.change(LedSpriteProperty.X, -1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    Hero.change(LedSpriteProperty.X, 1)
input.on_button_pressed(Button.B, on_button_pressed_b)

Hero: game.LedSprite = None
Hero = game.create_sprite(2, 2)

def on_forever():
    if input.acceleration(Dimension.X) > 0:
        Hero.change(LedSpriteProperty.X, 1)
        basic.pause(200)
    if input.acceleration(Dimension.X) < 0:
        Hero.change(LedSpriteProperty.X, -1)
        basic.pause(200)
    if input.acceleration(Dimension.Y) > 0:
        Hero.change(LedSpriteProperty.Y, 1)
        basic.pause(200)
    if input.acceleration(Dimension.Y) < 0:
        Hero.change(LedSpriteProperty.Y, -1)
        basic.pause(200)
basic.forever(on_forever)
