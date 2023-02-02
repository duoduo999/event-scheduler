import { type NextPage } from "next";
import { useSession } from "next-auth/react";

const Dashboard: NextPage = () => {
    const { data: session } = useSession();
    return <h1>Welcome {session?.user?.name}</h1>;
};

export default Dashboard;
