import type { LoaderFunction , LinksFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { marked } from 'marked';
import { getPost } from '~/models/post.server';
import styles from '~css/blog.css';

// export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const loader: LoaderFunction = async ({ params }) => {
    if (params.slug) {
        const post = await getPost(params.slug);
        const html = marked(post.markdown);
        return json({ post, html });
    }
};

export const meta = ({ data }) => {
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
        <div
            className="wrapper sized-wrapper"
            style={{ gap: '1em', margin: 'auto' }}>
            <h1 style={{ marginBottom: '.5em' }}>{post.title}</h1>
            <h3 style={{ marginBottom: '.5em' }}>{post.date}</h3>
            <img
                src={post.image}
                alt={post.imageAltText}
                style={{ maxWidth: '300px' }}
            />
            <div
                dangerouslySetInnerHTML={{ __html: html }}
                style={{ maxWidth: 'inherit' }}
            />
            <div></div>
        </div>
    );
}
