import { useNavigate } from "react-router";
import { AuthContext } from "../../../Utilities/AuthProvider/AuthProvider";
import { useContext } from "react";

const SocialLogin = ({ className }) => {
  const navigate = useNavigate();
  const { signInWithGoogle } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className={`${className}`}>
      <button
        onClick={() => handleGoogleLogin()}
        className="bg-[#ed5565] hover:bg-black duration-300 text-base py-2 px-5 text-white capitalize font-semibold rounded-sm flex justify-center items-center gap-2"
        style={{ width: "100%" }}
      >
        Sign Up With Google
      </button>
    </div>
  );
};

export default SocialLogin;
