import Container from '../Container';
import s from './footer.module.scss';
import FooterDocs from './FooterDocs/FooterDocs';
import FooterNav from './FooterNav/FooterNav';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.footer__wrapper}>
          <FooterNav style={s} />
          <FooterDocs style={s} />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
