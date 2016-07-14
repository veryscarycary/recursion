// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  if (typeof obj === 'number') {
    return obj.toString();
  } else if (typeof obj === 'string') {
    return '"' + obj+ '"';
  } else if (typeof obj === 'undefined') {
    return 'undefined';
  } else if (typeof obj === 'function' || obj === null) {
    return 'null';
  } else if (typeof obj === 'boolean') {
    return obj.toString();
  } else if (typeof obj === 'object') {
    if (Array.isArray(obj)) {
      var arrayString = [];

      obj.forEach(function (item) {
        if (typeof item === 'string') {
          arrayString.push('"' + item + '"');
        } else {
          arrayString.push(stringifyJSON(item));
        }
      });

      return '[' + arrayString.join(',') + ']';
    } else {
      var keys = Object.keys(obj);
      var value;
      var pairs = [];
      var pairString;

      for (var i = 0; i < keys.length; i++) {
        pairString = '"' + keys[i] + '"';
        value = obj[keys[i]];

        if (typeof value === 'string') {
          pairString += ':"' + value + '"';
        } else if (value === undefined || typeof value === 'function') {
          continue;
        } else {
          pairString += ':' + stringifyJSON(value);
        }
        pairs.push(pairString);
      }
      return '{' + pairs.join(',') + '}';
    }
  }
};

//console.log({"functions""undefined"});
//console.log({"functions","undefined"});
