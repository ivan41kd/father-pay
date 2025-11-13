import Section from '../../components/Section';
import s from '../../components/Replenishment/replenishment.module.scss';
import ReplenishmentHeader from '../../components/Replenishment/ReplenishmentHeader';

import ReplenishmentForm from '../../components/Replenishment/ReplenishmentForm/ReplenishmentForm';
import ReplenishmentPayment from '../../components/Replenishment/ReplenishmentPayment/ReplenishmentPayment';

const ReplenishmentPage = () => {
  return (
    <Section className={'replenishment'}>
      <ReplenishmentHeader />
      <div className={s.replenishment__wrapper}>
        <ReplenishmentForm className={s.replenishment__form} />
        <ReplenishmentPayment />
      </div>
    </Section>
  );
};

export default ReplenishmentPage;
