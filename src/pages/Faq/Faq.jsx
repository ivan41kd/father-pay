import Accordion from '../../components/Accordion/Accordion';
import Section from '../../components/Section';
import { faqItems } from '../../consts/faq';
import s from './faq.module.scss';
import FaqSteps from './FaqSteps/FaqSteps';

const Faq = () => {
  return (
    <Section className={s.faq}>
      <div className="flex justify-between gap-5 max-md:flex-col">
        <div className="flex flex-col gap-10 md:max-w-[568px] w-full">
          <div className="flex flex-col gap-4">
            <h1 className="text-white w-full max-md:text-2xl!">
              Общие вопросы и ответы
            </h1>
            <p className={`text_md ${s.faq__subtitle}`}>
              Все, что вам нужно знать о пополнении и его работе. Не можете
              найти ответ? <span>Задать вопрос.</span>
            </p>
          </div>
          <FaqSteps />
        </div>
        <div className="md:max-w-[568px] w-full">
          <Accordion items={faqItems} />
        </div>
      </div>
    </Section>
  );
};

export default Faq;
