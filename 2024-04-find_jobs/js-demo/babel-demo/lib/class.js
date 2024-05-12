"use strict";

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return call && (typeof call === "object" || typeof call === "function")
    ? call
    : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError(
      "Super expression must either be null or a function, not " +
        typeof superClass
    );
  }
  console.log(superClass, superClass.prototype, superClass && superClass.prototype);
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Person = function Person(name) {
  _classCallCheck(this, Person);

  this.name = name;
};

Person.prototype.getName = function () {
  console.log("Person:", this.name);
};

var Gamer = (function (_Person) {
  _inherits(Gamer, _Person);

  function Gamer(name, age) {
    _classCallCheck(this, Gamer);

    var _this = _possibleConstructorReturn(
      this,
      (Gamer.__proto__ || Object.getPrototypeOf(Gamer)).call(this, name)
    );
    // 子类中存在构造函数，则需要在使用“this”之前首先调用 super()。

    _this.age = age;
    return _this;
  }

  return Gamer;
})(Person);

var asuna = new Gamer("Asuna", 20);
asuna.getName(); // 成功访问到父类的方法
