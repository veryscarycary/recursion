// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  var body = document.body;
  var children = body.childNodes;
  var elementsByClassName = [];

  // recursive function that checks each set of child nodes
  var checkTheChildren = function (childrenArray, className) {

    childrenArray.forEach(function(child) {
      if (child.nodeType !== 3 && child.classList.length) {
        for (var i = 0; i<child.classList.length; i++) {
          if (child.classList[i] === className) {
            elementsByClassName.push(child);
          }
        }
      }

      if (child.childNodes.length > 0) {
        checkTheChildren(child.childNodes, className);
      }
    });
  };

  if (body.classList.length) {  // first check the body
    for (var i = 0; i<body.classList.length; i++) {
      if (body.classList[i] === className) {
        elementsByClassName.push(body);
      }
    }
  }
  checkTheChildren(children, className);  // then recursively check children

  return elementsByClassName;
};
