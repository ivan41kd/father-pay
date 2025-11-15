import Modal from './Modal';
import { contacts } from '../../consts/contacts';
import parse from 'html-react-parser';
import Socials from '../Socials/Socials';
import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, openModal } from './redux/actions';

const ModalContact = ({ handler }) => {
  const dispatch = useDispatch();
  const { modal } = useSelector((state) => state);
  const id = useId();

  const handleOpen = () => {
    dispatch(openModal(id));
  };
  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <div onClick={handleOpen}>{handler}</div>

      <Modal
        title={'Контакты'}
        variant={'icon'}
        open={modal.activeModalId === id}
        close={() => handleClose()}
      >
        {contacts.map((contact, index) => (
          <div className="" key={index}>
            <p className="text_sm text-[#858892]">{contact.companyName}</p>
            <p className="text_sm text-[#858892]">
              Registration No. {contact.registrationNumber}
            </p>
            <br />
            <p className="text_sm text-[#858892]">{parse(contact.address)}</p>
          </div>
        ))}
        <div className="flex flex-col gap-3">
          <p className="caption_xs text-[#4F5562]">Техническая поддержка:</p>
          <p className="text_sm text-[#7B58E8]">
            <a href="mailto:support@fatherpay.com">support@fatherpay.com</a>
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="caption_xs text-[#4F5562]">
            Написать нам в соц. сетях:
          </p>
          <Socials />
        </div>
      </Modal>
    </>
  );
};

export default ModalContact;
