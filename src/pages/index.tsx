import Layout from "@/components/Layout";

const Home = () => {
  return (
    <Layout>
      <h1>Welcome to My Software Website</h1>
      <p>Introduce your software here.</p>
      <button className="px-4 py-2 bg-red-200 rounded hover:bg-opacity-75 focus:outline-none">
        下载
      </button>
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="bg-gray-200 p-4">
          <h3 className="font-bold">Dynamic website scraping</h3>
          <p>Web Scraper can visit multiple levels of a website</p>
        </div>
        <div className="bg-gray-200 p-4">
          <h3 className="font-bold">JavaScript execution</h3>
          <p>Web sites are rendered completely</p>
        </div>
        <div className="bg-gray-200 p-4">3</div>
        <div className="bg-gray-200 p-4">4</div>
        <div className="bg-gray-200 p-4">5</div>
        <div className="bg-gray-200 p-4">6</div>
      </div>
    </Layout>
  );
};

export default Home;
