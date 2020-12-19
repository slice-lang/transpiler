const f = require("fs");

const src = f.readFileSync("main.slc").toString().split("\n");

const vars = {};

let proc = require("./process");
let data = ["fn main() {"];
let write = k => data.push(k);
let procvar = l => {
  let val = vars[l];
  write(`let ${l}: ${val.typ} = ${proc(val.value, val.typ)};`);
}

for (let i = 0; i < src.length; ++i) {
  let tok = src[i].split(/[\s=;]+/g).map(glok => {
    if (glok == "**") return "//";
    return glok;
  });
  console.log(tok);
  switch (tok[0]) {
  case "let":
    vars[tok[1]] = { typ: tok[3], value: tok[4] };
    procvar(tok[1]);
    continue;
    break;
  }
  write(tok.join(" "));
}

data.push("}");
f.writeFileSync("main.rs", data.join("\n"));

