import { Link } from "react-router-dom";

const Buttons = ({ className, href, onClick, children, px, white }) => {

  const renderButton = () => {
    const buttonClasses = `button relative inline-flex items-center border-2 border-transparent justify-center rounded-3xl bg-color-1 hover:bg-transparent hover:border-color-1 hover:border-2 h-11 transition-colors hover:text-color-1 hover:shadow-[0px_0px_20px_rgba(174,0,255,0.438)] ${px || "px-7"} ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;

    return href ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className={buttonClasses}>
        <span className="text-sm">{children}</span>
      </a>
    ) : (
      <button onClick={onClick} className={buttonClasses}>
        <span className="p-5 text-sm">{children}</span>
      </button>
    );
  };

  return renderButton();
}

export default Buttons;
