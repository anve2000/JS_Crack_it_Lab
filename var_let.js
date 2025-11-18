console.log('VAR Scope')

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}

console.log('LET scope')

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}


// Ans
// VAR Scope
// LET Scope
// 3
// 3
// 3
// 0
// 1
// 2
