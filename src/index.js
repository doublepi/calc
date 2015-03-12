"use strict"

exports.dist = function(x1, y1, x2, y2)
{
  var dx = x1 - x2;
  var dy = y1 - y2;
  return Math.sqrt(dx * dx + dy * dy);
}

exports.ang = function(x1,y1,x2,y2)
{
  return Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);
}

exports.deg2rad = function(deg)
{
  return deg * Math.PI / 180;
}

exports.rad2deg = function(rad)
{
  return rad * 180 / Math.PI;
}

