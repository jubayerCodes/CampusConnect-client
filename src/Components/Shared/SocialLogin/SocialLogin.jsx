import { useNavigate } from "react-router";
import { AuthContext } from "../../../Utilities/AuthProvider/AuthProvider";
import { useContext } from "react";

const SocialLogin = ({ className, from }) => {
  const navigate = useNavigate();
  const { signInWithGoogle, signInWithFacebook } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);

        fetch(`${import.meta.env.VITE_API}/user`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: user?.email, fullName: user?.displayName, address: '' })
        })
        navigate(from)
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const handleFacebookLogin = () => {
    signInWithFacebook()
      .then(result => {
        const user = result.user;

        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;

        navigate(from)
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }

  return (
    <div className={`${className} flex flex-col items-stretch gap-2`}>
      <button
        onClick={() => handleGoogleLogin()}
        className="bg-[#ed5565] hover:bg-black duration-300 text-base py-2 px-5 text-white capitalize font-semibold rounded-sm flex justify-center items-center gap-2"
        style={{ width: "100%" }}
      >
        Sign Up With Google
      </button>
      <button
        onClick={() => handleFacebookLogin()}
        className="bg-[blue] hover:bg-black duration-300 text-base py-2 px-5 text-white capitalize font-semibold rounded-sm flex justify-center items-center gap-2"
        style={{ width: "100%" }}
      >
        Sign Up With Facebook
      </button>
    </div>
  );
};

export default SocialLogin;
