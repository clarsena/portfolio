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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFNLE9BQU87QUFDVCxhQUFTLENBQUMsdUJBQUQsQ0FEQTtBQUVULGVBQVcsRUFGRjtBQUdULGdCQUFZO0FBSEgsQ0FBYjs7QUFNQSxJQUFNLFFBQVE7QUFDVixhQUFTLENBQUMseUJBQUQsQ0FEQztBQUVWLGVBQVcsRUFGRDtBQUdWLGdCQUFZLElBSEY7QUFJVixnQkFBWTtBQUpGLENBQWQ7O0FBT0EsSUFBTSxZQUFZLElBQUksS0FBSixDQUFVLGFBQVYsRUFBeUIsSUFBekIsQ0FBbEI7QUFDQSxJQUFNLGFBQWEsSUFBSSxLQUFKLENBQVUsY0FBVixFQUEwQixLQUExQixDQUFuQjs7QUFFQTtBQUNBLElBQU0sTUFBTSxFQUFaOztBQUVBLElBQUksSUFBSixHQUFXLFlBQU07QUFDYixRQUFJLEdBQUosR0FBVSxJQUFWO0FBQ0gsQ0FGRDs7QUFJQTtBQUNBLEVBQUUsWUFBWTtBQUNWLFFBQUksSUFBSjtBQUNILENBRkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCBuYW1lID0ge1xuICAgIHN0cmluZ3M6IFtcIkNocmlzdG9waGVyIEFyc2VuYXVsdFwiXSxcbiAgICB0eXBlU3BlZWQ6IDQwLFxuICAgIHNob3dDdXJzb3I6IGZhbHNlXG59XG5cbmNvbnN0IHRpdGxlID0ge1xuICAgIHN0cmluZ3M6IFtcIkZyb250LUVuZCBXZWIgRGV2ZWxvcGVyXCJdLFxuICAgIHR5cGVTcGVlZDogNDAsXG4gICAgc3RhcnREZWxheTogMjAwMCxcbiAgICBzaG93Q3Vyc29yOiBmYWxzZVxufVxuICBcbmNvbnN0IHR5cGVkTmFtZSA9IG5ldyBUeXBlZCgnI3R5cGVkLW5hbWUnLCBuYW1lKTtcbmNvbnN0IHR5cGVkVGl0bGUgPSBuZXcgVHlwZWQoJyN0eXBlZC10aXRsZScsIHRpdGxlKVxuXG4vLyAgbmFtZXNwYWNlIGZvciB0aGUgcHJvamVjdFxuY29uc3QgYXBwID0ge307XG5cbmFwcC5pbml0ID0gKCkgPT4ge1xuICAgIG5ldyBXT1coKS5pbml0KCk7XG59O1xuXG4vLyAgZG9jdW1lbnQucmVhZHkgdG8gY2FsbCB0aGUgaW5pdCBtZXRob2Qgb25jZSB0aGUgcGFnZSBpcyBmaW5pc2hlZCBsb2FkaW5nXG4kKGZ1bmN0aW9uICgpIHtcbiAgICBhcHAuaW5pdCgpO1xufSk7Il19
