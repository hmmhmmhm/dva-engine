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

- 이 폴더 안에 번역데이터가 JSON 형태로 담깁니다.



### 🔍 parse [bin/core/engine/language/parse] 

- `npm run language:parse` 명령어가 입력되면 실행되는 명령어 스크립트입니다. 블리자드의 오버워치 워크샵 함수 설명 페이지를 Crawling 해서 JSON 형태로 가져옵니다.



### ✂️ extractor [bin/core/engine/language/extractor] 

- `npm run language:extractor` 명령어가 입력되면 실행되는 명령어 스크립트입니다. `bin/release`  폴더 안에 이미 생성이 끝난 특정 언어의 인터페이스 파일에 적힌 모든 코멘트들을 추출해서 JSON 형태로 담아내고, 인터페이스 코멘트가 모두 번역파일  상 언어코드로 교체된 인터페이스파일들을 추출합니다.  이렇게 추출된 파일들은 `/dist/_extracted` 폴더에 추출됩니다.



### 🔗 injector [bin/core/engine/language/injector] 

- `npm run language:injector` 명령어가 입력되면 실행되는 명령어 스크립트입니다.  `bin/release` 폴더 안에 복사된 인터페이스 파일들에 특정 언어 코멘트 내용들을 주입하는 함수입니다. (코멘트 상에 적힌 순서번호를 실제 언어 데이터로 교체합니다.)



### ✂️🔗 reapply [bin/core/engine/language/reapply] 

- `npm run language:reapply` 명령어가 입력되면 실행되는 명령어 스크립트입니다. `extractor` 를 통해서 추출된 데이터를 모두 `bin/core` 상에 다시 반영합니다. 특정 번역코드  내용이 삭제될 필요가  있는 경우 contexts 를 비워놓고  이 명령어를 실행하면, 해당 번역코드를 지정된 언어권 데이터에서 삭제한 후 모든 언어데이터를 갱신합니다.



## Contribute

![CONTRIBUTE GUIDELINE LOGO IMAGE](https://i.imgur.com/AeMjvYw.png)

> If you want to contribute to the development of this project, please read the CONTRIBUTING.md file.

[Go to read the CONTRIBUTING.md file](https://github.com/hmmhmmhm/dva-engine/blob/master/CONTRIBUTING.md)