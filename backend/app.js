

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

    // 난이도 조절
    if(level == 0){
      level_name = 'Beginner';          // 0 받으면 초급
    } else if(level == 1){
        level_name = 'Intermediate';    // 1 받으면 중급
    } else if(level == 2){
        level_name = 'Expert';          // 2 받으면 고급
    } else{
        level_name = 'Average';         // 범위가 벗어 났을 경우 보통 난이도
    }

    const fetchAndParsePage = require('./crawlingNews');  // crawlingNews.js에서 함수 불러오기


    //뉴스 본문 크롤링
    newsletter = await fetchAndParsePage()

    try {
        const response = await openai.chat.completions.create({
            messages: [
                //"'" + 해당 난이도(초급 or 중급 or 고급) + "수준에 맞는 미래 경제 현상을 예측하는 OX 퀴즈(예: ~하였으므로 이번 달 안에 금리가 오를 것이다.)를 다섯 개 만들고, 다음 형식으로 설명과 함께 출력하세요: '{"quiz":["<QUIZ1>", "<QUIZ2>", "<QUIZ3>", "<QUIZ4>", "<QUIZ5>"], "correct_answer":["<QUIZ 1 정답(O 또는 X)>", "<QUIZ 2 정답(O 또는 X)>", "<QUIZ 3 정답(O 또는 X)>", "<QUIZ 4 정답(O 또는 X)>", "<QUIZ 5 정답(O 또는 X)>"], "commentary":["<QUIZ1 설명>", "<QUIZ2 설명>", "<QUIZ3 설명>", "<QUIZ4 설명>", "<QUIZ5 설명>"]}'"
                { role: "system", content: "Create five quiz for "+ level_name +`(Must be the prediction of the future.) to guess future economic phenomena in OX format(e.g. ~하였으므로 이번 달 안에 금리가 오를 것이다.), and print it out with an explanation in the following format: '{"quiz":["<QUIZ1>", "<QUIZ2>", "<QUIZ3>", "<QUIZ4>", "<QUIZ5>"], "correct_answer":["<QUIZ 1 CORRECT ANSWER(just O or X)>", "<QUIZ 2 CORRECT ANSWER(just O or X)>", "<QUIZ 3 CORRECT ANSWER(just O or X)>", "<QUIZ 4 CORRECT ANSWER(just O or X)>", "<QUIZ 5 CORRECT ANSWER(just O or X)>"], "commentary":["<QUIZ1 COMMENTARY>", "<QUIZ2 COMMENTARY>", "<QUIZ3 COMMENTARY>", "<QUIZ4 COMMENTARY>", "<QUIZ5 COMMENTARY>"]}` },
                { role: "user", content: newsletter }
            ],
            model: "gpt-3.5-turbo",
            max_tokens: 4000,
        });
            result = JSON.parse(response.choices[0].message.content);                       // JSON으로 저장
            result['newsletter'] = newsletter.replace(/[\n]/g, '').replace(/[\t]/g, '');    // JSON에 뉴스 본문 추가
            res.send(result);       // 클라이언트로 반환
        } catch (error) {
            res.status(500).send(error.message);    // 에러시 500 반환
    }

});

app.listen(3010,function(req, res){
    console.log("서버가 실행되고 있습니다. Port: 3010");
});