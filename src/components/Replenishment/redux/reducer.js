import visaIcon from '../../../assets/visa-icon.svg';
import qiwiIcon from '../../../assets/qiwi-icon.svg';
import youIcon from '../../../assets/you-icon.svg';
import sbpIcon from '../../../assets/sbp-icon.svg';
import lavaIcon from '../../../assets/lava-icon.svg';
import usdtIcon from '../../../assets/usdt-icon.svg';
import tonIcon from '../../../assets/ton-icon.svg';
import trxIcon from '../../../assets/trx-icon.svg';
const initialState = {
  login: '',
  amount: 0,
  methods: [
    {
      icon: visaIcon,
      commission: 9,
    },
    {
      icon: qiwiIcon,
      commission: 13,
    },
    {
      icon: youIcon,
      commission: 10,
    },
    {
      icon: sbpIcon,
      commission: 7,
    },
    {
      icon: lavaIcon,
      commission: 12,
    },
    {
      icon: usdtIcon,
      commission: 7,
    },
    {
      icon: tonIcon,
      commission: 8,
    },
    {
      icon: trxIcon,
      commission: 8,
    },
  ],
  activeMethod: 0,
  commission: 9,
};

export default function ReplenishmentReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_LOGIN':
      return {
        ...state,
        login: action.payload.login,
      };
    case 'SET_AMOUNT':
      return {
        ...state,
        amount: action.payload.amount,
      };
    case 'SET_METHOD':
      return {
        ...state,
        activeMethod: action.payload.methodIndex,
        commission: action.payload.commission,
      };
    default:
      return state;
  }
}
