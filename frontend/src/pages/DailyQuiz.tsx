import { useNavigate } from 'react-router-dom';

function DailyQuiz() {
  type Data = {
    quiz: string[];
    correct_answer: string[];
    commentary: string[];
    newsletter: string;
  };

  const data: Data = {
    quiz: sessionStorage.getItem('quiz'),
    answer: sessionStorage.getItem('correct_answer'),
    newsletter: sessionStorage.getItem('newsletter'),
  };

  const navigate = useNavigate();

  const submitAnswer = () => {
    navigate('/quizresult');
    // setIsSubmit(false);
  };
  //   console.log(quiz);
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-[#333B65]">
      <div className="p-6 flex flex-row justify-between rounded-[1.3rem] bg-[rgba(233,233,233,0.71)] m-[0_0_2rem_0]items-center w-[1200px] h-[640px] box-sizing-border -mt-[3rem] text-[5rem]">
        <div className="bg-[#D9D9D9] rounded-[1.3rem] w-[60%] h-[100%] flex flex-col p-6">
          <div className="font-semibold text-[32px]">뉴스 본문</div>
          <div className="mt-6 text-[1.5rem] overflow-y-scroll flex font-light">{data.newsletter}</div>
        </div>
        <div className="flex flex-col w-[40%] h-[100%] p-6 -mr-4">
          <div className="font-semibold text-[32px]">O X 퀴즈</div>
          <div className=" text-[1.5rem]">본문을 읽고 문제를 푸세요</div>
          <div className="flex flex-col py-6 overflow-y-scroll mb-3">
            {/* map */}
            {data.quiz.map((q) => (
              <div className="rounded-[32px] bg-[#D9D9D9] relative m-[0_0_25px_0] flex flex-col items-end p-[16px_15px_16px_15px] w-full box-sizing-border">
                <div className="flex flex-row w-full box-sizing-border">
                  <div className="break-words font-light text-[20px] w-[85%] px-2 h-[110px] overflow-y-scroll text-[#000000]">
                    {q}
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex rounded-[16px] bg-[#E23D3D] w-[70px] h-[50px] text-white text-[2.5rem] justify-center items-center cursor-pointer hover:bg-[#7c2626]">
                      O
                    </div>
                    <div className="flex justify-center items-center rounded-[16px] bg-[#4C80E5] w-[70px] h-[50px] text-white text-[2.5rem] cursor-pointer hover:bg-[#26427b]">
                      X
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className=" items-center ml-4 -mb-6 justify-center">
            <div
              onClick={submitAnswer}
              className=" cursor-pointer rounded-[0.6rem] w-[380px] py-2 text-center bg-[#FFC90B] flex justify-center items-center box-sizing-border text-[1.6rem] font-semibold text-[var(--azul-primrio,#5970E7)]"
            >
              제출하기
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DailyQuiz;
