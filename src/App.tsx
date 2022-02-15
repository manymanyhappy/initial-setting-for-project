import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  Routes,
  Route,
} from 'react-router-dom';

import theme from './style/theme';
import Home from './page/home';
import Test1 from './page/test1';
import Test2 from './page/test2';

/*
  1. css PC, Mobile 미디어 쿼리 styled-components로 빼기
  2. onResize Hook으로 빼기 (PC, Mobile 일 때 텍스트 다르게 구현)
  3. react-router-dom 기본
    => 다른방식으로 구현해보기, ver6 적용, nested Router 있을땐 어떻게?
*/

interface Prop {
  path: string;
  component: () => JSX.Element;
}

const routes = [
  {
    path: '/',
    component: <Home />
  },
  {
    path: '/test1',
    component: <Test1 />
  },
  {
    path: '/test2',
    component: <Test2 />
  }
];

const App = () => {
  return(
    <ThemeProvider theme={theme}>
      <Routes>
        {
          routes.map(({path, component}, i) => {
            return(
              <Route
                path={path}
                element={component}
                key={path}
              />
            );
          })
        }
      </Routes>
    </ThemeProvider>
  );
};

// nested routes 해결하기
// const RouteWithSubRoutes = ({path, component}: any) => {
//   return (
//     <Route
//       path={path}
//       element={component}
//     />
//   );
// };

export default App;
