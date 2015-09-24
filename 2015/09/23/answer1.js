var queue = () => {
  let inArray = [];
  return {
      'add': el => inArray.unshift(el)
    , 'poll': () => inArray.pop()
    , 'empty': () => inArray.length === 0
  }
};

var stack = () => {
  let q1 = queue();
  return {
      'push': (el) => q1.add(el)
    , 'pop': function () {
      var inpop = function inpop(elt, q1, q2, undefined) {
        var popped = '';
        if (elt === undefined && q1.empty() && q2.empty()) {
          popped = undefined;
        } else if (elt === undefined && !q1.empty()) {
          let trans = q1.poll();
          if (q1.empty()) {
            inpop(trans, q1, q2);
          } else {
            inpop(elt, q1, q2.add(trans));        
          }
        } else if (elt !== undefined && q2.empty()) {
          popped = elt;
        } else if (elt !== undefined && !q2.empty()) {
          inpop(elt, q1.add(q2.poll()), q2);
        }
        return popped;
      };
      inpop(undefined, q1, queue());
    }
  };
};
var s = stack();
s.push(1);
s.push(2);
s.push(3);
s.push(4);
//s.pop();