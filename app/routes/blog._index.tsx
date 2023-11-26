import { Link, useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/post.server";
import { json } from "@remix-run/node";

export const meta = () => {
  return [
    {
      title: "Blog - Software Development",
    },
    {
      name: "description",
      content: "Blog covering AWS, Typescript, Node.js, React, and Serverless",
    },
  ];
};

export const loader = async () => {
  return json({ posts: await getPosts() });
};

export default function Blog() {
  const { posts } = useLoaderData<typeof loader>();
  return (
    <div className="wrapper sized-wrapper" style={{ margin: "auto" }}>
      <div className="heading-with-sub">
        <h1>BLOG</h1>
        <h2>Stuff I'll forget if I don't write it down</h2>
      </div>
      {posts.map((post) => (
        <div className="heading-with-sub" key={post.slug}>
          <Link
            to={post.slug}
            prefetch="render"
            style={{ textDecoration: "none" }}
          >
            <div className="stackable elevated-card" style={{ padding: "2em" }}>
              <div className="stackable-item" style={{ flex: 1 }}>
                <img
                  className="rounded-image"
                  src={post.image}
                  alt={post.imageAltText}
                  style={{ maxWidth: "250px" }}
                />
              </div>
              <div
                className="stackable-item"
                style={{ flex: 2, alignItems: "flex-start" }}
              >
                <h2 style={{ marginBottom: "1em" }}>{post.title}</h2>
                <h3 style={{ marginBottom: "1em" }}>{post.date}</h3>
                <h3>{post.summary}</h3>
              </div>
            </div>
          </Link>
        </div>
      ))}
      <div></div>
    </div>
  );
}
