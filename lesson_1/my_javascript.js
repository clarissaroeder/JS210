let a = 0;

0 && (a += 1);
a && (a -= 1);
a || (a += 1);

console.log(a);