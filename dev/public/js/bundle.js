/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var list = document.querySelector('.list');

var Message = function () {
  function Message(text, login, data, image, like, comments, id) {
    _classCallCheck(this, Message);

    this.text = text;
    this.login = login;
    this.data = data;
    this.image = image;
    this.like = like;
    this.comments = comments;
    this.id = id;
  }

  _createClass(Message, [{
    key: 'createMessage',
    value: function createMessage() {
      var tegLi = document.createElement('li');
      var post = list.appendChild(tegLi);
      post.classList.add('element');
      this.createPost(post);
      if (this.image != '') {
        var img = '<img src=' + this.image + '  />\'';
        post.innerHTML += img;
      }
      var tegButton = document.createElement('button');
      var counterLike = post.appendChild(tegButton);
      counterLike.classList.add('postCounter');
      counterLike.textContent = this.like;
      counterLike.onclick = this.counter.bind(this);

      var tegButton1 = document.createElement('button');
      var comment = post.appendChild(tegButton1);
      comment.classList.add('addComment');
      comment.textContent = 'Коментировать';

      var tegButton2 = document.createElement('button');
      var delet = post.appendChild(tegButton2);
      counterLike.classList.add('remove');
      delet.textContent = 'X';
      delet.addEventListener('click', this.remove.bind(this, post));

      var tegLi2 = document.createElement('li');
      var conteinerComments = post.appendChild(tegLi2);
      this.getComments(conteinerComments);

      comment.addEventListener('click', this.consoleComment.bind(this, conteinerComments, comment));
    }
  }, {
    key: 'getComments',
    value: function getComments(post) {
      while (post.firstChild) {
        post.removeChild(post.firstChild);
      }
      if (Array.isArray(this.comments)) {
        this.comments.map(function (element) {
          var comment = new Comment(element.text, element.login);
          comment.createComments(post);
        });
      }
    }
  }, {
    key: 'consoleComment',
    value: function consoleComment(post, comment) {
      var tegTextarea = document.createElement('textarea');
      tegTextarea.classList.add('consoleComment');
      var commentText = post.appendChild(tegTextarea);
      var tegButton = document.createElement('button');
      var submit = post.appendChild(tegButton);
      submit.textContent = 'отправить';
      submit.classList.add('commentInput');
      submit.addEventListener('click', this.addComments.bind(this, submit, commentText, post, comment));
    }
  }, {
    key: 'addComments',
    value: function addComments(submit, commentText, post, comment) {
      post.removeChild(commentText);
      post.removeChild(submit);
      var text = commentText.value;
      if (text != '') {
        var _comment = { text: text, login: this.login };
        if (!Array.isArray(this.comments)) {
          this.comments = [];
        }
        this.comments.push(_comment);
        var newArr = JSON.stringify(this.comments);
        this.updateMessage('comments', this.id, newArr);
      }
      this.getComments(post);
    }
  }, {
    key: 'update',
    value: function update() {
      fetch('/data/data', {
        method: 'post',
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: 'text=' + this.text + '&login=' + this.login + '&data=' + this.data + '&image=' + this.image + '&like=' + this.like + '&comments=' + this.comments + '&id=' + this.id
      }).catch(console.log('err'));
    }
  }, {
    key: 'updateMessage',
    value: function updateMessage(type, id, attribute) {
      console.log(2, attribute);
      fetch('/data/' + type, {
        method: 'post',
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: 'id=' + id + '&attribute=' + attribute
      }).catch(console.log('err'));
    }
  }, {
    key: 'counter',
    value: function counter(event) {
      var target = event.target;
      this.like++;
      target.textContent = this.like;
      this.updateMessage('like', this.id, this.like);
    }
  }, {
    key: 'createPost',
    value: function createPost(post) {
      post.textContent = this.data;
      var modelPost = '<h1>' + this.login + '</h1>\n                       <h3>' + this.text + '</h3>\n                        ';
      post.innerHTML += modelPost;
    }
  }, {
    key: 'remove',
    value: function remove(post, event) {
      var target = event.target;
      var element = target.parentElement;
      element.remove();
      this.updateMessage('delete', this.id, null);
    }
  }]);

  return Message;
}();

