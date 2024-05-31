import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const router = createBrowserRouter([
  // {
  //     path: "/signup",
  //     element: <SignUp />,
  // },
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
