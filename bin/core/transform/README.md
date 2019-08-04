![THIS IS CRITICAL SECTION, PLEASE BE A CAREFUL IMAGE](https://i.imgur.com/gZK4gwI.png)

## 💬About typescript transpiler

> DVA engine has provides a better user experience through transfile by Ttypescript.

- The Transform folder contains Transpiler scripts that bind typescript grammar to an overwatch workshop so that it does not differ language grammatically from typescript when writing an overwatch workshop code.
- It includes the redefining of operators by AST parser in Ttypescript, grammatical modification, and automatic reference to scripts.



## 🐇 Structure

> The Generator folder contains the following files:



## 👩🏻‍✈️ index.ts [bin/core/transform/index.ts]

- A script that executes logic sequentially to modify the grammar.



## 📐 hook.ts [bin/core/transform/hook.ts]

- A frame configured for more intuitive use of the AST parser plugin feature in the Ttypescript.



## 🚀 afterSuccess.ts [bin/core/transform/afterSuccess.ts]

- A script that runs after Ttypescript's grammatical transformation is complete.
- The script converts the typescript to the Overwatch Workshop language by executing `dist/src/script.ts` or `dist/test/script.ts`.



## 👩🏻‍🏫 helper.ts [bin/core/transform/helper.ts]

- This script contains real logic for changing grammar.



## 👁‍🗨 watch.ts [bin/core/transform/watch.ts]

- This script is a command script that is run through the `npm start' command`. Through the `HMR` function, when a user modifies the source code in the project folder, not all of the source codes, but only the modified files are recompiled, which greatly reduces the compilation time.



## Contribute

![CONTRIBUTE GUIDELINE LOGO IMAGE](https://i.imgur.com/AeMjvYw.png)

> If you want to contribute to the development of this project, please read the CONTRIBUTING.md file.

[Go to read the CONTRIBUTING.md file](https://github.com/hmmhmmhm/dva-engine/blob/master/CONTRIBUTING.md)