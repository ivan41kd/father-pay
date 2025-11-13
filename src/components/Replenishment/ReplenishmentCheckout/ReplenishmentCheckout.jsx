import { useReplenishmentContext } from '../../../providers/ReplenishmentProvider';
import ToolTip from '../../Tooltip/Tooltip';

import s from '../replenishment.module.scss';
const ReplenishmentCheckout = () => {
  const { amount, commission } = useReplenishmentContext();

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex justify-between">
        <div className="flex gap-1 items-center">
          <p className={s.replenishment__checkout_name}>Заплатите: </p>
        </div>
        <p className={s.replenishment__checkout_value}>
          {new Intl.NumberFormat('ru-RU').format(amount)} ₽
        </p>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-1 items-center">
          <p className={s.replenishment__checkout_name}>
            Получите на баланс Steam:
          </p>
        </div>
        <p className={s.replenishment__checkout_value}>
          ~{' '}
          {new Intl.NumberFormat('ru-RU').format(
            amount - (amount * commission) / 100
          )}{' '}
          ₽
        </p>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-1 items-center">
          <p className={s.replenishment__checkout_name}>Комиссия сервиса:</p>
          <ToolTip title={`${commission}% — фиксировнная комиссия`} />
        </div>
        <p className={s.replenishment__checkout_value}>
          {new Intl.NumberFormat('ru-RU').format((amount * commission) / 100)} ₽
        </p>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-1 items-center">
          <p className={s.replenishment__checkout_name}>Банковские издержки:</p>
          <ToolTip
            title={'Сумма включает комиссии банка за проведение операции.'}
          />
        </div>
        <p className={s.replenishment__checkout_value}>
          {new Intl.NumberFormat('ru-RU').format((amount * 2) / 100)} ₽
        </p>
      </div>
    </div>
  );
};

export default ReplenishmentCheckout;
