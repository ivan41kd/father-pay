import s from '../faq.module.scss';
const FaqStep = ({ icon, title, step, steps }) => {
  return (
    <div className={s.faq__step}>
      <div className="flex justify-between">
        <div className="size-15 rounded-full flex items-center justify-center bg-[#21242B]">
          {icon}
        </div>
        <p className={s.faq__step_steps}>
          {step}/{steps}
        </p>
      </div>
      <p className={s.faq__step_text}>{title}</p>
    </div>
  );
};

export default FaqStep;
