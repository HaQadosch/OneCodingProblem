var permute = function permute(unperm, perms) {
  var allPerms = [];
  if (unperm.length === 0) {
    allPerms = perms;
  } else {
    var curNumber = unperm[0];
    var newUnperm = unperm.slice(1);
    if (/0|1/i.test(curNumber)) {
      allPerms = permute(newUnperm, perms.length?perms.map(bin => bin+curNumber):[curNumber]);
    } else {
      allPerms = permute(newUnperm, perms.length?perms.map(bin => bin+'0'):['0'])
      .concat(permute(newUnperm, perms.length?perms.map(bin => bin+'1'):['1']));
    }
  }
  return allPerms;
};
var answer = function (series) {return permute(series, [])};
answer('10?');
/*
100,101
*/
answer('10??');
/*
1000,1001,1010,1011
*/

console.time("answer time");
answer('01??01??0101??01??01??01??01??01');
console.timeEnd("answer time");
