let re = kf => {
  try {
    return Number(kf);
  } catch(e) {
    console.log("debug: not an integer")
  }

  if (kf == "true") return !!1;
  else if (kf == "false") return !!0;

  return kf;
}

module.exports = (vl, typ) => {
  let val = re(vl);
  switch (typeof val) {
  case "number":
    return `${val}${typ}`;
    break;
  }
}