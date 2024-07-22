import React, { useState } from 'react';
import Modal from 'react-modal'
import { Link } from 'react-router-dom';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)', // 오버레이 색상 및 투명도 설정
  },
};

const CautionModal = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const afterOpenModal = () => {
    subtitle.style.color = '#808080';
  }

  // const closeModal = () => {
  //   setIsOpen(false);
  // }

  return (
    <div>
      <button onClick={openModal}>테스트 시작하기</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        style={customStyles}
        contentLabel='Example'
      >
      <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Caution</h2>
        <div>임시 내용</div>
        <Link to="/firstPage">
          <button>테스트 시작하기</button>
        </Link>
      </Modal>
    </div>
  )
}

export default CautionModal

