import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
  const { googleLogin, githubLogin, twitterLogin } = useAuth();

  return (
    <div>
      <div className="flex gap-4 justify-center items-center">
        <button onClick={() => googleLogin()} className="btn">
          <span>
            <FcGoogle />
          </span>{" "}
          Google
        </button>
        <button className="btn">
          <span>
            <FaGithub />
          </span>{" "}
          Github
        </button>
        <button className="btn">
          <span>
            <FaTwitter />
          </span>{" "}
          Twitter
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
