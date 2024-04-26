import { useTypewriter, cursor } from "react-simple-typewriter";

const Typewriter = () => {
  const [typeEffect] = useTypewriter({
    words: ["Bangkok", "Chiang Mai", " Ayutthaya", "Phuket", "Phi Phi Islands"],
    loop: true, // Set loop to true if you want the typewriter effect to loop
    typeSpeed: 200,
    delaySpeed: 100,
  });
  return (
    <div>
      <h1 className=" font-poppins text-5xl font-bold text-left">
        Find <br />
        Next Place <br />
        To <span className=" text-[#5c98f2]">{typeEffect}</span>
      </h1>
    </div>
  );
};

export default Typewriter;
