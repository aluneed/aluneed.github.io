import { copy, emptyDir } from "https://deno.land/std@0.148.0/fs/mod.ts";

console.log(Deno.stat("./"));
emptyDir("./docs")
copy("./dist/static-blog", "./docs", { overwrite: true });
console.log("success");