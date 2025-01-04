import { useState, useRef } from 'react';
import './Modal.css';

const NextModal = () => {
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
            <h2>숨겨진 음악 DNA</h2>
            <p>1차분석 완료!</p>
            <p>더 정확한 결과를 위해 추가적인 테스트를 하시겠습니까?</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NextModal;
