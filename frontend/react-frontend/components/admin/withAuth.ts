import { useRouter } from "next/router";
import { useEffect, FC } from "react";
import Cookies from "js-cookie"; // If you're using cookies to track login sessions

const withAuth = (Component: FC) => {
  const ProtectedRoute: FC = (props) => {
    const router = useRouter();
    const isLoggedIn = Cookies.get("isLoggedIn") === "true"; // Replace this with your actual logic

    useEffect(() => {
      if (!isLoggedIn) {
        router.replace("/admin-login");
      }
    }, [isLoggedIn]);

    return isLoggedIn ? <Component {...props} /> : null;
  };

  return ProtectedRoute;
};

export default withAuth;