var Comment = function (_Message) {
  _inherits(Comment, _Message);

  function Comment() {
    _classCallCheck(this, Comment);

    return _possibleConstructorReturn(this, (Comment.__proto__ || Object.getPrototypeOf(Comment)).apply(this, arguments));
  }

  _createClass(Comment, [{
    key: 'createComments',
    value: function createComments(post) {
      var tegLi = document.createElement('li');
      var notice = post.appendChild(tegLi);
      this.createPost(notice);
    }
  }]);

  return Comment;
}(Message);

exports.default = Message;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Page = __webpack_require__(2);

var _Page2 = _interopRequireDefault(_Page);

var _Message = __webpack_require__(0);

var _Message2 = _interopRequireDefault(_Message);

var _Activator = __webpack_require__(4);

var _Activator2 = _interopRequireDefault(_Activator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _Page2.default)();
var list = document.querySelector('.list');
var formGener = document.querySelector('.formGener');
var send = formGener.elements.send;

send.addEventListener('click', _Activator2.default);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _requestFetch = __webpack_require__(3);

var Page = function Page() {

  (0, _requestFetch.requestMessages)();
  var generAvatar = document.querySelector('.avatar');
  var generHeader = document.querySelector('.header');
  var fonConstructor = document.querySelector('.fonConstructor');
  var testImage = document.querySelector('.testImage');
  var avatarLogin = document.querySelector('.avatarLogin');
  var formEditor = document.querySelector('.formEditor');

  fetch('/data/user').then(function (response) {
    return response.json();
  }).then(function (data) {
    generAvatar.style.backgroundImage = 'url(' + data.avatar + ')';
    generHeader.style.backgroundImage = 'url(' + data.header + ')';
  });

  generHeader.addEventListener('click', generImage.bind(null, generHeader, 'header'));
  generAvatar.addEventListener('click', generImage.bind(null, generAvatar, 'avatar'));

  formEditor.elements.exit.addEventListener('click', exit);

  function generImage(target, type) {
    fonConstructor.style.display = 'block';
    formEditor.elements.save.onclick = function () {
      target.style.backgroundImage = 'url(' + formEditor.elements.url.value + ')';
      target.style.backgroundSize = formEditor.elements.size.value + 'px';
      exit();
      fetch('/data/' + type, {
        method: 'post',
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: 'type=' + formEditor.elements.url.value
      });
    };
  }
  function exit() {
    fonConstructor.style.display = 'none';
  }
};

exports.default = Page;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestMessages = undefined;

var _Message = __webpack_require__(0);

var _Message2 = _interopRequireDefault(_Message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var requestMessages = function requestMessages() {
  var list = document.querySelector('.list');
  fetch('/data/data').then(function (response) {
    return response.json();
  }).then(function (data) {
    if (data.length != 0) {
      data.map(function (item) {
        var post = new _Message2.default(item.text, item.login, item.data, item.image, item.like, item.comments, item.id);
        post.createMessage();
      });
    }
  });
};
exports.requestMessages = requestMessages;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Message = __webpack_require__(0);

var _Message2 = _interopRequireDefault(_Message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Activator = function Activator(e) {
  e.preventDefault();

  var date = new Date();
  var hours = date.getHours();
  var min = date.getMinutes();
  var time = hours + ':' + min;
  var formGener = e.target.parentElement;
  var comment = [];
  var id = getRandomInt(1, 200000);
  var text = formGener.elements.message.value;
  var int = 0;
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  if (text != '') {
    var imageUrl = formGener.elements.createImg.value;
    fetch('/data/user').then(function (response) {
      return response.json();
    }).then(function (data) {
      var post = new _Message2.default(text, data.login, time, imageUrl, int, comment, id);
      post.createMessage();
      post.update();
    });
  }
};

exports.default = Activator;

/***/ })
/******/ ]);