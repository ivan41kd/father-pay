const ReplenishmentInfo = ({ icon, title, value, style }) => {
  return (
    <div className={style.replenishment__stats_item}>
      {icon}
      <div className={style.replenishment__stats_item_wrapper}>
        <p className={`number_md ${style.replenishment__stats_value}`}>
          {value.toLocaleString()}
        </p>
        <p
          className={`description_sm uppercase ${style.replenishment__stats_title}`}
        >
          {title}
        </p>
      </div>
    </div>
  );
};

export default ReplenishmentInfo;
