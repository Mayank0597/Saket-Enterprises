import { AnimationOnScroll } from "react-animated-css";

const Button = () => {
  return (
    <AnimationOnScroll animateIn="animate__slideInRight">
      <button className="px-6 py-3 bg-orange-500 text-white font-bold">
        Hover Me
      </button>
    </AnimationOnScroll>
  );
};

export default Button;
