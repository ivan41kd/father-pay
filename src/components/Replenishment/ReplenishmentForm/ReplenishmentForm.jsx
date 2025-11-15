import CheckBox from '../../Checkbox/Checkbox';
import { useForm, Controller } from 'react-hook-form';
import Button from '../../Button';
import Input from '../../Input/Input';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Form from '../../Form/Form';
import ButtonsGroup from '../../ButtonsGroup/ButtonsGroup';
import PaymentMethods from '../../PaymentMethods/PaymentMethods';
import ReplenishmentCheckout from '../ReplenishmentCheckout/ReplenishmentCheckout';
import Tag from '../../Tag/Tag';
import ModalLogin from '../../Modal/ModalLogin';
import { useDispatch, useSelector } from 'react-redux';
import { setAmount, setLogin } from '../redux/actions';

const ReplenishmentForm = ({ className }) => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    control,
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      amount: 0,
    },
  });
  const dispatch = useDispatch();
  const { amount, login } = useSelector((state) => state.replenishment);

  const submitReplenishmentForm = (e) => {
    console.log(e);
  };

  return (
    <Form
      className={className}
      onSubmit={handleSubmit(submitReplenishmentForm)}
      title={`Заполните данные`}
    >
      <Controller
        name={'login'}
        control={control}
        value={login}
        render={({ field }) => {
          return (
            <Input
              type={'text'}
              name={'login'}
              value={login}
              error={errors.login}
              register={{
                ...register('login', {
                  required: true,
                  minLength: 3,
                  maxLength: 32,
                  pattern: {
                    value: /^(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/,
                    message: 'Only English letters are allowed',
                  },
                }),
              }}
              onChange={(v) => {
                field.onChange(v);
                dispatch(setLogin(v));
              }}
              placeholder={'Введите логин'}
              icon={
                <ModalLogin
                  handler={<Tag text={'Где его взять?'} />}
                  modalId={'modal-login'}
                />
              }
            />
          );
        }}
      />

      <Controller
        name={'amount'}
        control={control}
        value={amount}
        render={({ field }) => {
          return (
            <div className="flex-col flex w-full gap-3">
              <Input
                isNumeric={true}
                type={'text'}
                name={'amount'}
                error={errors.amount}
                value={amount}
                onChange={(e) => {
                  const inputValue = e;
                  const numericValue = inputValue
                    .replace(/[^0-9.]/g, '')
                    .replace(/^0+/, '');
                  field.onChange(numericValue);
                  dispatch(setAmount(numericValue !== '' ? numericValue : 0));
                }}
                register={{ ...register('amount', { required: true, min: 1 }) }}
                placeholder={'Введите сумму'}
                pattern="/[^0-9.]/g"
                icon={<AccountBalanceWalletIcon color="tertiary" />}
              />
              <ButtonsGroup
                onClick={(e) => {
                  dispatch(setAmount(Number(e.target.value)));
                  field.onChange(
                    Number(e.target.value).toLocaleString('ru-RU')
                  );
                  setValue('amount', Number(e.target.value));
                }}
              />
              <div className="md:hidden">
                <PaymentMethods />
              </div>
            </div>
          );
        }}
      />
      <CheckBox
        name={'agree'}
        label={'Я подтверждаю, что указал свой логин Steam, а не никнейм'}
        error={errors.agree}
        register={{ ...register('agree', { required: true }) }}
      />
      <Button text={'Оплатить'} className={'py-5 max-md:py-3.5'} />
      <div className="md:hidden">
        <ReplenishmentCheckout />
      </div>
    </Form>
  );
};

export default ReplenishmentForm;
