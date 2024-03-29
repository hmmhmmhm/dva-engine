

![FREE HONG KONG](https://i.imgur.com/KLvAahh.png)

## 🌂 BOYCOTT BLIZZARD

> From Republic of Korea to Hong Kong

The D.Va Engine was developed by Korean. And we're 100% on Hong Kong's side. We are aware of the recent issue. Hong Kong gamers have shown their love for their country in interviews since the end of the tournament. 

Of course, We can understand Blizzard's position to remain politically neutral on the issue. However, Blizzard not only suspended the player's qualifications, but also reduced the prize money to zero, and then removed all that game match videos from the Internet. Does it make sense that the player will forfeit the prize money for suspension because of the actions he made in the post-game interview?

Blizzard can of course punish the competition player. However, given the usual level of fines, Blizzard's consistency in action should have been a light fine. Even the one who posted the notice on Blizzard Reddit was a user who had mocked the Hong Kong protests.

Consideration of Chinese people should be as same as that of Hong Kongers. Should have been as careful, and heedful in disciplinary proceedings, Blizzard was afraid of China and chose to keep Hong Kong’s mouth shut.

💬 **Democratic** Senator Ron Wyden said:

```
“Blizzard shows it is willing to humiliate itself to please the Chinese Communist Party,” Sen. Ron Wyden (D-OR)
```

💬 **Republican** Senator Marco Rubio said:

```
“Recognize what’s happening here. People who don’t live in China must  either self censor or face dismissal & suspensions,” Sen. Marco  Rubio (R-FL)
```

Isn't Blizzard a company that values political correctness? Is this right as an American company? Blizzard had the opportunity to defend his players and democracy, but they did not. So it's time for gamers and custom game developers to tell Hong Kong instead of Blizzard.

Hong Kong is a totally different country from China, and it needs to be protected as a democratic country. many people will not be silent and all society's eyes are in Hong Kong. D.Va engine developers pray for Hong Kong's freedom.



![D.VA Engine Logo of Pink](https://i.imgur.com/mDreImI.png)



# 🌈 D.VA Engine

🌺  Advanced Script Engine for Overwatch Workshop

> - Overwatch Workshop Ruleset with Typescript (+JavaScript)



![D.VA Engine Logo of Blue](https://i.imgur.com/pjbtlQF.png)

> **DVA-ENGINE**: Transfiler engine for advanced developers.



## 💬 Why?

Recently, under the name of Workshop in Overwatch, a custom game mode has been created where users can program game rules. Workshop can be developed by setting up Event and Condition and Action in Rule.

But the ruleset of an overwatch workshop can be modified by default only within the game. for this reason, IDE with many functions is not available. (This is certainly not good news for modern developers.)

## 💭 How?

That is why the **<u>D.VA Engine</u>** (Before name: **<u>overwatch-workshop-javascript</u>**) is being developed. Overwatch's workshop code is saved as an extension file called `.ows`, and the editor code can be extracted or inserted through copy and paste from the editor. The goal is to redefine the code of these existing `.ows` files as typescript interface and run them on the web editor.



![Why Do I Use this Image](https://i.imgur.com/bvYaVgw.png)

> D.Va Engine has been written of 100% Typescript!



## 💡 What?

We purposed to make it possible to obtain the overwatch workshop code through typed or javascript coding on the web. This process will be provide automatic completion or exposure to interface descriptions so that even those who do not know javascript can easily use the basic grammar with a little knowledge.



![Play now! In Online Browser! Image](https://i.imgur.com/DAoSu2i.png)

> D.Va engine can be used directly on the web browser!



## 🌐 In Browser

> It's also available on mobile through the latest Chrome app.

[NOW YOU CAN ENTER HERE](https://codesandbox.io/s/github/hmmhmmhm/dva-engine-codesandbox)



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



#### 👩‍💻 Advanced Parameter Intellisense

> When using a workshop function, be sure to check which function is available in the parameters hints on the list.

![Code Example](https://i.imgur.com/WScPfpO.png)

The parameter classification name that you can enter at that location, such as `Type.*` is displayed as a hint. If you enter it the same way, you can see the list of functions available at that parameter.

![Code Example](https://i.imgur.com/jqfiM1h.png)

The sub-parameter is also fully described.



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

> This is the most basic set of functions of the typescript workshop interface.

- **RuleEvent**
  - A collection of event functions that are used to create rules.
- **Value**
  - A collection of function values that you can write to a conditional statement and some action functions when you create a rule.
- **Action**
  - A collection of action functions that you can use to create rules.
- **Level**
  - A collection of functions related to an overwatch game map.
- **Server**
  - A collection of functions related to an overwatch workshop server.
- **Match**
  - A collection of functions related to an overwatch workshop competition.
- **Util**
  - A collection of utility functions that can be used to develop an overwatch workshop.
- **Type**
  - Classified collection of functions that can be used as parameter values when calling all workshop functions.
- **Classes**
  - A collection of functions classified according to the parameters of an overwatch workshop.



#### 👩‍💻 Class Types Guide

![Code Example](https://i.imgur.com/m6HpeCr.png)

> A collection of functions classified according to the parameters of an overwatch workshop.

- **Rule**
  - Rule class for overwatch workshop rules.
- **Player**
  - ![Code Example](https://i.imgur.com/feyOKRo.png)
  - If you give the Player a value when you create a class, it shows the available functions associated with that game player and automatically binds the player at the same time. (You don't have to pass the player as a parameter each time you use a player-related function.)
- **Event**
  - ![Code Example](https://i.imgur.com/w3tUkGr.png)
  - A class that provides function related to an event in static function. There is currently no function directly related to the event, so there is no function as a class instance that binds parameters.
- **Entity**
  - ![Example Code](https://i.imgur.com/7rGd3MM.png)
  - Class that binds functions associated with an entity (the current entity-related function is very small and is not practical)
- **Team**
  - ![Code Example](https://i.imgur.com/xsKZLzV.png)
  - A class that binds functions related to a team.
- **Vector**
  - ![Code Example](https://i.imgur.com/m8h8reP.png)
  - A class that binds functions related to a vector.



#### 👩‍💻 Data Types Guide

![Code Example](https://i.imgur.com/i5sr4vE.png)

> Overwatch Workshop functions classified for use as the default data type.

- **Bool**
  - A collection of functions that return values for an bool type.
- **Number**
  - A collection of functions that return values for an number type.
- **Array**
  - A collection of functions that return values for an array type.
  - **TODO**: Binding support for typescript grammar of array is not yet available.
- **String**
  - A collection of functions that return values for an string type.



#### 👩‍💻 Number Coding Guide

Any function that returns a numeric value or a numeric value can be computed using the operator of an existing typescript. (It fully functional!)

##### Before Transpile

![Code Example](https://i.imgur.com/byQN3TA.png)

##### After Transpile

![](https://i.imgur.com/PswHbry.png)



#### 👩‍💻 Plug-In Guide

> **TODO**: D.Va Engine is developing a plug-in system that allows other users to re-use user-generated rules. After downloading scripts like 'myRuleset.ts' through 'npm', we are developing a structure that can be distributed over the Internet to other users.



##### Plug-in Template

**TODO**: This feature is currently in the process of working.



##### Naming convention

The targets for which the engine binds typescript to workshop grammar are specific files with the following naming conventions: Files that do not conform to the naming conventions below will not bind to workshop grammar.

> If you want to write a code that is not relevant to the Overwatch Workshop, it must be written in a separate file that is not included in the naming convention below.

- script.ts
- script_`*`.ts
- @`*`.ts



### ❔ How to Apply

> Procedure for applying the conversion result of the engine code to the overwatch workshop is as follows.



![](https://i.imgur.com/vpCAw92.png)

Copy the contents of the 'release/script.ows' file.



![](https://i.imgur.com/01TrS8V.png)

Enter the `GAME BROWSER` from the game play.



![](https://i.imgur.com/BJ3Yvol.png)

Click the `CREATE` button.



![](https://i.imgur.com/iRDAVeg.png)

Click the `WORKSHOP` button.



![](https://i.imgur.com/Omtg6m7.png)

If you don't have any set rules, create a rule with the `+` button.



![](https://i.imgur.com/xdv2PfM.png)

Click the `SELECT ALL` button.



![](https://i.imgur.com/lt9Cola.png)

Click the `PASTE RULE` button. (If the Paste button does not appear, please copy the contents of the 'release/script.ows' file once more.)



### 📔 Command List

#### 📔 User Commands

> The following commands are the most basic user commands.

- `npm start` (or `npm run start`)
  - A command that can run the engine. The engine may take about a minute to start, and after it runs, it automatically converts the overwatch workshop files in less than a second whenever the file changes.
- `npm run build`
  - A command to convert to a workshop file without running the engine. It takes less than 7 seconds.
- `npm run build:fast`
  - A command to perform a workshop file conversion without a module inspection and Github update check. It takes less than 4 seconds



#### 📔 Core Commands

> The commands below are for developers developing the inside of the engine.

- `npm run lint`
  - A command to modify the indent of project files according to the project creation rules.
- `npm run clean`
  - This command deletes the dist folder and the release folder in the project. It is good to use if the core build is incorrect or if there is a problem.
- `npm run generate`
  - This command creates the `bin/release` folder for the engine. If the `bin/release` folder already exists, delete it and recreate it from the beginning.



#### 📔 Maintain Commands

> Script commands for developers who maintain inside the engine.

##### 📔 Fix & Correction

> A command that can be modified if the function name of the overwatch workshop has been changed or is incorrectly recorded on the engine.

- `npm run maintain:rename`
  - Replace a function name.

##### 📔 Update & Lab

> This folder contains the automation scripts that are available when new functions or events are added to the Overwatch Workshop.

- `npm run maintain:event`
  - Add a new event.
- `npm run maintain:value`
  - Add a new value.
- `npm run maintain:action`
  - Add a new action.
- `npm run language:extract`
  - A command script that runs when the `npm run language:extractor` command is entered. In the folder `bin/release`, all comments written in the interface file of a specific language that has already been created are extracted in JSON format, and all interface comments are extracted from the interface file that has been replaced by the language code. These extracted files are extracted to the folder `/dist/_extracted`.

- `npm run maintain:run`
  - For developers who modify the ttypescript transpiler code, recreate the release folder and proceed with the workshop file generation.



#### 📔 Module Commands

> The commands below are reused within the command.

- `npm run install`
  - This command generates an effect similar to `npm install`. If there are no modules to install, the command will be completed immediately.
- `npm run update`
  - A command that generates an effect similar to `git pull`. If there is no update, the command will be completed immediately.
  - If you have files created separately in a folder other than the `src/*` folder and the `node_modules/*` folder, they will all be deleted.
- `npm run generate:silent`
  - This command generates an effect similar to `npm run generate`. If there is no update, the command will be completed.
- `npm run ttsc`
  - A command that proceeds with the ttypescript conversion of all project files.



## 🌏 Multilingual Support

![D.VA ENGINE HAS A MULTILINGUAL Image](https://i.imgur.com/sjaHn8i.png)

## ✅ Please make a contribution to the translation work.

> The main project contributor cannot read languages other than English and Korean. It means that no other language can be supported by Engine without the help of other contributors.

[Go to read the Language/README.md file](https://github.com/hmmhmmhm/dva-engine/tree/master/bin/core/language)



## 📮 Contribute

![CONTRIBUTE GUIDELINE LOGO IMAGE](https://i.imgur.com/AeMjvYw.png)

> If you want to contribute to the development of this project, please read the CONTRIBUTING.md file.

[Go to read the CONTRIBUTING.md file](https://github.com/hmmhmmhm/dva-engine/blob/master/CONTRIBUTING.md)



## 🎯 TODO

- [x] Typescript binding of all overwatch workshop function structures
- [x] Copy all function statements & Multilingual Support System for Interface File Comments (English and Korean)
- [x] Githeub Repo-Based Engine Automatic Update System
- [x] TypeScript Grammar Binding for Event Conditional Statement
- [x] TypeScript Grammar Binding for Numeric Value Operators
- [x] Quickly apply hot module Replacements (HMRs) based on dynamic compilation
- [ ] Support direct use of Rule condition without condition statement of function with return value boolean
- [ ] Support for redefining Typescript sequencing grammar
- [ ] Ruleless System - Implicit rule generation via if statement (default to onGoingGlobal when event designation is not present)
- [ ] Additional documentation of internal structure APIs
- [ ] Method chaining - returns the Reaper class instance by default without the user creating the Reformer class each time



## ✅ License

> Translation data is owned by Blizzard (Only source code is guaranteed MIT License).

MIT Licensed.