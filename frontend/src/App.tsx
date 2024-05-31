import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import MainPage from './pages/MainPage.tsx';
import BasicQuiz from './pages/BasicQuiz.tsx';
import DailyQuiz from './pages/DailyQuiz.tsx';
import Correct from './pages/Correct.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/basicquiz',
    element: <BasicQuiz />,
  },
  {
    path: '/dailyquiz',
    element: <DailyQuiz />,
  },
  {
    path: '/quizresult',
    element: <Correct />,
  },
  {
    path: '/totalresult',
    element: <MainPage />,
  },
]);
function App() {
  return (
    <>
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </>
  );
}

export default App;
