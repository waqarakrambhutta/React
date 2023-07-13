interface Props {
  children: string,
  onClick:()=>void,
  color: 'primary'| 'warning'|'dark',
}

const Button = ({ children, onClick, color}: Props) => {
  return (
    <div>
      <button className={"btn btn-"+color} onClick={onClick}>{children}</button>
    </div>
  );
};
export default Button;
