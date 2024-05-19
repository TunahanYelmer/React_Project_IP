"use client";
import { useRouter } from "next/navigation";

const RedirectComponent = () => {
  const router = useRouter();

  router.push("/admin/contentUpdate");
  return <div>Redirecting...</div>;
};

export default RedirectComponent;
