import { ChatGPTAPI } from 'chatgpt';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);


const PORT = 3000; // the localhost/127.0.0.1 port at which the front-end is run on
const express = require('express')
const bodyParser = require('body-parser')
let data = [{
	question: "Hello World!",
	answer: "Hello! How can I assist you today?"
}];
const app = express()

const api = new ChatGPTAPI({
	apiKey: 'YOUR_API_KEY'
});


async function gptResponse(question) {
    response = await api.sendMessage(question, {
		parentMessageId: response.id
	});
	
	return response.text.replace('ChatGPT', 'SpeechGPT (powered by OpenAI ChatGPT)');
}


let response = api.sendMessage('Hello World!');
console.log(response.text); 

  
 
app.set('view engine', 'ejs')
  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(express.static( "public" ));
  
app.get("/", (req, res) => {
    res.render("home", {
        data: data
    })
})
  
app.post("/add", (req, res) => {
    const inputQuestion = req.body.inputQuestion;
	const gptAnswer = gptResponse(inputQuestion)
	gptAnswer.then(function(result) {
		data.push({
			question: inputQuestion,
			answer: result
		})
		res.render("home", {
			data: data
		})
	})
})

app.post('/delete', (req, res) => {
    data = [{
		question: "Hello World!",
		answer: "Hello! How can I assist you today?"
	}];
	res.render("home", {
		data: data
	})
})
  
app.listen(PORT, (req, res) => {
    console.log("App is running on port 3000")
})
