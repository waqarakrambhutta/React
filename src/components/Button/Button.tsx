import styles from "./Button.module.css"

interface Props {
  color: 'primary'| 'secondary'| 'warning',
  children: string,
  onClick:()=>void,
}

const Button = ({color, children, onClick}: Props) => {
  return (
      <button className={[styles.btn, styles['btn-'+ color]].join(' ')} onClick={onClick} >{children}</button>

  );Button
};
export default Button;
