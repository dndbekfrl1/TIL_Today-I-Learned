import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import qs from 'qs';
const Auth = () => {
  const REST_API_KEY = '';
  const REDIRECT_URI = 'http://localhost:3000/kakao/oauth';

  const code = new URL(window.location.href).searchParams.get('code');

  console.log('code', code);

  const navigate = useNavigate();

  const getToken = async () => {
    const payload = qs.stringify({
      grant_type: 'authorization_code',
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
      code: code,
    });
    try {
      // access token 가져오기
      const res = await axios.post(
        'https://kauth.kakao.com/oauth/token',
        payload
      );
      console.log('res', res);
      // Kakao Javascript SDK 초기화
      window.Kakao.init(REST_API_KEY);
      // access token 설정
      window.Kakao.Auth.setAccessToken(res.data.access_token);
      navigate('/profile', { replace: true });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getToken();
  }, []);
  return null;
};

export default Auth;
