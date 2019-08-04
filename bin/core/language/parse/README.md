![THIS IS CRITICAL SECTION, PLEASE BE A CAREFUL IMAGE](https://i.imgur.com/gZK4gwI.png)

## ⚠️ Warning

> Crawling does not belong to the original legal category and can be a problem if abused.

- This project main constructor failed to obtain Blizzard approval during this crawling process. This is entirely unofficial work. I don't want anyone to claim the copyright, no matter who succeed in getting through crawling. This project is all MIT Licensed. However, the translation data is certainly not MIT License. In the event of a dispute over translation data, we need to delete all of this data.
- *(The main contributor requested directly, Keith Myron, Dan Reed for translation resources through video conversations at an overwatch workshop developer event at Blizzard headquarters in South Korea on 2019 July 3, but failed to hear a clear answer.)*



## 🎯 Crawling Rule

- All data needed to reproduce the same crawling process by another developer can be stored in the project (but I hope the capacity is not too large).
- Modules such as Puppeteer are not recommended to be used as much as possible. If really necessary, refer to the npx command as a one-time module.



## ✅ What is Stage Runner?

- A step-by-step approach was needed to crawl through Blizzard pages in the U.S.
- **<u>Step 1</u>** was to reading all HTML written on the page and JSON. When developing English-speaking data, the first step was a script that ran within the Chrome Inspector on the Chrome browser.
- **<u>Step 2</u>** was to modify the data that had been obtained.
- <u>**Step 3**</u> was to insert a frame through contrast to hand-in-hand input Korean data, and to extract JSON data tailored to the engine by reference to information not explained on Blizzard pages or to correct incorrect words through additional data.



## 🐇 Structure

> The Parse folder contains the following folders & files:



### 🚀 stageRunner [bin/core/language/parse/stageRunner.ts]

- You can run this script through the command `npm run language:parse`.



## Contribute

![CONTRIBUTE GUIDELINE LOGO IMAGE](https://i.imgur.com/AeMjvYw.png)

> If you want to contribute to the development of this project, please read the CONTRIBUTING.md file.

[Go to read the CONTRIBUTING.md file](https://github.com/hmmhmmhm/dva-engine/blob/master/CONTRIBUTING.md)