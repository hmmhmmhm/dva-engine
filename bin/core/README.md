![THIS IS CRITICAL SECTION, PLEASE BE A CAREFUL IMAGE](https://i.imgur.com/gZK4gwI.png)

## 🐇 Structure

> The Core folder contains the following folders:



### 🚀 Engine [bin/core/engine]

- Engine folder contains source codes that contains the grammar of the Overwatch Workshop into a typescript interface. The implementations of the interface are not stored and are automatically generated during engine run by the codes in the generator folder.)

### 🏭 Generator [bin/core/generator]

- Generator folder contains generate scripts that automatically generate the implementations of the interfaces in the Engine folder while the engine is running. It also refers to all interface files in each country to create translations for each language in each country.



![](https://i.imgur.com/sjaHn8i.png)

### 🌐 Language [bin/core/language]

- The Language folder contains translated data and several scripts that can help for create the translation.
- There are automated i18n language management scripts, such as reading comments from type-script interface files, storing comments separately as JSON, and assigning sequence numbers to existing interface annotations like {301}

### 👩🏻‍💻 Maintain [bin/core/maintain]

- The Maintain folder contains maintenance scripts for this project.
- For example, when a new update is released in the Overwatch Workshop, and a new action function, a Value function, or an event is introduced, there is a script that automatically creates an interface file with only the input of the command.

### ✂️ Transform [bin/core/transform]

- The Transform folder contains Transpiler scripts that bind typescript grammar to an overwatch workshop so that it does not differ language grammatically from typescript when writing an overwatch workshop code.

- It includes the redefining of operators by AST parser in Ttypescript, grammatical modification, and automatic reference to scripts.



## Contribute

![CONTRIBUTE GUIDELINE LOGO IMAGE](https://i.imgur.com/AeMjvYw.png)

> If you want to contribute to the development of this project, please read the CONTRIBUTING.md file.

[Go to read the CONTRIBUTING.md file](https://github.com/hmmhmmhm/dva-engine/blob/master/CONTRIBUTING.md)