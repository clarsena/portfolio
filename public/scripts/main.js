(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var name = {
    strings: ['Christopher Arsenault'],
    typeSpeed: 40,
    showCursor: false
};

var title = {
    strings: ['Front-End Web Developer'],
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
    $('.siteLogo').click(function () {
        $('.hamburgerMenu').addClass('show');
    });
    $('.exitResponsive').click(function () {
        $('.hamburgerMenu').removeClass('show');
    });
    $('.navLinkHidden').click(function () {
        $('.hamburgerMenu').removeClass('show');
    });
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFNLE9BQU87QUFDVCxhQUFTLENBQUMsdUJBQUQsQ0FEQTtBQUVULGVBQVcsRUFGRjtBQUdULGdCQUFZO0FBSEgsQ0FBYjs7QUFNQSxJQUFNLFFBQVE7QUFDVixhQUFTLENBQUMseUJBQUQsQ0FEQztBQUVWLGVBQVcsRUFGRDtBQUdWLGdCQUFZLElBSEY7QUFJVixnQkFBWSxHQUpGO0FBS1YsZ0JBQVk7QUFMRixDQUFkOztBQVFBLElBQU0sWUFBWSxJQUFJLEtBQUosQ0FBVSxhQUFWLEVBQXlCLElBQXpCLENBQWxCO0FBQ0EsSUFBTSxhQUFhLElBQUksS0FBSixDQUFVLGNBQVYsRUFBMEIsS0FBMUIsQ0FBbkI7O0FBRUE7QUFDQSxJQUFNLE1BQU0sRUFBWjs7QUFFQSxJQUFJLElBQUosR0FBVyxZQUFNO0FBQ2IsUUFBSSxHQUFKLEdBQVUsSUFBVjtBQUNILENBRkQ7O0FBSUE7QUFDQSxFQUFFLFlBQVk7QUFDVixRQUFJLElBQUo7QUFDQSxNQUFFLFdBQUYsRUFBZSxLQUFmLENBQXFCLFlBQVc7QUFDNUIsVUFBRSxnQkFBRixFQUFvQixRQUFwQixDQUE2QixNQUE3QjtBQUNILEtBRkQ7QUFHQSxNQUFFLGlCQUFGLEVBQXFCLEtBQXJCLENBQTJCLFlBQVc7QUFDbEMsVUFBRSxnQkFBRixFQUFvQixXQUFwQixDQUFnQyxNQUFoQztBQUNILEtBRkQ7QUFHQSxNQUFFLGdCQUFGLEVBQW9CLEtBQXBCLENBQTBCLFlBQVc7QUFDakMsVUFBRSxnQkFBRixFQUFvQixXQUFwQixDQUFnQyxNQUFoQztBQUNILEtBRkQ7QUFJSCxDQVpEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgbmFtZSA9IHtcclxuICAgIHN0cmluZ3M6IFsnQ2hyaXN0b3BoZXIgQXJzZW5hdWx0J10sXHJcbiAgICB0eXBlU3BlZWQ6IDQwLFxyXG4gICAgc2hvd0N1cnNvcjogZmFsc2VcclxufVxyXG5cclxuY29uc3QgdGl0bGUgPSB7XHJcbiAgICBzdHJpbmdzOiBbJ0Zyb250LUVuZCBXZWIgRGV2ZWxvcGVyJ10sXHJcbiAgICB0eXBlU3BlZWQ6IDQwLFxyXG4gICAgc3RhcnREZWxheTogMjAwMCxcclxuICAgIGN1cnNvckNoYXI6ICdfJyxcclxuICAgIHNob3dDdXJzb3I6IGZhbHNlXHJcbn1cclxuICBcclxuY29uc3QgdHlwZWROYW1lID0gbmV3IFR5cGVkKCcjdHlwZWQtbmFtZScsIG5hbWUpO1xyXG5jb25zdCB0eXBlZFRpdGxlID0gbmV3IFR5cGVkKCcjdHlwZWQtdGl0bGUnLCB0aXRsZSlcclxuXHJcbi8vICBuYW1lc3BhY2UgZm9yIHRoZSBwcm9qZWN0XHJcbmNvbnN0IGFwcCA9IHt9O1xyXG5cclxuYXBwLmluaXQgPSAoKSA9PiB7XHJcbiAgICBuZXcgV09XKCkuaW5pdCgpO1xyXG59O1xyXG5cclxuLy8gIGRvY3VtZW50LnJlYWR5IHRvIGNhbGwgdGhlIGluaXQgbWV0aG9kIG9uY2UgdGhlIHBhZ2UgaXMgZmluaXNoZWQgbG9hZGluZ1xyXG4kKGZ1bmN0aW9uICgpIHtcclxuICAgIGFwcC5pbml0KCk7XHJcbiAgICAkKCcuc2l0ZUxvZ28nKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcuaGFtYnVyZ2VyTWVudScpLmFkZENsYXNzKCdzaG93Jyk7XHJcbiAgICB9KTtcclxuICAgICQoJy5leGl0UmVzcG9uc2l2ZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJy5oYW1idXJnZXJNZW51JykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuICAgIH0pO1xyXG4gICAgJCgnLm5hdkxpbmtIaWRkZW4nKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcuaGFtYnVyZ2VyTWVudScpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcbiAgICB9KTtcclxuICAgIFxyXG59KTsiXX0=
