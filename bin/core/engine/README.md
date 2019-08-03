![THIS IS CRITICAL SECTION, PLEASE BE A CAREFUL IMAGE](https://i.imgur.com/gZK4gwI.png)

## 🐇 Structure

> The Engine folder contains the following folders:



### 📜 Interface [bin/core/engine/interface]

- The most primitive interface code that describes the function structure of an overwatch workshop as typescript. Action, Event, Value. Code Comments are all contained in a separate language file in the JSON file, which is replaced by an index number.

### 📦 Reformer [bin/core/engine/reformer]

- **index.ts** - A script that binds workshop functions into classes. It based on the parameter type of the Overwatch Workshop function, the functions that require the same factors are grouped into classes. Only namespace exists in this index.ts, and the implementations of namespace exist separately in the `child/` folder. An implementer that is placed in the folder `child/` is created by the reformer.ts file on the generator folder.
- **compiler.ts** - This script contains functions to be used by transpiler during grammar change.
- **rule.ts** - A script that defines the Rule, which is the top-level specification of an overwatch workshop. The original code converted into a workshop code is contained within the class within this Rule Script.

### 📁  Resolver [bin/core/engine/resolver]

- index.ts - A script that binds workshop functions into namespaces. To be precise, the functions that require the same parameters based on the parameters of the Overwatch Workshop function are grouped into namespaces. Only namespace exists in this index.ts, and the implementations of namespace exist separately in the `child/` folder. An implementer that is placed in the folder `child/` is created by the reformer.ts file on the generator folder.

### 📐 Type [bin/core/engine/type]

- A bundle of functions that can be used as a type of parameter value in an overwatch workshop function. depending on the parameter type, the functions are grouped together by the typescript type.



## Contribute

![CONTRIBUTE GUIDELINE LOGO IMAGE](https://i.imgur.com/AeMjvYw.png)

> If you want to contribute to the development of this project, please read the CONTRIBUTING.md file.

[Go to read the CONTRIBUTING.md file](https://github.com/hmmhmmhm/dva-engine/blob/master/CONTRIBUTING.md)