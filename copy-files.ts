import { copy, emptyDir } from "https://deno.land/std@0.148.0/fs/mod.ts";

emptyDir("./docs")
copy("./dist/static-blog", "./docs", { overwrite: true });
