import Social from '../Social/Social';
import TgIcon from '../../assets/tg-icon.svg?react';
import VkIcon from '../../assets/vk-icon.svg?react';
const Socials = () => {
  const socials = [
    {
      icon: (
        <TgIcon className={`size-4 transition-all duration-300 ease-in-out`} />
      ),
      link: 'https://t.me/krwy41',
      title: 'tg',
    },
    {
      icon: (
        <VkIcon className={`size-4 transition-all duration-300 ease-in-out`} />
      ),
      link: 'https://vk.com/ivan41kd',
      title: 'vk',
    },
  ];
  return (
    <div className="flex items-center gap-2">
      {socials.map((social, index) => (
        <Social
          icon={social.icon}
          link={social.link}
          title={social.title}
          key={index}
        />
      ))}
    </div>
  );
};

export default Socials;
