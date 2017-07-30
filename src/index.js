const wasm = require('./main.rs')

wasm.initialize().then(module => {
  // create javascript wrapper around rust
  const add = module.cwrap('add', 'number', ['number', 'number'])
  alert('Hello from Web Assembly!\nUsing Rust, I calculated ' + '1 + 2 = ' + add(1, 2) + ', and ' + '3 + 4 = ' + add(3, 4))
});
