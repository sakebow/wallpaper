const $ = require('jquery')
// image will be packaged by webpack, otherwise image won't show
const source = require('./../assets/snow.png')

class Snow {
  constructor () {
    this.image = $('<img>')
    this.image.attr('src', source)
    this.moveBindSnow = this.move.bind(this)
    this.moveBindSnow()
    this.x = 0
    this.y = 0
    this.xSpeed = 1
    this.ySpeed = 1
  }

  get imgTag () {
    return this.image
  }

  move () {
    requestAnimationFrame(this.move)
  }
}
// 1. const * = require(*) & module.exports = * (x)
// 2. import * from '*' & export default * (_/)
module.exports = Snow
