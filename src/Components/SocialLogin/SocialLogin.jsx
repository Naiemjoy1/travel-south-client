import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useNavigate, useLocation } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin, githubLogin, twitterLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from || "/";

  const handleSocialLogin = (socialProvider) => {
    socialProvider()
      .then((result) => {
        if (result) {
          navigate(from);
        }
        // console.log(result.user);
      })
      .catch((error) => {
        console.error("Social login error:", error);
      });
  };

  return (
    <div>
      <div className="flex gap-4 justify-center items-center">
        <button onClick={() => handleSocialLogin(googleLogin)} className="btn">
          <span>
            <FcGoogle />
          </span>{" "}
          Google
        </button>
        <button onClick={() => handleSocialLogin(githubLogin)} className="btn">
          <span>
            <FaGithub />
          </span>{" "}
          Github
        </button>
        <button onClick={() => handleSocialLogin(twitterLogin)} className="btn">
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
