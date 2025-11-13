import PaymentMethods from '../../PaymentMethods/PaymentMethods';
import ReplenishmentCheckout from '../ReplenishmentCheckout/ReplenishmentCheckout';

const ReplenishmentPayment = () => {
  return (
    <div className="flex flex-col gap-3.5 w-full max-md:hidden">
      <PaymentMethods />
      <ReplenishmentCheckout />
    </div>
  );
};

export default ReplenishmentPayment;
