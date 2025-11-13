import Container from '../Container';

const Section = ({ className, children }) => {
  return (
    <section className={className}>
      <Container>{children}</Container>
    </section>
  );
};

export default Section;
