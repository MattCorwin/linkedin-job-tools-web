import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { marked } from 'marked';
import { getPost } from '~/models/post.server';
import Markdown from '~/components/markdown';
import Container from '~/components/container';
import Navbar from '../components/navbar';
import Cta from '../components/cta';

export const loader: LoaderFunction = async ({ params }) => {
  if (params.slug) {
    const post = await getPost(params.slug);
    const html = marked(post.markdown);
    return json({ post, html });
  }
};

export const meta = ({
  data,
}: {
  data: { post: { title: string; summary: string } };
}) => {
  return [
    {
      title: data.post.title,
    },
    {
      name: 'description',
      content: data.post.summary,
    },
  ];
};

export default function PostSlug() {
  const { post, html } = useLoaderData<typeof loader>();
  return (
    <>
      <Navbar />
      <Container
        className={
          'flex w-full flex-col mt-4 items-center justify-center text-center'
        }
      >
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          {post.title}
        </h2>
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          {post.date}
        </p>
        <img
          src={post.image}
          alt={post.imageAltText}
          style={{ maxWidth: '300px' }}
        />
        <Markdown>
          <div dangerouslySetInnerHTML={{ __html: html }} id="md-container"/>
        </Markdown>
      </Container>
      <Cta />
    </>
  );
}
