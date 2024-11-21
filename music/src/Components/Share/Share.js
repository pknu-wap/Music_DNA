import { useEffect } from 'react';

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon,
} from 'react-share';

import styled from 'styled-components';
import { useScript } from '../../hooks/useScript';

const Share = () => {
  const currentUrl = window.location.href; // 임시 url

  // kakao SDK import하기
  const status = useScript('https://developers.kakao.com/sdk/js/kakao.js');

  // kakao sdk 초기화하기
  // status가 변경될 때마다 실행되며, status가 ready일 때 초기화를 시도합니다.
  useEffect(() => {
    if (status === 'ready' && window.Kakao) {
      // 중복 initialization 방지
      if (!window.Kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        window.Kakao.init(process.env.REACT_APP_KAKAO_KEY);
      }
    }
  }, [status]);

  const handleKakaoButton = () => {
    window.Kakao.Link.sendScrap({
      requestUrl: currentUrl,
    });
  };

  return (
    <Container>
      <FacebookShareButton style={{ marginRight: '20px' }} url={currentUrl}>
        <FacebookIcon size={48} round={true} borderRadius={24}></FacebookIcon>
      </FacebookShareButton>
      <TwitterShareButton style={{ marginRight: '20px' }} url={currentUrl}>
        <TwitterIcon size={48} round={true} borderRadius={24}></TwitterIcon>
      </TwitterShareButton>
      <LineShareButton style={{ marginRight: '20px' }} url={currentUrl}>
        <LineIcon size={48} round={true} borderRadius={24}></LineIcon>
      </LineShareButton>
      <KakaoShareButton onClick={handleKakaoButton}>
        <KaKaoIcon src="./kakao.png"></KaKaoIcon>
      </KakaoShareButton>
    </Container>
  );
};

export default Share;

const Container = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const KaKaoIcon = styled.img`
  width: 48;
  height: 48px;
  border-radius: 24px;
`;

const KakaoShareButton = styled.a`
  cursor: pointer;
`;
