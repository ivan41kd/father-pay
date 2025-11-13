import ModalAgreement from '../../Modal/ModalAgreement';
import ModalPolicy from '../../Modal/ModalPolicy';

const FooterDocs = ({ style }) => {
  return (
    <div className={style.footer__docs}>
      <ModalPolicy>
        <p className={style.footer__doc}>Политика конфиденциальности</p>
      </ModalPolicy>
      <ModalAgreement>
        <p className={style.footer__doc}>Пользовательское соглашение</p>
      </ModalAgreement>
    </div>
  );
};

export default FooterDocs;
