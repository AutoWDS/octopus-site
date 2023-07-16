import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

interface DocContent {
  content: string;
}

interface DocPath {
  params: {
    slug: string;
  };
}

const DocsPage = ({ content }: DocContent) => {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync("docs"); // 替换为你的 Markdown 文件夹路径
  const paths = files.map((filename) => ({
    params: { slug: filename.replace(".md", "") },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: DocPath) {
  const filePath = path.join("docs", `${params.slug}.md`); // 替换为你的 Markdown 文件夹路径
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      content: contentHtml,
    },
  };
}

export default DocsPage;
