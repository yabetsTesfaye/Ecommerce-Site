import prismadb from "@/lib/prismadb";

interface DashboardPageProps {
  params: {
    storeId: string;
  };
}
const Dashboard: React.FC<DashboardPageProps> = async ({ params }) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });
  return <div className="">Active Store: {store?.name}</div>;
};

export default Dashboard;
