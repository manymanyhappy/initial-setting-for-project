import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  Routes,
  Route,
} from 'react-router-dom';

import theme from './style/theme';
import Home from './pages/home';
import Test1 from './pages/test1';
import Test2 from './pages/test2';

/*
  1. css PC, Mobile 미디어 쿼리 styled-components로 빼기 (OK)
  2. onResize Hook으로 빼기 (PC, Mobile 일 때 텍스트 다르게 구현) (OK)
  3. react-router-dom 기본
    3-1) 다른방식으로 구현해보기(ver6 적용) (OK)
    3-2) nested Router 있을땐 어떻게? => outlet 개념 적용해보기
    3-3) component 마다 useNavigate 있는거 공통으로 뽑아내기
  4. styled-component
    4-1) attrs 사용해보기
    4-2) button component 만들어서 다른 페이지에서 상속 개념 사용해보기 (OK)
  5. prettier 적용해보기
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
