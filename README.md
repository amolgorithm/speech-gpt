# SpeechGPT
What if ChatGPT had its own voice? What if you could speak to it with your voice? What if this is Alexa brought to a higher intelligence of several folds? Explore this repo to experience this innovative exhibition of AI language models.

![](./public/images/SpeechGPT.png)
<br><br>
Experience conversations with more depth, emotion and feeling by using SpeechGPT, as it feels like you are having a real conversation with someone. Powered by ChatGPT API, SpeechGPT harnesses the words of ChatGPT and executes them into sounds/speech, using JavaScript's SpeechSynthesisAPI. This project was done using JavaScript, NodeJS, EJS, CSS and ExpressJS.
<br>
**IMPORTANT NOTE: To succssfully execute this project, your ChatGPT Api key is required in app.js**
<br><br>
This is the latest version of SpeechGPT.
In this version, the following features are:


- **Text-to-speech AI language model (ChatGPT):**
Your responses are sent to ChatGPT through the API and ChatGPT's answers are received by the program using the API. These answers are
converted to a fully utf-8 encoded string, devoid of any HTML entities. This is done so that the text-to-speech does not cause the synthesized
speech to utter something like: "The dog and hashtag thirty-four semicolon and the cat..." because of the HTML entity "&#34;"
You can see the response that ChatGPT replied, but you will also hear it.

- **User ability to use speech-to-text:**
As the AI "speaks" to the user, the user is also able to speak to the AI, through a speech-to-text conversion process. The converted text from the speech input is sent to ChatGPT through the API. So, it will literally act like Alexa on a computer, and further enhances the user's conversation with the AI language model, as it would feel more real and detailed.

- **Settings:**
There is a settings feature, but this version's settings interface only contains a button to clear the current conversation. Other future releases may contain features in the settings interface that allow the user to be able to change the voice, rate of words, pitch and volume of the synthesized speech.
<br><br>
## Features that will be taken in consideration for future releases:
- **Record of past conversations:**
The user would be able to easily access past conversations with the AI.
- **User ability to pause/stop the synthesized speech:**
A button that would allow the user to stop or pause the synthesized speech utterances, when clicked.
<br><br>
## Package/Module Prerequisites
- Node.js v18+
- Npm v9+
- ChatGPTApi
- ExpressJS
- EJS
- body-parser
