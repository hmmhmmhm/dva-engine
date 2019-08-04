![D.VA Engine Logo of Pink](https://i.imgur.com/mDreImI.png)

# 🌈 D.VA Engine (WIP)

🌺  Advanced Script Engine for Overwatch Workshop

> - Overwatch Workshop Ruleset with Typescript (+JavaScript)



![D.VA Engine Logo of Blue](https://i.imgur.com/pjbtlQF.png)

> **DVA-ENGINE**: Transfiler engine for advanced developers.



## 💬 Why?

The ruleset of an overwatch workshop can be modified by default only within the game. for this reason, IDE with many functions is not available. (This is certainly not good news for modern developers.)

## 💭 How?

That is why the **<u>D.VA Engine</u>** (Before name: **<u>overwatch-workshop-javascript</u>**) is being developed. Overwatch's workshop code is saved as an extension file called `.ows`, and the editor code can be extracted or inserted through copy and paste from the editor. The goal is to redefine the code of these existing `.ows` files as typescript interface and run them on the web editor.



![Why Do I Use this Image](https://i.imgur.com/bvYaVgw.png)

> D.Va Engine has been written of 100% Typescript!



## 💡 What?

We purposed to make it possible to obtain the overwatch workshop code through typed or javascript coding on the web. This process will be provide automatic completion or exposure to interface descriptions so that even those who do not know javascript can easily use the basic grammar with a little knowledge.



![Play now! In Online Browser! Image](https://i.imgur.com/DAoSu2i.png)

> D.Va engine can be used directly on the web browser!



## 🌐 In Browser

(Preparing..)



## 💻 In Local

### 📥 Prepare

> To use the D.Va engine on a regular PC (Windows, Mac, Linux), the following SW's must be installed:

1. [Node.JS](https://nodejs.org/en/)

   > Node.js is a language runtime system that operates JavaScript on a PC (without browser). Please complete the installation on the Node.JS website. (It is recommended that you receive the latest possible version.)

2. [Git Bash](https://git-scm.com/download/win)

   > Some OS doesn't have Git (version management system) and Bash (standard UNIX command system) by default. Therefore, it is recommended to install Git-SCM.

3. [Visual Studio Code (VSCode)](https://code.visualstudio.com/)

   > VSCode is an IDE(Integrated Development Environment) development tool that supports Typescripts. It is safe to use various development tools such as Atom and Bracket. (The main project contributor has recommends VSCode.)

### 📦 Download

> Run Terminal or Git Bash to enter the following command in the folder where you want to download and install (it also can be done in VSCode):

```bash
git clone https://github.com/hmmhmmhm/dva-engine
cd ./dva-engine
```

### 🚀 Run

> Enter the command below to run the engine. (It has be provide automatic install & initialize)
>
> (You do not need to pre-running commands such as `npm install`.)

```bash
npm start
```

Everything is now done! It may take 1 to 2 minutes for the first run. (Engine is require time to download sub-modules and generate other source codes for the first time.)



## 🌌 Automatic Update

> When the D.Va Engine is Starting, it'll be automatically check that it available to update. You can choose whether to run the update with Y (Yes) or N (No).

Many developers thought that they would be burdened with engine updates each time. So I implemented the built-in engine auto-update feature. (This update system uses This Github Repo data. So I don't have any network traffic pressure.)



## 👩‍💻 API Usage

![D.VA ENGINE PLUG-IN SECTION Image](https://i.imgur.com/dFB36ZM.png)

### ❔ How to Use

> In this page, We'll describe the process of coding on the development tool (**<u>VSCode</u>**).

> **<u>The engine must be running before following the instructions below.</u>** (Files that have been converted to a pastable format are saved as **<u>'release/script.ts'</u>**.)

> If executed via the command 'npm start' the file **<u>'release/script.ts'</u>** is always recreated as soon as the code is saved. (Only at the beginning is slow, after which the conversion will require a speed of less than 1 second.)



#### 📜 Check `src/script.ts`

When the engine is fully running, a file 'src/script.ts' is created. If you open the `src/script.ts' file, you can see the following source code:

![Code Example](https://i.imgur.com/5scnR9C.png)

#### 🌐 Choose Language

If you look at the end of the second line, you can see that the name of the language is written. You can modify this section and choose which language to use.

![Code Example](https://i.imgur.com/GCSTL6T.png)



#### 🔎 Check Hint

> In VSCode, you can check the list of available functions automatically or you can check the description of the variable or function directly through a feature called Intellisense.



##### ❔ Mouse Hint

When there is a function or variable that you don't know, you can find a description of the code by placing the mouse at that location.

![Code Example](https://i.imgur.com/ycILP1Z.png)



You can also see that the multi-lingual language description is well displayed.

![Code Example](https://i.imgur.com/ujUGYSQ.png)



##### ❔ Dot Hint

When you type dot(.) after entering any class or namespace, you can see the list of available functions.

![Code Example](https://i.imgur.com/JxQGf2P.png)



##### ❔ Trigger Hint

While typing a generic word, you can check the list of available variables through `Ctrl+Space` or `Ctrl+Alt+Space`.

![Code Example](https://i.imgur.com/TAP3GjL.png)



##### ❔ Trigger Hint Setup Guide

If entering `Ctrl+Space` or `Ctrl+Alt+Space` does not provide a hint, enter `Ctrl+K` and `Ctrk+S` and reset the hint shortcut by searching for `triggerSuggest`.

![Editor Example](https://i.imgur.com/N5WVlv6.png)



#### 👩‍💻 Rule Coding Guide

The Rule consists of a  class. When you type like a `new Rule ({...})`, the information you need to enter is displayed.

![Code Example](https://i.imgur.com/1bHHST9.png)

- **description**
  - Here you can enter a string description for the rule.
  - We may not have to use the rule descriptions. Because We can remain code comments through `// BlaBla` or `/* BlaBla */` in our scripts.
  - But if you write down the rule description here, it will be displayed on the In-Game Rule Editor.
- **event**
  - All available events can be checked by entering `RuleEvent.`
  - Since there can be multiple conditions for the execution of the rule, it must be entered within the array (like a `condition: [...]`)
- **condition**
  - Indicates the conditions for the action of the rule to be executed.
  - You can write conditional expression or reference the condition variable.
  - Condition operator is must use one of the following: `==`, `!=`, `<`, `<=`, `>`, `>=`, `===`
  - To view a list of conditional value functions, Type `Value.`
  - It doesn't matter what form the conditional statement is entered, provided the above conditions are observed. (The engine will be converted to the workshop code, no matter how complicated the conditions may be.)
    ![Code Example](https://i.imgur.com/OfNtdM6.png)
  - The results for the above code are as follows. ![Code Example](https://i.imgur.com/gVt4fjI.png)
- **action**
  - All available events can be checked by entering `Action.`
  - Since there can be multiple action for the execution of the rule, it must be entered within the array (like a `action: [...]`)



#### 👩‍💻 Categorized functions Guide

![Code Example](https://i.imgur.com/z8MKM9s.png)

> 

- RuleEvent
  - 
- Value
  - 
- Action
  - 
- Level
  - 
- Server
  - 
- Match
  - 
- Util
  - 
- Type
  - 
- Classes
  - 

~?



#### 👩‍💻 Class Types Guide

![Code Example](https://i.imgur.com/m6HpeCr.png)

> 

- Rule
  - 
- Player
  - 
- Event
  - 
- Entity
  - 
- Team
  - 
- Vector
  - 

~?



#### 👩‍💻 Data Types Guide

![Code Example](https://i.imgur.com/i5sr4vE.png)

- Array
- Bool
- Number
- String

~?



#### 👩‍💻 Number Coding Guide

Any function that returns a numeric value or a numeric value can be computed using the operator of an existing typescript. (It fully functional!)

##### Before Transpile

![Code Example](https://i.imgur.com/byQN3TA.png)

##### After Transpile

![](https://i.imgur.com/PswHbry.png)



#### 👩‍💻 Plug-In Guide

> ~?

~?



> 

- Transfiler's Grammar Change Target
  - script.ts
  - script_`*`.ts
  - @`*`.ts

~?



### 📔 Command List

- `npm start` (or `npm run start`)
  - 

~?



## 🌏 Multilingual Support

![D.VA ENGINE HAS A MULTILINGUAL Image](https://i.imgur.com/sjaHn8i.png)

## ✅ Please make a contribution to the translation work.

> The main project contributor cannot read languages other than English and Korean. It means that no other language can be supported by Engine without the help of other contributors.

[Go to read the Language/README.md file](https://github.com/hmmhmmhm/dva-engine/tree/master/bin/core/language)



## 📮 Contribute

![CONTRIBUTE GUIDELINE LOGO IMAGE](https://i.imgur.com/AeMjvYw.png)

> If you want to contribute to the development of this project, please read the CONTRIBUTING.md file.

[Go to read the CONTRIBUTING.md file](https://github.com/hmmhmmhm/dva-engine/blob/master/CONTRIBUTING.md)



## ✅ License

> Translation data is owned by Blizzard (Only source code is guaranteed MIT License).

MIT Licensed.