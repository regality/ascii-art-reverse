"use strict";

var fs = require('fs');

// map of characters with opposites
var opposites = {
  "b": "d",
  "d": "b",
  "z": "s",
  "(": ")",
  ")": "(",
  "[": "]",
  "]": "[",
  "{": "}",
  "}": "{",
  "<": ">",
  ">": "<",
  "/": "\\",
  "\\": "/"
};

// Read a file, and return the reveresed and original
function reverseArtFile(file, cb) {
  fs.readFile(file, function(err, data) {
    if (err) return cb(err);
    var orig = data.toString();
    var art = reverseArt(orig);
    cb(null, art, orig);
  });
}

// Reverse a string of ascii art
function reverseArt(art) {
  art = art.replace('\r\n', '\n')
           .split('\n');

  var maxLineLen = art.reduce(function(max, line) {
    return Math.max(line.length, max);
  }, 0);

  var art = art.map(function(line) {
    var pad = (new Array(1 + maxLineLen - line.length)).join(' ');
    line = reverseLine(line + pad);
    return line.replace(/\s\+$/, '');
  }).join('\n');

  return art;
}

// Reverse a line of ascii art
function reverseLine(art) {
  var rev = '';
  for (var i = art.length - 1; i >= 0; --i) {
    if (opposites.hasOwnProperty(art[i])) {
      rev += opposites[art[i]];
    } else {
      rev += art[i];
    }
  }
  return rev;
}

module.exports = reverseArt;
reverseArt.reverseArtFile = reverseArtFile;
