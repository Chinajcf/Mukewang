!function r(e,t,n){function o(f,i){if(!t[f]){if(!e[f]){var a="function"==typeof require&&require;if(!i&&a)return a(f,!0);if(u)return u(f,!0);var c=new Error("Cannot find module '"+f+"'");throw c.code="MODULE_NOT_FOUND",c}var s=t[f]={exports:{}};e[f][0].call(s.exports,function(r){var t=e[f][1][r];return o(t||r)},s,s.exports,r,e,t,n)}return t[f].exports}for(var u="function"==typeof require&&require,f=0;f<n.length;f++)o(n[f]);return o}({1:[function(r,e,t){new Vue({el:"#app",data:{msg:"my names is jcff"}});r("./text.js")},{"./text.js":2}],2:[function(r,e,t){console.log("text")},{}]},{},[1,2]);