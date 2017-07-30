const wasm = require('./main.rs')

wasm.initialize().then(module => {
  // create javascript wrapper around rust
  const add = module.cwrap('add', 'number', ['number', 'number'])
  console.log('calling rust functions from javascript')
  console.log('1 + 2 = ' + add(1, 2))
});
