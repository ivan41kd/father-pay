import Modal from './Modal';

import parse from 'html-react-parser';

import { useId } from 'react';
import { useModalContext } from '../../providers/ModalProvider';
import { agreement } from '../../consts/agreement';

const ModalAgreement = ({ children }) => {
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
      <div onClick={handleOpen}>{children}</div>

      <Modal
        title={'Пользовательское соглашение'}
        variant={'icon'}
        open={isModalOpen(id)}
        close={() => handleClose()}
      >
        <div className="flex flex-col gap-8">
          {agreement.map((item, titleIndex) => {
            return (
              <div className="flex flex-col gap-3" key={titleIndex}>
                <h5 className="text-[#7B58E8] uppercase ">
                  {titleIndex + 1}. {item.title}
                </h5>

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
                        <div className="flex gap-4 flex-col">
                          <p
                            className={`text_sm ${
                              paragraph.boldTitle && 'text-white'
                            } text-[#858892]`}
                          >
                            {parse(paragraph.text)}
                          </p>
                          {paragraph.topic &&
                            paragraph.topic.map((topic, topicIndex) => (
                              <div className="flex gap-3 flex-col">
                                <p className="text-white font-medium text_sm">
                                  {topic.title}
                                </p>
                                <p className="text_sm text-[#858892]">
                                  {parse(topic.text)}
                                </p>
                              </div>
                            ))}
                        </div>
                      </div>

                      {paragraph.subparagraphs &&
                        paragraph.subparagraphs.map(
                          (subparagraph, subIndex) => (
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
                          )
                        )}
                    </div>
                  ))}
              </div>
            );
          })}
        </div>
      </Modal>
    </>
  );
};

export default ModalAgreement;
