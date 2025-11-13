const Form = ({ className, onSubmit, title, button, children }) => {
  return (
    <form className={className} onSubmit={onSubmit}>
      <p className="caption_sm text-[#4F5562]">{title}</p>
      {children}
      {button}
    </form>
  );
};

export default Form;
