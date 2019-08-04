![THIS IS CRITICAL SECTION, PLEASE BE A CAREFUL IMAGE](https://i.imgur.com/gZK4gwI.png)

## 💬 Translation is difficult to automate.

> Although we continue to automate the functions associated with translation, there is considerable difficulty in maintaining the translation (we are now forced to type directly) because it is not something we can copy the language resources of the Overwatch.

- Currently, only English and Korean are supported by Dva-Engine.
- If there is a direct access to an overwatch language resource, it can be automated using that resource. Until then, all translation must be done manually.



![D.Va Engine has a multilingual support system Image](https://i.imgur.com/sjaHn8i.png)

## ✅ Please make a contribution to the translation work.

> The main project contributor cannot read languages other than English and Korean. It means that no other language can be supported by Engine without the help of other contributors.



### 🌐 Translation Rule

- All translation file names must have 3 characters of language code per country. [(ISO 3166-1 alpha-3)](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3)
- All translation files must match the translation file and code number of another language. Unique code number cannot be used.



### ❔ How do I make a new translation file?

- The quickest way to create a new language file is to **crawling the workshop description page data for each language released by Blizzard.** (That's how the English data was written.)
  - To learn how to bring the Blizzard Workshop description page, check the `parse/folder`. 
  - This method can be used if other language-speaking pages also have Blizzard Workshop Description pages with the same format as the English language.
  - If it is different, the parse code will need to be modified.
- The slow way to create a new language file is to copy the `data/eng.json` file and translate the contents of the contexts. (That's how the Korean data was written. The main contributor handwritten more than 2,000 lines.)



## 🐇 Structure

> The Generator folder contains the following folders:



### 💾 data [bin/core/engine/language/data] 

- Translation data (JSON type) is contained in this folder.



### 🔍 parse [bin/core/engine/language/parse] 

- A command script that runs when the command `npm run language:parse` is entered. Crawling the Blizzard's Overwatch Workshop Function Description page into JSON format.



### ✂️ extractor [bin/core/engine/language/extractor] 

- A command script that runs when the `npm run language:extractor` command is entered. In the folder `bin/release`, all comments written in the interface file of a specific language that has already been created are extracted in JSON format, and all interface comments are extracted from the interface file that has been replaced by the language code. These extracted files are extracted to the folder `/dist/_extracted`.



### 🔗 injector [bin/core/engine/language/injector] 

- A command script that runs when the command `npm run language:injector` is entered. This function injects certain language comments into the interface files copied into the `bin/release` folder. (Replace the sequence numbers on the comments with actual language data.)



### ✂️🔗 reapply [bin/core/engine/language/reapply] 

- A command script that runs when the command `npm run language:reapply` is entered. All data extracted via the `extractor` will be reflected back on the `bin/core`. If certain translation code contents need to be deleted, if you leave contexts blank and run this command, the translation code will be deleted from the specified linguistic data and all language data will be updated.



## Contribute

![CONTRIBUTE GUIDELINE LOGO IMAGE](https://i.imgur.com/AeMjvYw.png)

> If you want to contribute to the development of this project, please read the CONTRIBUTING.md file.

[Go to read the CONTRIBUTING.md file](https://github.com/hmmhmmhm/dva-engine/blob/master/CONTRIBUTING.md)