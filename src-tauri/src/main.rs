#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

extern crate base64;
use base64::{decode, encode};

// base64解码
#[tauri::command]
fn base64_encode(input: &str) -> String {
  return encode(input);
}

// base64编码
#[tauri::command]
fn base64_decode(input: &str) -> String {
  let bytes = decode(input).unwrap_or(Vec::new());
  return String::from_utf8(bytes).unwrap();
}


fn main() {
  let context = tauri::generate_context!();
  tauri::Builder::default()
   .invoke_handler(tauri::generate_handler![
      base64_encode,
      base64_decode,
    ])
    .menu(tauri::Menu::os_default(&context.package_info().name))
    .run(context)
    .expect("error while running tauri application");
}
