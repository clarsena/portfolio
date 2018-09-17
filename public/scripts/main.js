(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var name = {
    strings: ["Christopher Arsenault"],
    typeSpeed: 40,
    showCursor: false
};

var title = {
    strings: ["Front-End Web Developer"],
    typeSpeed: 40,
    startDelay: 2000,
    cursorChar: '_',
    showCursor: false
};

var typedName = new Typed('#typed-name', name);
var typedTitle = new Typed('#typed-title', title);

//  namespace for the project
var app = {};

app.init = function () {
    new WOW().init();
};

//  document.ready to call the init method once the page is finished loading
$(function () {
    app.init();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFNLE9BQU87QUFDVCxhQUFTLENBQUMsdUJBQUQsQ0FEQTtBQUVULGVBQVcsRUFGRjtBQUdULGdCQUFZO0FBSEgsQ0FBYjs7QUFNQSxJQUFNLFFBQVE7QUFDVixhQUFTLENBQUMseUJBQUQsQ0FEQztBQUVWLGVBQVcsRUFGRDtBQUdWLGdCQUFZLElBSEY7QUFJVixnQkFBWSxHQUpGO0FBS1YsZ0JBQVk7QUFMRixDQUFkOztBQVFBLElBQU0sWUFBWSxJQUFJLEtBQUosQ0FBVSxhQUFWLEVBQXlCLElBQXpCLENBQWxCO0FBQ0EsSUFBTSxhQUFhLElBQUksS0FBSixDQUFVLGNBQVYsRUFBMEIsS0FBMUIsQ0FBbkI7O0FBRUE7QUFDQSxJQUFNLE1BQU0sRUFBWjs7QUFFQSxJQUFJLElBQUosR0FBVyxZQUFNO0FBQ2IsUUFBSSxHQUFKLEdBQVUsSUFBVjtBQUNILENBRkQ7O0FBSUE7QUFDQSxFQUFFLFlBQVk7QUFDVixRQUFJLElBQUo7QUFDSCxDQUZEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgbmFtZSA9IHtcclxuICAgIHN0cmluZ3M6IFtcIkNocmlzdG9waGVyIEFyc2VuYXVsdFwiXSxcclxuICAgIHR5cGVTcGVlZDogNDAsXHJcbiAgICBzaG93Q3Vyc29yOiBmYWxzZVxyXG59XHJcblxyXG5jb25zdCB0aXRsZSA9IHtcclxuICAgIHN0cmluZ3M6IFtcIkZyb250LUVuZCBXZWIgRGV2ZWxvcGVyXCJdLFxyXG4gICAgdHlwZVNwZWVkOiA0MCxcclxuICAgIHN0YXJ0RGVsYXk6IDIwMDAsXHJcbiAgICBjdXJzb3JDaGFyOiAnXycsXHJcbiAgICBzaG93Q3Vyc29yOiBmYWxzZVxyXG59XHJcbiAgXHJcbmNvbnN0IHR5cGVkTmFtZSA9IG5ldyBUeXBlZCgnI3R5cGVkLW5hbWUnLCBuYW1lKTtcclxuY29uc3QgdHlwZWRUaXRsZSA9IG5ldyBUeXBlZCgnI3R5cGVkLXRpdGxlJywgdGl0bGUpXHJcblxyXG4vLyAgbmFtZXNwYWNlIGZvciB0aGUgcHJvamVjdFxyXG5jb25zdCBhcHAgPSB7fTtcclxuXHJcbmFwcC5pbml0ID0gKCkgPT4ge1xyXG4gICAgbmV3IFdPVygpLmluaXQoKTtcclxufTtcclxuXHJcbi8vICBkb2N1bWVudC5yZWFkeSB0byBjYWxsIHRoZSBpbml0IG1ldGhvZCBvbmNlIHRoZSBwYWdlIGlzIGZpbmlzaGVkIGxvYWRpbmdcclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgICBhcHAuaW5pdCgpO1xyXG59KTsiXX0=
