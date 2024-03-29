"use strict";
/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2019 Digitsensitive
 * @description  Design patterns: Behavioral design pattern - Command
 *               Game Object
 * @license      Digitsensitive
 */
Object.defineProperty(exports, "__esModule", { value: true });
class GameObject extends Phaser.GameObjects.Image {
    constructor(params) {
        super(params.scene, params.x, params.y, params.key);
        this.initImage();
        this.scene.add.existing(this);
    }
    initImage() {
        this.setOrigin(0, 0);
    }
    shoot() { }
    updatePosition(tile) { }
}
exports.GameObject = GameObject;
//# sourceMappingURL=gameobject.js.map