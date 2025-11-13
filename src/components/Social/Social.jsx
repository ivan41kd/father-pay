import s from './social.module.scss';
const Social = ({ icon, link, title }) => {
  return (
    <div
      className={
        s.social__social +
        ' size-8 flex items-center justify-center rounded-3xl bg-[#282D36]'
      }
      key={title}
    >
      <a
        href={link}
        className={`${s.social__icon} size-full flex items-center justify-center rounded-3xl bg-[#282D36]`}
      >
        {icon}
      </a>
    </div>
  );
};

export default Social;
