import Modal from './Modal';

import parse from 'html-react-parser';

import { policy } from '../../consts/policy';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, openModal } from './redux/actions';
import { useId } from 'react';

const ModalPolicy = ({ children }) => {
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
      <div onClick={handleOpen}>{children}</div>

      <Modal
        title={'Политика конфиденциальности'}
        variant={'icon'}
        open={modal.activeModalId === id}
        close={() => handleClose()}
      >
        <div className="flex flex-col gap-8">
          {policy.map((item, titleIndex) => {
            return (
              <div className="flex flex-col gap-3" key={titleIndex}>
                <h5 className="text-[#7B58E8] uppercase ">
                  {titleIndex + 1}. {item.title}
                </h5>
                <p className="text_sm text-[#858892]">{parse(item.text)}</p>
                {item.paragraphs &&
                  item.paragraphs.map((paragraph, paragraphIndex) => (
                    <div
                      className="flex gap-2.5 flex-col"
                      key={titleIndex + paragraphIndex}
                    >
                      <div className="flex gap-2.5">
                        <p className="text-[#7B58E8] text_sm">
                          {titleIndex + 1}.{paragraphIndex + 1}
                        </p>
                        <p className="text_sm text-[#858892]">
                          {parse(paragraph.text)}
                        </p>
                      </div>
                      {paragraph.subparagraph &&
                        paragraph.subparagraph.map((subparagraph, subIndex) => (
                          <div
                            className="flex gap-2.5"
                            key={titleIndex + paragraphIndex + subIndex}
                          >
                            <p className="text-[#7B58E8] text_sm">
                              {titleIndex + 1}.{paragraphIndex + 1}.
                              {subIndex + 1}
                            </p>
                            <p className="text_sm text-[#858892]">
                              {parse(subparagraph.text)}
                            </p>
                          </div>
                        ))}
                    </div>
                  ))}
                {item.endtext && (
                  <p className="text_sm text-[#858892]">
                    {parse(item.endtext)}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </Modal>
    </>
  );
};

export default ModalPolicy;
