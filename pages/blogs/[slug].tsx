import MDXComponents from '@components/MDXComponents';
import Metadata from '@components/MetaData';
import BlogLayout from '@layout/BlogLayout';
import { IArticleDevTo } from '@provider/dev.to/devto.interface';
import devToProvider from '@provider/dev.to/devto.provider';
import { getMDXTableOfContents } from '@utils/mdx.util';
import { ITableOfContentMDX } from 'interfaces/common/common.interface';
import { GetStaticPropsContext } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import PageNotFound from 'pages/404';

export default function Post({
  post,
  error,
}: {
  post: IArticleDevTo & { content: any; tableOfContents: ITableOfContentMDX[] };
  error: boolean;
}) {
  if (!post || error) return <PageNotFound />;

  return (
    <>
      <Metadata
        title={post.title}
        suffix='Victor Rosario'
        description={post.description}
        previewImage={post.cover_image}
        keywords={post.tags ?? ''}
      />

      <BlogLayout post={post}>
        <MDXRemote
          {...(post.content as any)}
          frontmatter={{
            slug: post.slug,
            excerpt: post.description,
            title: post.title,
            date: post.published_at,
            keywords: post.tags ?? '',
            image: post.cover_image,
          }}
          components={MDXComponents}
        />
      </BlogLayout>
    </>
  );
}

type StaticProps = GetStaticPropsContext & {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: StaticProps) {
  const { slug } = params;
  const post = await devToProvider.getArticleBySlug(slug);

  if (!post) {
    return { props: { error: true, post: null } };
  }

  const mdxContent = post.body_markdown as string;
  const content = await serialize(mdxContent);
  const tableOfContents = getMDXTableOfContents(mdxContent);

  return {
    props: {
      error: false,
      post: { ...post, content, tableOfContents },
    },
  };
}

export async function getStaticPaths() {
  const posts = await devToProvider.getPageOfPosts();
  const paths = posts.map(({ slug }) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}
