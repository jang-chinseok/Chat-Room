(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";var displayChat=document.querySelector(".chatDisplay"),jsForm=document.querySelector(".jsForm"),chatForm=document.querySelector(".chatForm"),input=jsForm.querySelector("input"),nickname=localStorage.getItem("nickname"),getTime=function(){var e=new Date;return{hour:e.getHours(),minute:e.getMinutes()}},displayMessage=function(e,n){var t=getTime(),a=t.hour,s=t.minute,i=document.createElement("li");i.innerHTML='\n    <span class="time">'.concat(a,":").concat(s,'</span>\n    <span class="author">').concat(n,":").concat(e,"</span>\n    "),displayChat.appendChild(i)},appendMsg=function(e){var n=e.message,t=e.nickname;return displayMessage(n,t)},handleSubmit=function(e){e.preventDefault();var n=input.value;window.socket.emit(window.events.sendMsg,{message:n}),displayMessage(n,nickname),input.value=""};chatForm&&(jsForm.addEventListener("submit",handleSubmit),window.socket.on(window.events.newMsg,appendMsg));

},{}],2:[function(require,module,exports){
"use strict";var body=document.querySelector("body"),registerForm=document.querySelector(".registerForm"),nicknameInput=registerForm.querySelector("input"),chatForm=document.querySelector(".chatForm"),NICKNAME="nickname",LOGGEDOUT="loggedOut",LOGGEDIN="loggedIn",confirmLI=localStorage.getItem(NICKNAME),logIn=function(e){window.socket=io("/"),window.socket.emit(window.events.setNickname,{nickname:e})},askNickName=function e(){var t=nicknameInput.value;localStorage.setItem(NICKNAME,t),logIn(t),registerForm.removeEventListener("submit",e)},init=function(){null===confirmLI?(chatForm.id=LOGGEDOUT,registerForm.addEventListener("submit",askNickName)):(chatForm.id=LOGGEDIN,registerForm.id=LOGGEDOUT,logIn(confirmLI))};init();

},{}],3:[function(require,module,exports){
"use strict";require("./login"),require("./chat");

},{"./chat":1,"./login":2}]},{},[3]);
