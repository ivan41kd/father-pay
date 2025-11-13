import { useState } from 'react';
import Marquee from 'react-fast-marquee';
import MarqueeItem from './MarqueeItem/MarqueeItem';
import s from './marquee.module.scss';

const MarqueeComponent = () => {
  const [items, setitems] = useState([
    {
      nickname: 'denzell***',
      price: 1350,
    },
    {
      nickname: 'div666***',
      price: 500,
    },
    {
      nickname: 'ya***',
      price: 450,
    },
    {
      nickname: 'aha***',
      price: 550,
    },
    {
      nickname: 'div666***',
      price: 100,
    },
    {
      nickname: 'ymirk***',
      price: 3050,
    },
    {
      nickname: 'evmenen***',
      price: 720,
    },
    {
      nickname: 'ILIYA3***',
      price: 4400,
    },
    {
      nickname: 'div666***',
      price: 100,
    },
    {
      nickname: 'div666***',
      price: 500,
    },
    {
      nickname: 'xgregx9***',
      price: 22200,
    },
    {
      nickname: 'gomik3k***',
      price: 1350,
    },
  ]);
  return (
    <Marquee autoFill={true} speed={20}>
      {items.map((item, index) => (
        <MarqueeItem
          style={s}
          name={item.nickname}
          price={item.price}
          key={item + index}
        />
      ))}
    </Marquee>
  );
};

export default MarqueeComponent;
