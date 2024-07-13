import React, { useContext, useState } from "react";
import Logo from "../assets/logo.png";
import { FcGoogle } from "react-icons/fc";
import myContext from "../context/myContext";
import toast from "react-hot-toast";
import { fireDB, auth, googleProvider } from "../firebase/FirebaseConfig";
import {
  collection,
  addDoc,
  Timestamp,
  where,
  query,
  onSnapshot,
} from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const context = useContext(myContext);
  const { loading, setLoading } = context;

  //navigate
  const navigate = useNavigate();

  //user signup state
  const [userSignup, setUserSignup] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  //user signup Function
  const userSignupFunction = async (event) => {
    event.preventDefault();
    if (
      userSignup.name === "" ||
      userSignup.email === "" ||
      userSignup.password === ""
    ) {
      return toast.error("All fields required");
    }
    setLoading(true);
    try {
      const users = await createUserWithEmailAndPassword(
        auth,
        userSignup.email,
        userSignup.password
      );
      // create user object
      const user = {
        name: userSignup.name,
        email: users.user.email,
        uid: users.user.uid,
        role: userSignup.role,
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      };

      //create user Reference
      const userReference = collection(fireDB, "user");

      // Add User Detail
      await addDoc(userReference, user);

      setUserSignup({
        name: "",
        email: "",
        password: "",
        role: "user",
      });

      toast.success("Signup Successfully");
      setIsLogin(true); // Redirect to login section
    } catch (error) {
      toast.error("Signup failed");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  //user login state
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  //user login function
  const userLoginFunction = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const users = await signInWithEmailAndPassword(
        auth,
        userLogin.email,
        userLogin.password
      );
      console.log(users);

      try {
        const q = query(
          collection(fireDB, "user"),
          where("uid", "==", users?.user?.uid)
        );
        const data = onSnapshot(q, (QuerySnapshot) => {
          let user;
          QuerySnapshot.forEach((doc) => (user = doc.data()));
          localStorage.setItem("users", JSON.stringify(user));
          setUserLogin({
            email: "",
            password: "",
          });
          toast.success("Login Successfully");
          setLoading(false);
          if (user.role === "user") {
            navigate("/user-dashboard");
          } else {
            navigate("/admin-dashboard");
          }
        });
        return () => data;
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // Google login
  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      // Handle the result from Google sign-in
      const user = result.user;

      toast.success("Login Successful");
      setLoading(false);
      navigate("/"); // Redirect after successful sign-in
    } catch (error) {
      toast.error("Google sign-in failed");
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 flex-col px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a
        href="/"
        className="flex items-center mb-6 text-3xl font-semibold text-gray-900 dark:text-white"
      >
        <img className="w-20 h-20 mr-2" src={Logo} alt="Logo" />
        The Woolen Rabbit
      </a>
      <div className="bg-white dark:bg-gray-800 p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
          {isLogin ? "Login to your account" : "Sign Up for your account"}
        </h2>

        <form onSubmit={isLogin ? userLoginFunction : userSignupFunction}>
          {!isLogin && (
            <div className="mb-4">
              <label
                className="block text-gray-700 dark:text-gray-300 mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full px-3 py-2 border rounded text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-gray-700 focus:outline-none focus:border-teal-500"
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={userSignup.name}
                onChange={(e) => {
                  setUserSignup({
                    ...userSignup,
                    name: e.target.value,
                  });
                }}
              />
            </div>
          )}
          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-300 mb-2"
              htmlFor="email"
            >
              Email
            </label>
            {loading && (
              <div className="flex justify-center items-center mb-4">
                <Loader />
              </div>
            )}
            <input
              className="w-full px-3 py-2 border rounded text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-gray-700 focus:outline-none focus:border-teal-500"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={isLogin ? userLogin.email : userSignup.email}
              onChange={(e) => {
                if (isLogin) {
                  setUserLogin({
                    ...userLogin,
                    email: e.target.value,
                  });
                } else {
                  setUserSignup({
                    ...userSignup,
                    email: e.target.value,
                  });
                }
              }}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-300 mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full px-3 py-2 border rounded text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-gray-700 focus:outline-none focus:border-teal-500"
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={isLogin ? userLogin.password : userSignup.password}
              onChange={(e) => {
                if (isLogin) {
                  setUserLogin({
                    ...userLogin,
                    password: e.target.value,
                  });
                } else {
                  setUserSignup({
                    ...userSignup,
                    password: e.target.value,
                  });
                }
              }}
            />
          </div>
          {isLogin && (
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center text-gray-700 dark:text-gray-300">
                <input
                  type="checkbox"
                  className="form-checkbox text-teal-600 dark:text-teal-400 focus:ring-teal-500 dark:focus:ring-teal-400"
                />
                <span className="ml-2">Remember Me</span>
              </label>
              <a
                href="#"
                className="text-teal-600 hover:underline dark:text-teal-400"
              >
                Forgot Password?
              </a>
            </div>
          )}
          <button
            className="w-full py-2 px-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded transition duration-300"
            type="submit"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <div className="flex items-center justify-between mt-6">
          <hr className="w-full border-gray-300 dark:border-gray-600" />
          <span className="text-gray-600 dark:text-gray-400 mx-2">or</span>
          <hr className="w-full border-gray-300 dark:border-gray-600" />
        </div>

        <div className="text-gray-700 dark:text-gray-300 mt-6 flex items-center justify-center">
          {isLogin ? (
            <p>
              Don't have an account?
              <button
                className="text-teal-600 hover:underline dark:text-teal-400"
                onClick={() => setIsLogin(false)}
              >
                Sign Up
              </button>
            </p>
          ) : (
            <p>
              Already have an account?
              <button
                className="text-teal-600 hover:underline dark:text-teal-400"
                onClick={() => setIsLogin(true)}
              >
                Login
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
