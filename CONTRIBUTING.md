## 📮 Guidelines

![CONTRIBUTE GUIDELINE LOGO IMAGE](https://i.imgur.com/AeMjvYw.png)

> This page describes the things to refer to when you do Contributing...



### 🚧 Must be Signed on CLA

> This project follows MIT License. If you want to claim the copyright to the code you contribute to, you must not provide the code to the main project, but you must clone the project to create your own project.

You must be on the ensure to have signed the [Contributor License Agreement (CLA)](https://cla.developers.google.com/).

- If you are an individual writing original source code and you're sure you own the intellectual property, then you'll need to sign an [individual CLA](https://code.google.com/legal/individual-cla-v1.0.html).
- If you work for a company that wants to allow you to contribute your work, then you'll need to sign a [corporate CLA](https://code.google.com/legal/corporate-cla-v1.0.html).

Follow either of the two links above to access the appropriate CLA and instructions for how to sign and return it. Once we receive it, we'll be able to accept your pull requests.



### 🌌 Copyright of Blizzard Resources

Translation data used in this project file is copyrighted by Blizzard Entertainment. By default, Blizzard Entertainment's resources cannot be used as MIT Licensed. Only source code can be used with MIT Licensed.



### ⌛️ Contribution process

> All contributions are made through the Pull Request feature in Github.

1. Please clone the project.
2. Modify the cloned project with the contents you want to PR.
3. Create a Pull Request after working on the contents you want to modify.
4. When a Pull Request is created, cla-bot validates whether the contributor has signed the CLA. If you have not signed the cla, the full request will not be merged until you sign the cla.
5. A contributors with the Modify privilege in Repo will review PR(Pull Request). The review may take some time.
6. TODO ( *~~Please enter 'npm run domain:pr' after completing the modification. Only generate PR when message that PR is possible is output. (If you receive any message of recommendation for modification, please modify the contents according to the recommendation.)~~* )



## 📭 Contributable Part

> Lists the contributionable parts of a project.



### ![D.VA ENGINE HAS A MULTILINGUAL SUPPORT SYSTEM IMAGE](https://i.imgur.com/sjaHn8i.png)

### ✅ Language (bin/core/language)

> The main project contributor cannot read languages other than English and Korean. It means that no other language can be supported by Engine without the help of other contributors.

[Go to read the Language/README.md file](https://github.com/hmmhmmhm/dva-engine/tree/master/bin/core/language)



### ✅ Blizzard Patch

> Project main contributor are referring to the Blizzard Update List at `https://blizztrack.com/patch_notes/overwatch_ptr`. If a new function or event has been added to the workshop from these pages, please use the command below to create a Commit name and PR as shown in `Blizzard Patch <Version Number>`.

#### 📔 Update & Lab

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

  

### ✅ Transpiler (bin/core/transpiler)

![THIS IS CRITICAL SECTION, PLEASE BE A CAREFUL IMAGE](https://i.imgur.com/gZK4gwI.png)

#### 💬About Typescript Transpiler

> DVA engine has provides a better user experience through transfile by Ttypescript.

- The Transform folder contains Transpiler scripts that bind typescript grammar to an overwatch workshop so that it does not differ language grammatically from typescript when writing an overwatch workshop code.
- It includes the redefining of operators by AST parser in Ttypescript, grammatical modification, and automatic reference to scripts.

[Go to read the Transform/README.md file](https://github.com/hmmhmmhm/dva-engine/tree/master/bin/core/transform)

- 

### ✅ Generator (bin/core/generator)

![THIS IS CRITICAL SECTION, PLEASE BE A CAREFUL IMAGE](https://i.imgur.com/gZK4gwI.png)

#### 💬About Typescript Generator

> D.va engine's Typescript Generator is a key system that analyzes the workshop code created by the interface and automatically generates functions, classes, namespaces, and more. (D.va engine can provide a multi-lingual interface environment due to the Generator.)

[Go to read the Transform/README.md file](https://github.com/hmmhmmhm/dva-engine/tree/master/bin/core/transform)