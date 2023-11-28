import { Link, useLoaderData } from '@remix-run/react';
import { getPosts } from '~/models/post.server';
import { json } from '@remix-run/node';
import Container from '~/components/container';
import Navbar from "../components/navbar";
import Cta from "../components/cta";

export const meta = () => {
  return [
    {
      title: 'Blog - LinkedIn Job Tools',
    },
    {
      name: 'description',
      content: 'Blog covering finding a job, resumes, networking, and cover letters',
    },
  ];
};

export const loader = async () => {
  return json({ posts: await getPosts() });
};

export default function Blog() {
  const { posts } = useLoaderData<typeof loader>();
  return (
    <>
    <Navbar />
    <Container
      className={
        'flex w-full flex-col mt-4 items-center justify-center text-center'
      }
    >
      <h2 className='text-xl'>Resources To Help You Find Your Next Role</h2>

      {posts.map((post) => (
        <div className="flex flex-col justify-center" key={post.slug}>
          <Link
            to={post.slug}
            prefetch="render"
            style={{ textDecoration: 'none' }}
          >
          
              <div className="flex justify-center m-8" style={{ flex: 1 }}>
                <img
                  className="rounded-image"
                  src={post.image}
                  alt={post.imageAltText}
                  style={{ maxWidth: '250px' }}
                />
              </div>
              <div
                className=""
                style={{ flex: 2, alignItems: 'flex-start' }}
              >
                <h2 style={{ marginBottom: '1em' }}>{post.title}</h2>
                <h3 style={{ marginBottom: '1em' }}>{post.date}</h3>
                <h3>{post.summary}</h3>
              </div>
  
          </Link>
        </div>
      ))}
    </Container>
    <Cta />
    </>
  );
}
