

var express = require('express');
const app = express();
const bodyParser = require("body-parser")

const OpenAI = require('openai');
require('dotenv').config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }))

app.set("view engine",'ejs');
app.set('views','./views');
app.use('/public', express.static(__dirname + '/public'));


app.get("/api/makeProblem", async(req, res) =>{
    level = req.body.level;
    problems = [];
    answers = [];
    if(level == 0){
      level_name = 'Beginner';
    } else if(level == 1){
        level_name = 'Intermediate';
    } else if(level == 2){
        level_name = 'Expert';
    } else{
        level_name = 'Average';
    }

    const fetchAndParsePage = require('./gettext');  // gettext.js에서 함수 불러오기


    //뉴스본문 크롤링
    newsletter = await fetchAndParsePage()

    try {
        const response = await openai.chat.completions.create({
            messages: [
                { role: "system", content: "Create five quiz for "+ level_name +"(Must be the prediction of the future.) to guess future economic phenomena in OX format(e.g. ~하였으므로 이번 달 안에 금리가 오를 것이다.), and print it out with an explanation in the following format: '{quiz:['<QUIZ1>', '<QUIZ2>', '<QUIZ3>', '<QUIZ4>', '<QUIZ5>'], correct_answer:['<QUIZ 1 CORRECT ANSWER(just O or X)>', '<QUIZ 2 CORRECT ANSWER(just O or X)>', '<QUIZ 3 CORRECT ANSWER(just O or X)>', '<QUIZ 4 CORRECT ANSWER(just O or X)>', '<QUIZ 5 CORRECT ANSWER(just O or X)>'], commentary:['<QUIZ1 COMMENTARY>', '<QUIZ2 COMMENTARY>', '<QUIZ3 COMMENTARY>', '<QUIZ4 COMMENTARY>', '<QUIZ5 COMMENTARY>']}" },
                { role: "user", content: newsletter }
            ],
            model: "gpt-3.5-turbo",
            max_tokens: 4000,
        });
            result = response.choices[0].message.content;
            console.log(result);
            res.send(result);
        } catch (error) {
            res.status(500).send(error.message);
    }

});


// //-------------------[api 만들기 예시 example]---------------------

// //get 요청 테스트 api
// app.get('/getapitest', function(req, res){
//     // req.query에 받은 키값이 json으로 들어감
//     console.log(req.query)
//     result = { //응답
//         "message" : "123 테스트",
//         "data" : req.query
//         };
//     res.send(JSON.stringify(result));
//  });

//  //post 요청 테스트 api
//  app.post('/postapitest', function(req, res){
//     //req.body에 받은 json 들어감
//     console.log(req.body);
//     result = { //응답
//         "message" : "123 테스트",
//         "data" : req.body
//         };
//     res.send(JSON.stringify(result)); //응답
//  });

// //---------------------------------------------------

// app.get('/getRecord', function(req, res){
//     //진단 결과 조회 기능(보호자)
//     console.log(req.query)
//     result = { //응답
//         "message" : "진단 결과",
//         "data" : req.query
//         };

//     res.send(JSON.stringify(result));
// });

// app.post('/gpt', async(req, res)=>{
//     try {
//         const response = await openai.chat.completions.create({
//             messages: [
//                 { role: "system", content: "Talking nicely like communication with elder people based on the data sent by the user. in Korean" },
//                 { role: "user", content: req.body }
//             ],
//             model: "gpt-3.5-turbo",
//             max_tokens: 1000,
//         });
//             res.send(response.choices[0].message.content);
//         } catch (error) {
//             res.status(500).send(error.message);
//         }
// });

// app.get('/gptuse', async(req, res)=>{
//     const prompt = req.query.prompt;

//     if (!prompt) {
//         res.status(400).send("Please provide a prompt");
//         return;
//       }
//       try {
//         const response = await openai.chat.completions.create({
//             messages: [
//                 { role: "system", content: "Talking nicely like communication with elder people based on the data sent by the user. in Korean" },
//                 { role: "user", content: prompt }
//             ],
//             model: "gpt-3.5-turbo",
//             max_tokens: 1000,
//         });
//             res.send(response.choices[0].message.content);
//         } catch (error) {
//             res.status(500).send(error.message);
//   }
// });


// app.post('/recordRequest', function(req, res){
//     //fcm 라이브러리로 노인쪽에 대화 시작하기
// });



app.listen(3010,function(req, res){
    console.log("서버가 실행되고 있습니다.");
});