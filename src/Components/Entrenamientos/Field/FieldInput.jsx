import style from "./FieldInput.module.css";

const FieldInput = ({ field, id, text, textWrong, children }) => {
  console.log(field);
  return (
    <div
      className={
        field.error
          ? `${style.containerInput} ${style.errorContainer}`
          : style.containerInput
      }
    >
      <label className={style.label} htmlFor={id}>
        {text}
      </label>
      {children}
      {field.error && (
        <label htmlFor={id} className={style.lblWrong}>
          {textWrong}
        </label>
      )}
    </div>
  );
};

export default FieldInput;
