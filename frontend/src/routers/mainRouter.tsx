import {
  BrowserRouter,
    createBrowserRouter,
    Route,
    RouterProvider,
    Routes,
  } from "react-router-dom";

import { MainPage, FirstPage, SecondPage, NinthPage, TenPage, ThirdPage, FourthPage, FifthPage, SixthPage, SeventhPage, EightPage, ElevenPage, LastPage } from "../pages";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage/>,
    },
    {
      path: '/1',
      element: <FirstPage/>
    },
    {
      path: '/2',
      element: <SecondPage/>
    },
    {
      path: '/3',
      element: <ThirdPage/>
    },
    {
      path: '/4',
      element: <FourthPage/>
    },
    {
      path: '/5',
      element: <FifthPage/>
    },
    {
      path: '/6',
      element: <SixthPage/>
    },
    {
      path: '/7',
      element: <SeventhPage/>
    },
    {
      path: '/8',
      element: <EightPage/>
    },
    {
      path: '/9',
      element: <NinthPage/>
    },
    {
      path: '/10',
      element: <TenPage/>
    },
    {
      path: '/11',
      element: <ElevenPage/>
    },
    {
      path: '/end',
      element: <LastPage/>
    },
]);


// export const MyRouter = () => 
//       <Routes>
//         <Route path="/" element={<MainPage/>} /> {/* 👈 Renders at /app/ */}
//         <Route path="/1" element={<FirstPage/>} />
//       </Routes>