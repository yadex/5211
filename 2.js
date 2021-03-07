Function.prototype.softBind = function(bindThis) {
  var args = [].slice.apply(arguments, 1)
  var self = this
  function bound() {
    return self.apply(!this || this === (window || global)? bindThis : this, 
      args.concat([].slice.apply(arguments)))
  }
  return bound
}

function myAry() {
  Array.apply(this, arguments)
}

myAry.prototype = Object.create(Array.prototype, {
  constructor : {
  value: myAry,
  writable: true,
  configuable: true,
  enumerable: true
  }
})

var a = new myAry()
