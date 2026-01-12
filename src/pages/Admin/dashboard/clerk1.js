import { useEffect } from "react";
import { useRouter } from "next/router";

const Clerk1 = () => {
  const router = useRouter();

  useEffect(() => {
    const auth = sessionStorage.getItem("isAuthenticated");
    const role = sessionStorage.getItem("role");

    if (!auth || role !== "clerk1") {
      router.replace("/adminlogin");
    }
  }, []);

  return (
    <div>
      <h1>Clerk 1 – Document Verification</h1>
    </div>
  );
};

export default Clerk1;
