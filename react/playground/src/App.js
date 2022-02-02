import './App.css';
import Auth from './components/login/Auth';
import Profile from './components/login/Profile';
import { Route, Routes } from 'react-router-dom';
import { Counter } from './feature/counter/Counter';
function App() {
  const REST_API_KEY = '';
  const REDIRECT_URI = 'http://localhost:3000/kakao/oauth';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  return (
    <div id='app'>
      <Routes>
        <Route
          path='/'
          element={
            <div>
              <h1>
                <a href={KAKAO_AUTH_URL}>Kakao Login</a>
              </h1>
              <Counter />
            </div>
          }
        />
        <Route path='/kakao/oauth' element={<Auth />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}
export default App;
