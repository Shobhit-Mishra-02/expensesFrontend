import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Navigation from "@/components/Navigation";

const Dashboard = () => {
  const cookiesStore = cookies();

  if (!cookiesStore.get("user")?.value.length) {
    redirect("/");
  }

  const user = cookiesStore.get("user");
  return (
    <div>
      <Navigation />
      Dashboard {user?.value}
    </div>
  );
};

export default Dashboard;
