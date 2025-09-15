import { getAllPosts } from "@/lib/posts";
import Link from "next/link";
import Image from "next/image";

export default async function BlogPage() {
    const posts = await getAllPosts();

    return (
        <div className="bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
                        Bienvenidos a carttus
                    </h2>
                    <p className="mt-2 text-lg/8 text-gray-300">
                        Todo sobre tecnología
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article
                            key={post.slug}
                            className="flex flex-col items-start justify-between"
                        >
                            <div className="relative w-full">
                                <Image
                                    alt=""
                                    width={480}
                                    height={270}
                                    src="/logo.png"
                                    className="aspect-video w-full rounded-2xl bg-gray-800 object-cover sm:aspect-2/1 lg:aspect-3/2"
                                />
                                <div className="absolute inset-0 rounded-2xl inset-ring inset-ring-white/10" />
                            </div>
                            <div className="flex max-w-xl grow flex-col justify-between">
                                <div className="mt-8 flex items-center gap-x-4 text-xs">
                                    <time
                                        dateTime={post.frontmatter.date}
                                        className="text-gray-400"
                                    >
                                        {post.frontmatter.date}
                                    </time>
                                    <span className="relative z-10 rounded-full bg-gray-800/60 px-3 py-1.5 font-medium text-gray-300">
                                        {post.frontmatter.category}
                                    </span>
                                </div>
                                <div className="group relative grow">
                                    <h3 className="mt-3 text-lg/6 font-semibold text-white group-hover:text-gray-300">
                                        <Link href={`/blog/${post.slug}`}>
                                            <span className="absolute inset-0" />
                                            {post.frontmatter.title}
                                        </Link>
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm/6 text-gray-400">
                                        {post.frontmatter.description}
                                    </p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
                                    <Image
                                        width={40}
                                        height={40}
                                        alt=""
                                        src={post.frontmatter.authorImage}
                                        className="size-10 rounded-full bg-gray-800"
                                    />
                                    <div className="text-sm/6">
                                        <p className="font-semibold text-white">
                                            {post.frontmatter.author}
                                        </p>
                                        <p className="text-gray-400">
                                            {post.frontmatter.authorRole}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
