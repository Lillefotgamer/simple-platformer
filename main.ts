namespace SpriteKind {
    export const Portal = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.gameOver(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Player1.isHittingTile(CollisionDirection.Bottom)) {
        Player1.vy = -140
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Player1,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `],
    200,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Player1,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `],
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.gameOver(false)
})
let Player1: Sprite = null
Player1 = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level2`)
Player1.setPosition(20, 24)
controller.moveSprite(Player1, 100, 0)
scene.cameraFollowSprite(Player1)
Player1.ay = 150
let spider = sprites.create(img`
    .....................
    .....................
    .....................
    .....................
    ...........fffff.ff..
    ...ff.....fbbbbbfbbf.
    ..fbbf..ffbbbfbbfcbbf
    ..fbbf.fbbbbcbffccfbf
    ..fbccffbcbbcbffcffbf
    .fbbfccfbfcccbfcfcfbf
    .fbfdfffbfccfbfccffbf
    fbfcccfbfcccfbfcf.fbf
    fbfffffbfffffbff..fbf
    fbf...fbf...fbf...fbf
    fbf....f....fbf....f.
    .f...........f.......
    `, SpriteKind.Enemy)
tiles.placeOnRandomTile(spider, assets.tile`myTile1`)
let Coin3 = sprites.create(img`
    . . f f f f . . 
    . f 5 5 5 5 f . 
    f 5 5 4 4 5 5 f 
    f 5 4 5 5 5 5 f 
    f 5 4 5 5 5 5 f 
    f 4 5 5 5 5 5 f 
    . f 4 4 4 5 f . 
    . . f f f f . . 
    `, SpriteKind.Food)
tiles.placeOnRandomTile(Coin3, assets.tile`myTile0`)
let Coin4 = sprites.create(img`
    . . f f f f . . 
    . f 5 5 5 5 f . 
    f 5 5 4 4 5 5 f 
    f 5 4 5 5 5 5 f 
    f 5 4 5 5 5 5 f 
    f 4 5 5 5 5 5 f 
    . f 4 4 4 5 f . 
    . . f f f f . . 
    `, SpriteKind.Food)
tiles.placeOnRandomTile(Coin4, assets.tile`myTile0`)
let Coin1 = sprites.create(img`
    . . f f f f . . 
    . f 5 5 5 5 f . 
    f 5 5 4 4 5 5 f 
    f 5 4 5 5 5 5 f 
    f 5 4 5 5 5 5 f 
    f 4 5 5 5 5 5 f 
    . f 4 4 4 5 f . 
    . . f f f f . . 
    `, SpriteKind.Food)
tiles.placeOnRandomTile(Coin1, assets.tile`myTile0`)
let Coin2 = sprites.create(img`
    . . f f f f . . 
    . f 5 5 5 5 f . 
    f 5 5 4 4 5 5 f 
    f 5 4 5 5 5 5 f 
    f 5 4 5 5 5 5 f 
    f 4 5 5 5 5 5 f 
    . f 4 4 4 5 f . 
    . . f f f f . . 
    `, SpriteKind.Food)
tiles.placeOnRandomTile(Coin2, assets.tile`myTile0`)
animation.runImageAnimation(
Coin1,
[img`
    . . f f f f . . 
    . f 5 5 5 5 f . 
    f 5 5 4 4 5 5 f 
    f 5 4 5 5 5 5 f 
    f 5 4 5 5 5 5 f 
    f 4 5 5 5 5 5 f 
    . f 4 4 4 5 f . 
    . . f f f f . . 
    `,img`
    . . . f f . . . 
    . . f 5 5 f . . 
    . f 5 5 5 5 f . 
    . f 5 4 5 5 f . 
    . f 5 4 5 5 f . 
    . f 4 5 5 5 f . 
    . . f 4 5 f . . 
    . . . f f . . . 
    `,img`
    . . . f f . . . 
    . . f 4 5 f . . 
    . . f 4 5 f . . 
    . . f 4 5 f . . 
    . . f 4 5 f . . 
    . . f 4 5 f . . 
    . . f 4 5 f . . 
    . . . f f . . . 
    `,img`
    . . . f f . . . 
    . . f 5 5 f . . 
    . f 5 5 5 5 f . 
    . f 5 5 4 5 f . 
    . f 5 5 4 5 f . 
    . f 5 5 5 4 f . 
    . . f 5 4 f . . 
    . . . f f . . . 
    `,img`
    . . 1 1 f f . . 
    . 1 5 5 5 5 f . 
    1 5 5 4 4 5 5 f 
    f 5 5 5 5 4 5 f 
    f 5 5 5 5 4 5 f 
    f 5 5 5 5 5 4 f 
    . f 5 4 4 4 f . 
    . . f f f f . . 
    `,img`
    . . . f f . . . 
    . . f 5 1 1 . . 
    . f 5 1 1 5 f . 
    . f 1 1 5 5 f . 
    . 1 1 4 5 5 f . 
    . 1 4 5 5 5 f . 
    . . f 4 5 f . . 
    . . . f f . . . 
    `,img`
    . . . f f . . . 
    . . f 4 5 f . . 
    . . f 4 5 f . . 
    . . f 4 5 1 . . 
    . . f 4 1 1 . . 
    . . f 1 1 f . . 
    . . 1 1 5 f . . 
    . . . f f . . . 
    `,img`
    . . . f f . . . 
    . . f 5 5 f . . 
    . f 5 5 5 5 f . 
    . f 5 5 4 5 f . 
    . f 5 5 4 5 1 . 
    . f 5 5 5 4 1 . 
    . . f 5 4 1 . . 
    . . . 1 1 . . . 
    `],
250,
true
)
animation.runImageAnimation(
Coin2,
[img`
    . . f f f f . . 
    . f 5 5 5 5 f . 
    f 5 5 4 4 5 5 f 
    f 5 4 5 5 5 5 f 
    f 5 4 5 5 5 5 f 
    f 4 5 5 5 5 5 f 
    . f 4 4 4 5 f . 
    . . f f f f . . 
    `,img`
    . . . f f . . . 
    . . f 5 5 f . . 
    . f 5 5 5 5 f . 
    . f 5 4 5 5 f . 
    . f 5 4 5 5 f . 
    . f 4 5 5 5 f . 
    . . f 4 5 f . . 
    . . . f f . . . 
    `,img`
    . . . f f . . . 
    . . f 4 5 f . . 
    . . f 4 5 f . . 
    . . f 4 5 f . . 
    . . f 4 5 f . . 
    . . f 4 5 f . . 
    . . f 4 5 f . . 
    . . . f f . . . 
    `,img`
    . . . f f . . . 
    . . f 5 5 f . . 
    . f 5 5 5 5 f . 
    . f 5 5 4 5 f . 
    . f 5 5 4 5 f . 
    . f 5 5 5 4 f . 
    . . f 5 4 f . . 
    . . . f f . . . 
    `,img`
    . . 1 1 f f . . 
    . 1 5 5 5 5 f . 
    1 5 5 4 4 5 5 f 
    f 5 5 5 5 4 5 f 
    f 5 5 5 5 4 5 f 
    f 5 5 5 5 5 4 f 
    . f 5 4 4 4 f . 
    . . f f f f . . 
    `,img`
    . . . f f . . . 
    . . f 5 1 1 . . 
    . f 5 1 1 5 f . 
    . f 1 1 5 5 f . 
    . 1 1 4 5 5 f . 
    . 1 4 5 5 5 f . 
    . . f 4 5 f . . 
    . . . f f . . . 
    `,img`
    . . . f f . . . 
    . . f 4 5 f . . 
    . . f 4 5 f . . 
    . . f 4 5 1 . . 
    . . f 4 1 1 . . 
    . . f 1 1 f . . 
    . . 1 1 5 f . . 
    . . . f f . . . 
    `,img`
    . . . f f . . . 
    . . f 5 5 f . . 
    . f 5 5 5 5 f . 
    . f 5 5 4 5 f . 
    . f 5 5 4 5 1 . 
    . f 5 5 5 4 1 . 
    . . f 5 4 1 . . 
    . . . 1 1 . . . 
    `],
250,
true
)
animation.runImageAnimation(
Coin3,
[img`
    . . f f f f . . 
    . f 5 5 5 5 f . 
    f 5 5 4 4 5 5 f 
    f 5 4 5 5 5 5 f 
    f 5 4 5 5 5 5 f 
    f 4 5 5 5 5 5 f 
    . f 4 4 4 5 f . 
    . . f f f f . . 
    `,img`
    . . . f f . . . 
    . . f 5 5 f . . 
    . f 5 5 5 5 f . 
    . f 5 4 5 5 f . 
    . f 5 4 5 5 f . 
    . f 4 5 5 5 f . 
    . . f 4 5 f . . 
    . . . f f . . . 
    `,img`
    . . . f f . . . 
    . . f 4 5 f . . 
    . . f 4 5 f . . 
    . . f 4 5 f . . 
    . . f 4 5 f . . 
    . . f 4 5 f . . 
    . . f 4 5 f . . 
    . . . f f . . . 
    `,img`
    . . . f f . . . 
    . . f 5 5 f . . 
    . f 5 5 5 5 f . 
    . f 5 5 4 5 f . 
    . f 5 5 4 5 f . 
    . f 5 5 5 4 f . 
    . . f 5 4 f . . 
    . . . f f . . . 
    `,img`
    . . 1 1 f f . . 
    . 1 5 5 5 5 f . 
    1 5 5 4 4 5 5 f 
    f 5 5 5 5 4 5 f 
    f 5 5 5 5 4 5 f 
    f 5 5 5 5 5 4 f 
    . f 5 4 4 4 f . 
    . . f f f f . . 
    `,img`
    . . . f f . . . 
    . . f 5 1 1 . . 
    . f 5 1 1 5 f . 
    . f 1 1 5 5 f . 
    . 1 1 4 5 5 f . 
    . 1 4 5 5 5 f . 
    . . f 4 5 f . . 
    . . . f f . . . 
    `,img`
    . . . f f . . . 
    . . f 4 5 f . . 
    . . f 4 5 f . . 
    . . f 4 5 1 . . 
    . . f 4 1 1 . . 
    . . f 1 1 f . . 
    . . 1 1 5 f . . 
    . . . f f . . . 
    `,img`
    . . . f f . . . 
    . . f 5 5 f . . 
    . f 5 5 5 5 f . 
    . f 5 5 4 5 f . 
    . f 5 5 4 5 1 . 
    . f 5 5 5 4 1 . 
    . . f 5 4 1 . . 
    . . . 1 1 . . . 
    `],
250,
true
)
animation.runImageAnimation(
Coin4,
[img`
    . . f f f f . . 
    . f 5 5 5 5 f . 
    f 5 5 4 4 5 5 f 
    f 5 4 5 5 5 5 f 
    f 5 4 5 5 5 5 f 
    f 4 5 5 5 5 5 f 
    . f 4 4 4 5 f . 
    . . f f f f . . 
    `,img`
    . . . f f . . . 
    . . f 5 5 f . . 
    . f 5 5 5 5 f . 
    . f 5 4 5 5 f . 
    . f 5 4 5 5 f . 
    . f 4 5 5 5 f . 
    . . f 4 5 f . . 
    . . . f f . . . 
    `,img`
    . . . f f . . . 
    . . f 4 5 f . . 
    . . f 4 5 f . . 
    . . f 4 5 f . . 
    . . f 4 5 f . . 
    . . f 4 5 f . . 
    . . f 4 5 f . . 
    . . . f f . . . 
    `,img`
    . . . f f . . . 
    . . f 5 5 f . . 
    . f 5 5 5 5 f . 
    . f 5 5 4 5 f . 
    . f 5 5 4 5 f . 
    . f 5 5 5 4 f . 
    . . f 5 4 f . . 
    . . . f f . . . 
    `,img`
    . . 1 1 f f . . 
    . 1 5 5 5 5 f . 
    1 5 5 4 4 5 5 f 
    f 5 5 5 5 4 5 f 
    f 5 5 5 5 4 5 f 
    f 5 5 5 5 5 4 f 
    . f 5 4 4 4 f . 
    . . f f f f . . 
    `,img`
    . . . f f . . . 
    . . f 5 1 1 . . 
    . f 5 1 1 5 f . 
    . f 1 1 5 5 f . 
    . 1 1 4 5 5 f . 
    . 1 4 5 5 5 f . 
    . . f 4 5 f . . 
    . . . f f . . . 
    `,img`
    . . . f f . . . 
    . . f 4 5 f . . 
    . . f 4 5 f . . 
    . . f 4 5 1 . . 
    . . f 4 1 1 . . 
    . . f 1 1 f . . 
    . . 1 1 5 f . . 
    . . . f f . . . 
    `,img`
    . . . f f . . . 
    . . f 5 5 f . . 
    . f 5 5 5 5 f . 
    . f 5 5 4 5 f . 
    . f 5 5 4 5 1 . 
    . f 5 5 5 4 1 . 
    . . f 5 4 1 . . 
    . . . 1 1 . . . 
    `],
250,
true
)
forever(function () {
    if (Coin2.overlapsWith(Player1)) {
        sprites.destroy(Coin2)
        info.changeScoreBy(1)
    }
    if (Coin1.overlapsWith(Player1)) {
        sprites.destroy(Coin1)
        info.changeScoreBy(1)
    }
    if (Coin4.overlapsWith(Player1)) {
        sprites.destroy(Coin4)
        info.changeScoreBy(1)
    }
    if (Coin3.overlapsWith(Player1)) {
        sprites.destroy(Coin3)
        info.changeScoreBy(1)
    }
})
