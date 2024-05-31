import axios from 'axios';
import { useState } from 'react';

function BasicQuiz() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [userAnswers, setUserAnswers] = useState(Array(10).fill(null));
  const handleAnswerClick = (index: number, answer: string) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = answer;
    setUserAnswers(newAnswers);
  };

  const quizData = {
    problem: [
      'GDP는 한 나라의 모든 수입을 측정한다.',
      '인플레이션이 지속되면 화폐 가치는 하락한다.',
      '실업률이 높아지면 경제는 일반적으로 침체된다.',
      '개인 예산을 관리하는 주요 목적은 더 많은 소비를 하기 위함이다.',
      '저축은 미래의 불확실성에 대비하는 데 도움이 된다.',
      '주식은 기업의 부채를 나타낸다.',
      '채권은 일정한 이자를 지급하는 부채 증서이다.',
      '가격이 상승하면 공급은 감소한다.',
      '균형 가격은 수요와 공급이 일치하는 가격이다.',
      '환율이 상승하면 수입품의 가격은 하락한다.',
    ],
    answer: ['X', 'O', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'],
  };

  const calculateScore = () => {
    let score = 0;
    for (let i = 0; i < quizData.answer.length; i++) {
      if (userAnswers[i] === quizData.answer[i]) {
        score++;
      }
    }
    return score;
  };

  const calculateLevel = (score: number) => {
    if (score <= 3) {
      return 1;
    } else if (score <= 6) {
      return 2;
    } else {
      return 3;
    }
  };

  const goToResult = () => {
    setIsSubmit(true);
    const level = calculateLevel(calculateScore());
    console.log(level);
    axios.get('http://localhost:3010/api/makeProblem', { params: { level: level } }).then((res) => {
      console.log(res);
    });
  };

  //   const goToResult = () => {
  //     console.log(userAnswers);
  //     setIsSubmit(true);
  //   };
  return (
    <div>
      {isSubmit ? (
        <div>modal</div>
      ) : (
        <div className="w-screen h-screen flex flex-col justify-center items-center bg-[#333B65]">
          <div className="rounded-[1.3rem] bg-[rgba(233,233,233,0.71)] m-[0_0_2rem_0] flex flex-col items-center w-[1200px] h-[640px] box-sizing-border -mt-[3rem] overflow-y-scroll">
            <div className="m-[1rem_0_1rem_0] pt-[1rem] inline-block break-words font-['NanumSquare_Neo','Roboto_Condensed'] font-bold text-[2.5rem] text-[var(--azul-escuro,#020A32)]">
              기초 상식 퀴즈
            </div>
            {/* 문제 리스트 */}
            <div className="flex flex-col p-[1rem_3rem] w-full">
              {/* 단일 문제 */}
              {quizData.problem.map((quiz, index) => (
                <div key={index} className="flex flex-row box-sizing-border justify-between mb-4">
                  <div className="flex rounded-[0.6rem] w-[750px] bg-[#F1F6FB] pl-[2rem] items-center box-sizing-border text-[1.8rem]">
                    {quiz}
                  </div>
                  <div className="flex gap-8">
                    <div
                      onClick={() => handleAnswerClick(index, 'O')}
                      className={`rounded-[0.6rem] justify-center items-center flex w-[7.6rem] box-sizing-border text-[3rem] cursor-pointer ${userAnswers[index] === 'O' ? 'bg-red-500' : 'bg-[#FFFFFF]'} hover:bg-[#333B65]`}
                    >
                      O
                    </div>
                    <div
                      onClick={() => handleAnswerClick(index, 'X')}
                      className={`rounded-[0.6rem] justify-center items-center flex w-[7.6rem] box-sizing-border text-[3rem] cursor-pointer ${userAnswers[index] === 'X' ? 'bg-red-500' : 'bg-[#FFFFFF]'} hover:bg-[#333B65]`}
                    >
                      X
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-10 justify-center">
            <div
              onClick={goToResult}
              className=" cursor-pointer rounded-[0.6rem] w-[400px] h-2 bg-[#FFC90B] flex justify-center items-center p-[2rem] box-sizing-border text-[1.9rem] font-semibold text-[var(--azul-primrio,#5970E7)]"
            >
              제출하기
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BasicQuiz;
