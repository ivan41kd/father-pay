import React from 'react';

const HeaderOnline = ({ style, value }) => {
  return (
    <div className={style.header__online}>
      <span className="size-1.5 flex rounded-lg bg-green-500"></span>
      <div className={style.header__online_info}>
        <p className="number_sm text-white">{value.toLocaleString()}</p>
        <p className="description_sm text-[#4F5562] uppercase">Онлайн</p>
      </div>
    </div>
  );
};

export default HeaderOnline;
