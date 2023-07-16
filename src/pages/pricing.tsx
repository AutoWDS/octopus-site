import Layout from "@/components/Layout";

const EditionItem = ({ title, items }: { title: string; items: string[] }) => {
  return (
    <div className="w-full shadow-lg sm:w-1/5 px-4 rounded-md">
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-center">{title}</h3>
        <ul className="list-disc list-inside">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Pricing = () => {
  return (
    <Layout>
      <div className="flex justify-center gap-x-4">
        <EditionItem title="免费版" items={["功能1", "功能1", "功能1"]} />
        <EditionItem title="个人版" items={["功能1", "功能1", "功能1"]} />
        <EditionItem title="团队版" items={["功能1", "功能1", "功能1"]} />
        <EditionItem title="企业版" items={["功能1", "功能1", "功能1"]} />
      </div>
    </Layout>
  );
};

export default Pricing;
