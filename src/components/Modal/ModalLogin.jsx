import Modal from './Modal';
import exampleImg from '../../assets/login.png';
import { useModalContext } from '../../providers/ModalProvider';
import { useId } from 'react';

const ModalLogin = ({ handler }) => {
  const id = useId();
  const { openModal, isModalOpen, closeModal } = useModalContext();

  const handleOpen = () => {
    openModal(id);
  };
  const handleClose = () => {
    closeModal();
  };
  return (
    <>
      <div onClick={handleOpen}>{handler}</div>

      <Modal
        title={'Где взять логин?'}
        variant={'button'}
        buttonTitle={'Понятно'}
        open={isModalOpen(id)}
        close={() => handleClose()}
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2 md:gap-6">
            <p className="text_sm text-[#858892]">
              1. Зайдите в аккаунт Steam.
            </p>
            <p className="text_sm text-[#858892]">
              2. В правом верхнем углу нажмите на свой никнейм, далее в меню
              выберите «Об аккаунте».
            </p>
            <p className="text_sm text-[#858892]">
              3. На открывшейся странице будет указан ваш уникальный логин (не
              никнейм).
            </p>
          </div>
          <a
            href="https://store.steampowered.com/account/"
            className="text-[#7B58E8]"
          >
            ЛИБО ПЕРЕЙДИТЕ СРАЗУ НА ДАННУЮ СТРАНИЦУ STEAM
          </a>
          <img src={exampleImg} />
        </div>
      </Modal>
    </>
  );
};

export default ModalLogin;
