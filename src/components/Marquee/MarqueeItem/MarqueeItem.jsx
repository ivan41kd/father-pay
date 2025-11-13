const MarqueeItem = ({ style, name, price }) => {
  return (
    <div className={style.marquee__item}>
      <p className={`caption_xs ${style.marquee__item_name}`}>{name}</p>
      <p className={`caption_xs ${style.marquee__item_price}`}>
        Пополнил на <span>{price.toLocaleString()} ₽</span>
      </p>
    </div>
  );
};

export default MarqueeItem;
