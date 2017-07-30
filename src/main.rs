fn main() {
    println!("Hello! I am from the Rust world!");
}

#[no_mangle]
pub fn add(a: i32, b: i32) -> i32 {
    return a + b;
}
