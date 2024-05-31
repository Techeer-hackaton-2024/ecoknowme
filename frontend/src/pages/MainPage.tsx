import logo from '../assets/Group 2.png';
import { useNavigate } from 'react-router-dom';

function MainPage() {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate('/basicquiz');
  };

  return (
    <div className="flex flex-col w-screen h-screen bg-[#333B65] justify-center items-center">
      <div className="flex flex-row justify-between w-[80%]">
        <div className="flex ml-20">
          <img src={logo} />
        </div>
        <div className="flex justify-center flex-col gap-4 mr-12">
          <div>
            <div className="text-[1.5rem] text-white ">쉽게 시작하는 경제퀴즈</div>
            <div className="text-[1.5rem] text-white ">경제를 알고 경제인으로서 나를 알다.</div>
          </div>
          <div
            onClick={startQuiz}
            className=" cursor-pointer rounded-[0.6rem] w-[400px] h-2 bg-[#FFC90B] flex justify-center items-center p-[2rem] box-sizing-border text-[1.9rem] font-semibold text-[var(--azul-primrio,#5970E7)]"
          >
            테스트 시작하기
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
