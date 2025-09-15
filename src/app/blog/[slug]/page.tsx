import ReactMarkdown from "react-markdown";
import {getPostBySlug} from "@/lib/posts";
import { InformationCircleIcon} from "@heroicons/react/16/solid";
import Image from "next/image";

export default async function PostPage({ params }: { params: { slug: string } }) {
    const post =   getPostBySlug(params.slug);

    return (
        <div className="bg-gray-900 px-6 py-32 lg:px-8">
            <div className="mx-auto max-w-3xl text-base/7 text-gray-300">
                <p className="text-base/7 font-semibold text-indigo-400">
                    {post.frontmatter.category ?? "Blog"}
                </p>
                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                    {post.frontmatter.title}
                </h1>
                <div className="mt-6 prose prose-invert prose-lg max-w-none">
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>
                {post.frontmatter.image && (
                    <figure className="mt-16">
                        <Image
                            alt={post.frontmatter.title}
                            src={post.frontmatter.image}
                            className="aspect-video rounded-xl bg-gray-800 object-cover"
                        />
                        <figcaption className="mt-4 flex gap-x-2 text-sm/6 text-gray-400">
                            <InformationCircleIcon className="mt-0.5 size-5 flex-none text-gray-600" />
                            Imagen destacada del post.
                        </figcaption>
                    </figure>
                )}
            </div>
        </div>
    );
}
