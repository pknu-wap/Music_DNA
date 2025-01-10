import { useState, useRef } from 'react';
import SecondBtn from '../../common/Button/SecondBtn';
import './Modal.css';

const NextModal = ({ favoriteGenre }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalBackGround = useRef();

  return (
    <div className="nextPage">
      <div className="btn-wrpper">
        <button className="modal-open-btn" onClick={() => setModalOpen(true)}>
          다음으로
        </button>
      </div>
      {modalOpen && (
        <div
          className="modal-container"
          ref={modalBackGround}
          onClick={(e) => {
            if (e.target === modalBackGround.current) {
              setModalOpen(false);
            }
          }}
        >
          <div className="modal-content">
            <button
              className="modal-close-btn"
              onClick={() => setModalOpen(false)}
            >
              x
            </button>
            <h2 style={{ fontSize: '25px', fontWeight: 'bold' }}>
              <span>숨겨진 음악</span> DNA
            </h2>
            <span>1차분석 완료!</span>
            <p>
              더{' '}
              <span style={{ fontSize: '20px', fontWeight: 'bold' }}>
                정확한 결과
              </span>
              를 위해 추가적인 테스트를 하시겠습니까?
            </p>
            <SecondBtn
              divClassName="modal_button"
              buttonText="2차 테스트 시작"
              to="/SecondPage5"
              ids={['NeoRB2', 'ComRB2', 'PunkRB2', 'SoulRB2', 'AlterRB2']}
            />
            <SecondBtn
              divClassName="modal_button"
              buttonText="바로 결과 확인"
              to={`/${favoriteGenre}`}
              ids={['NeoRB2', 'ComRB2', 'PunkRB2', 'SoulRB2', 'AlterRB2']}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default NextModal;
