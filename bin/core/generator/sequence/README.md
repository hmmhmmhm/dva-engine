![THIS IS CRITICAL SECTION, PLEASE BE A CAREFUL IMAGE](https://i.imgur.com/gZK4gwI.png)

## 🐇 Structure

> The Generator folder contains the following files:



### 👋🏻 initialize.ts [bin/core/generator/sequence/initialize.ts]

- The script deletes the existing `release/interface/resolver/child` folder and recreates it.



### 📚  interfaceParse.ts [bin/core/generator/sequence/interfaceParse.ts]

- The script converts the typecript interface structure into a json structure through the `typescript-json-schema` module.



### ♻️  collectPreTypeNames.ts [bin/core/generator/sequence/collectPreTypeNames.ts]

- The script collects what types of workshop parameters are and what the interface file names for each type are.



### 📐 collectType.ts [bin/core/generator/sequence/collectType.ts]

- The script collects the type information defined in the interface and creates the implementer.



### 🔒 collectArchivedValue.ts [bin/core/generator/sequence/collectArchivedValue.ts]

- `Deprecated` - This function was used to organize the value interface list in json format when generatorData.json was first created. Not used at this time.



### ✒️ template [bin/core/generator/sequence/template]

- A template for a sequence script.



## Contribute

![CONTRIBUTE GUIDELINE LOGO IMAGE](https://i.imgur.com/AeMjvYw.png)

> If you want to contribute to the development of this project, please read the CONTRIBUTING.md file.

[Go to read the CONTRIBUTING.md file](https://github.com/hmmhmmhm/dva-engine/blob/master/CONTRIBUTING.md)