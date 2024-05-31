function Correct() {
  const data = {
    quiz: [
      '1. 5월 이후 기업 실적 개선으로 인해 국세수입이 증가할 것이다.',
      '2. 올해 8월에 법인세 중간 예납분이 늘어날 것이다.',
      '3. 근로소득세는 올해 상반기에 증가할 것이다.',
      '4. 지난 5년 동안 평균을 따라갈 것으로 예상된 세수 진도율은 38% 이상일 것이다.',
      '5. 정부의 재정 상태가 개선될 것이다.',
    ],
    correct_answer: ['O', 'O', 'X', 'X', 'X'],
    commentary: [
      '5월 이후 기업 실적이 개선될 것으로 예상되므로 국세수입이 증가할 가능성이 있습니다.',
      '기업 실적 개선으로 8월에 법인세 중간 예납분이 늘어날 것으로 예상되므로 증가할 가능성이 있습니다.',
      '근로소득세가 줄어들었던 상황을 고려하면 올해 상반기에도 증가하기 어렵다.',
      '세수 진도율이 최근 5년 평균치를 따라가지 못하고 있기 때문에 38% 이상으로 상승할 가능성은 낮을 것으로 예상됩니다.',
      '정부의 재정 상태가 악화하고 있는 것으로 나타났기 때문에 개선될 가능성은 낮을 것으로 보입니다.',
    ],
    newsletter:
      '1∼4월 국세 수입 8조4000억 감소 삼전 등 주요 기업 실적 부진 영향국민일보DB‘법인세 쇼크’가 이어지고 있다. 정부가 올해 들어 4월까지 거둔 세금이 지난해보다 8조원 줄었다. 기업들의 실적 부진 여파로 법인세수가 크게 쪼그라든 탓이다. 4월까지 법인세수는 13조원 가까이 감소했다. 지난해에 이어 올해도 ‘세수 구멍’이 불가피하다는 우려가 높아진다.기획재정부는 31일 ‘4월 국세수입 현황’을 발표하고 올해 1~4월 국세수입은 전년 동기 대비 8조4000억원 줄어든 125조6000억원이라고 밝혔다. 4월에만 6조2000억원이 감소했다. 세수 목표치 중 실제로 걷힌 비율을 뜻하는 진도율은 4월 누계 기준으로 34.2%에 그쳤다. 지난해(38.9%)는 물론 최근 5년 평균치(38.3%)보다 낮다.세수 감소를 주도한 건 법인세다. 올들어 4월까지 들어온 법인세는 22조8000억원으로 지난해보다 12조8000억원 줄었다. 4월 한 달에만 7조2000억원이 빠졌다.삼성전자, SK하이닉스 등 주요 대기업이 영업 손실로 법인세를 내지 못한 영향이 컸다. 특히 지난달에는 KB, 신한 등의 금융지주회사 법인세 실적도 확 줄었다. 금융지주회사들이 거둔 이익은 보유주식에서 대부분 발생했는데, 주식 처분이 이뤄지지 않아 세무상 이익으로 연결되지 않았다.기업의 실적 부진은 소득세에도 타격을 줬다. 성과금 등이 줄면서 1~4월 소득세수는 지난해보다 4000억원 감소한 35조3000억원에 머물렀다. 근로소득세는 같은 기간 1조5000억원 줄었다.정부는 5월 이후 세수 흐름이 반등한다고 내다본다. 올해 상반기에 기업 실적이 개선돼 오는 8월 법인세 중간예납분이 늘 수 있다고 판단한다. 다만 지금까지의 국세수입 감소폭을 고려할 때 올해도 ‘세수 결손’을 피하기 어렵다는 관측이 제기된다. 4월을 기준으로 세수 감소 규모가 올해와 비슷했던 2013년, 2014년, 2020년에는 연간 6~13조원 규모의 세수 결손을 기록했었다.최근 재정수지는 악화일로다. 정부의 실질적 재정 상태를 보여주는 관리재정수지는 3월까지 75조3000억원 적자를 보이며, 같은 달 기준으로 역대 최대치를 찍었다.',
  };
  const quiz = sessionStorage.getItem('quiz');
  const submitAnswer = () => {};
  console.log(quiz);
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-[#333B65]">
      <div className="p-6 flex flex-row justify-between rounded-[1.3rem] bg-[rgba(233,233,233,0.71)] m-[0_0_2rem_0]items-center w-[1200px] h-[640px] box-sizing-border -mt-[3rem] text-[5rem]">
        <div className="bg-[#D9D9D9] rounded-[1.3rem] w-[60%] h-[100%] flex flex-col p-6">
          <div className="font-semibold text-[32px]">뉴스 본문</div>
          <div className="mt-6 text-[1.5rem] overflow-y-scroll flex font-light">{data.newsletter}</div>
        </div>
        <div className="flex flex-col w-[40%] h-[100%] p-6 -mr-4">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col ml-2">
              <div className="font-semibold text-[32px]">O X 퀴즈</div>
              <div className=" text-[1.5rem] ">오답을 확인하세요</div>
            </div>
            <div className="font-semibold text-[3rem] mr-3">
              <span className="text-[#ff3d33]">1</span> / 5
            </div>
          </div>

          <div className="flex flex-col py-6 overflow-y-scroll mb-3">
            {/* map */}
            <div className="rounded-[32px] bg-[#CA8383] relative m-[0_0_25px_0] flex flex-col items-end p-[16px_15px_16px_15px] w-full box-sizing-border">
              <div className="flex flex-row w-full box-sizing-border">
                <div className="break-words font-light text-[20px] w-[85%] px-2 h-[110px] overflow-y-scroll text-[#000000]">
                  {data.quiz[0]}
                  <br />
                  <div className="mt-2 text-[#BD0000] font-semibold">{data.commentary[0]}</div>
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
            <div className="rounded-[32px] bg-[#D9D9D9] relative m-[0_0_25px_0] flex flex-col items-end p-[16px_15px_16px_15px] w-full box-sizing-border">
              <div className="flex flex-row w-full box-sizing-border">
                <div className="break-words font-light text-[20px] w-[85%] px-2 h-[110px] overflow-y-scroll text-[#000000]">
                  {data.quiz[1]}
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
            <div className="rounded-[32px] bg-[#D9D9D9] relative m-[0_0_25px_0] flex flex-col items-end p-[16px_15px_16px_15px] w-full box-sizing-border">
              <div className="flex flex-row w-full box-sizing-border">
                <div className="break-words font-light text-[20px] w-[85%] px-2 h-[110px] overflow-y-scroll text-[#000000]">
                  {data.quiz[2]}
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
            <div className="rounded-[32px] bg-[#D9D9D9] relative m-[0_0_25px_0] flex flex-col items-end p-[16px_15px_16px_15px] w-full box-sizing-border">
              <div className="flex flex-row w-full box-sizing-border">
                <div className="break-words font-light text-[20px] w-[85%] px-2 h-[110px] overflow-y-scroll text-[#000000]">
                  {data.quiz[3]}
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
            <div className="rounded-[32px] bg-[#D9D9D9] relative m-[0_0_25px_0] flex flex-col items-end p-[16px_15px_16px_15px] w-full box-sizing-border">
              <div className="flex flex-row w-full box-sizing-border">
                <div className="break-words font-light text-[20px] w-[85%] px-2 h-[110px] overflow-y-scroll text-[#000000]">
                  {data.quiz[4]}
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
          </div>
          <div className=" items-center ml-4 -mb-6 justify-center">
            <div
              onClick={submitAnswer}
              className=" cursor-pointer rounded-[0.6rem] w-[380px] py-2 text-center bg-[#FFC90B] flex justify-center items-center box-sizing-border text-[1.6rem] font-semibold text-[var(--azul-primrio,#5970E7)]"
            >
              다시하기
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Correct;
