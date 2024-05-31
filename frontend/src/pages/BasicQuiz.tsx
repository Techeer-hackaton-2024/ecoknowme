import { useState } from 'react';

function BasicQuiz() {
  const [isSubmit, setIsSubmit] = useState(false);

  const goToResult = () => {
    setIsSubmit(true);
  };
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
              <div className="flex flex-row box-sizing-border justify-between">
                <div className="flex rounded-[0.6rem] w-[750px] bg-[#F1F6FB] pl-[2rem] items-center box-sizing-border text-[1.8rem]">
                  asd
                </div>
                <div className="flex gap-8">
                  <div className="rounded-[0.6rem] bg-[#FFFFFF] justify-center items-center flex w-[7.6rem] box-sizing-border text-[3rem] cursor-pointer hover:bg-[#333B65]">
                    O
                  </div>
                  <div className="rounded-[0.6rem] bg-[#FFFFFF] justify-center items-center flex w-[7.6rem] box-sizing-border text-[3rem] cursor-pointer hover:bg-[#333B65]">
                    X
                  </div>
                </div>
              </div>
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
