import StaticPage from "@components/StaticPage";
import pageMeta from "@content/meta";
import MDXContent from "@lib/MDXContent";
import { IStaticInfo } from "interfaces/about/about.interface";

export default function Privacy({ privacyPolicy }: { privacyPolicy: IStaticInfo }) {
  return <StaticPage metadata={pageMeta.privacy} page={privacyPolicy} />;
}

export async function getStaticProps() {

  const { post: privateData } = await new MDXContent('static_pages').getPostFromSlug('privacy')

  const privacyPolicy: IStaticInfo = {
    slug: privateData?.meta?.slug || "",
    title: privateData?.meta?.title || "",
    keywords: privateData?.meta?.keywords || "",
    published_at: privateData?.meta?.date || "",
    content: privateData?.source as any,
    excerpt: privateData?.meta?.excerpt || "",
    cover_image: privateData?.meta?.image || "",
  }

  return {
    props: {
      privacyPolicy,
    },
  };
}
