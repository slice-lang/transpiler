# hello world
```rust
print("Hello World!\n");
```
# fib in slice
```rust
fun fib(indx of u8) -> u64 {
  if (indx <= 1) {
    ret 1;
  }
  ret fib(indx - 1) + fib(indx - 2);
}
```
# use of stdlib
```rust
use stdlib:math;

fun loop(pulp of i64) -> i8 {
	while !(pulp in -128..127) {
		pulp -= 256;
	}
	ret pulp of i8;
}

fun squid(tok of i8) -> i64 {
	let main of i64 = math:rand();
	if main of f64 >= (math:pow(2, 63) - (tok of f64)) {
		ret main;
	} else { ** unnecessary else, just for demonstration
		ret main + (tok of f64);
	}
}

let fipt of i8 = loop -< squid -< 111; ** equivalent to loop(squid(111));
```
# loop
```rust
loop 3 {
  while 1 == 2 {
    print("wut fail\n");
  }
  print("e");
}
```
output: `eee`
  
# expressions
```rust
|>u8 6|
** is equivalent to
fun () -> u8 {
  ret 6;
}

|top-u32>i64 top of i64|
** is
fun (top of u32) -> i64 {
  ret top of i64;
}
```