function getValue(){
    return "Hello";
}

let  any:any = getValue();
any.method();          // allowed — no check
any.prop = 1;          // allowed
let s: string = any;   // allowed — implicit any → string


let  unknown:unknown = getValue();
unknown.method();          // error:
unknown.prop;              // error:
let p: string = unknown;   // error: 

// Must narrow first:
if (typeof unknown === 'string') {
  let s: string = unknown; // OK
}