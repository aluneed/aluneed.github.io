import { copy, emptyDir } from "https://deno.land/std@0.148.0/fs/mod.ts";

console.log(await Deno.stat("./"));
emptyDir("./docs")
copy("./dist/static-blog/index.html", "./dist/static-blog/404.html", { overwrite: true });
copy("./dist/static-blog", "./docs", { overwrite: true });
console.log("success");