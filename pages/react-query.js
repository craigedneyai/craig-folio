import DescriptionList from "../components/DescriptionList";
import Layout from "../components/Layout";
import BackButton from "../components/BackButton";

export default function ReactQueryPage() {
  return (
    <Layout>
      <BackButton />
      <DescriptionList
        title="React Query Example"
        description="In this example..."
      />
    </Layout>
  );
}
