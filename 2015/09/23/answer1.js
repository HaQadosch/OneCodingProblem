var queue = () => {
  let inArray = [];
  return {
      'add': el => inArray.unshift(el)
    , 'poll': () => inArray.pop()
    , 'empty': () => inArray.length === 0
  };
};

var stack = () => {
  let q1 = queue();
  return {
      'push': (el) => q1.add(el)
    , 'pop': function() {
      let popped = undefined;
      if (!q1.empty()) {
        let q2 = queue();
        let polled = '';
        for (; !q1.empty(); polled=q1.poll(),q1.empty()?'':q2.add(polled));
        popped = polled;
        for (; !q2.empty(); q1.add(q2.poll()));    
      }
      return popped;
    }
  };
};

/**
 * Validation Scenario
 */
var s = stack();
var res = '';
s.push(5);
s.push(4);
s.push(3);
s.push(7);
s.push(8);
s.push(9);

res = s.pop(); console.assert(res === 9, 's.pop() should be 9 but is %s instead', res);
res = s.pop(); console.assert(res === 8, 's.pop() should be 8 but is %s instead', res);
res = s.pop(); console.assert(res === 7, 's.pop() should be 7 but is %s instead', res);
res = s.pop(); console.assert(res === 3, 's.pop() should be 3 but is %s instead', res);
res = s.pop(); console.assert(res === 4, 's.pop() should be 4 but is %s instead', res);
res = s.pop(); console.assert(res === 5, 's.pop() should be 5 but is %s instead', res);

s.push(1); 
res = s.pop(); console.assert(res === 1, 's.pop() should equal 1 but is %s instead', res);

s.push(1337);
res = s.pop(); console.assert(res === 1337, 's.pop() should equal 1337 but is %s instead', res);
