import { useTypewriter, cursor } from "react-simple-typewriter";

const Typewriter = () => {
  const [typeEffect] = useTypewriter({
    words: [
      "Bangladesh",
      "Thailand",
      "Indonesia",
      "Malaysia",
      "Vietnam",
      "Cambodia",
    ],
    loop: true,
    typeSpeed: 200,
    delaySpeed: 100,
  });
  return (
    <div>
      <h1 className=" font-poppins lg:text-6xl text-4xl font-bold text-left">
        Find <br />
        Next Place <br />
        To <span className=" text-[#5c98f2] ">{typeEffect}</span>
      </h1>
    </div>
  );
};

export default Typewriter;
