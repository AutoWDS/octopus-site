import Layout from "@/components/Layout";
import Link from "next/link";

const Docs = () => {
  return (
    <Layout>
      <h1>Documentation</h1>
      <ul>
        <li>
          <Link href="/docs/getting-started">Getting Started</Link>
        </li>
        <li>
          <Link href="/docs/configuration">Configuration</Link>
        </li>
        {/* Add more links to your documentation pages */}
      </ul>
    </Layout>
  );
};

export default Docs;
