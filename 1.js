function Rectangle(width, length) {
  this.width = width
  this.length = length
}

Rectangle.prototype.getArea = function() {
  return this.width * this.length
}

function Square(length) {
  Rectangle.call(this, length, length)
}

Square.prototype = Object.create(Rectangle.prototype, {
  construtor: {
    value: Square,
    writble: true,
    enumerable: true,
    configuable: true
  }
})


