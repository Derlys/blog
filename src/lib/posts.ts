import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "@/types/post";

const postsDirectory = path.join(process.cwd(), "posts");

export function getPostSlugs(): string[] {
    return fs.readdirSync(postsDirectory);
}

export async function getPostBySlug(slug: string): Promise<Post> {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, `${realSlug}.md`);
    const fileContents = await fs.promises.readFile(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
        slug: realSlug,
        frontmatter: data as Post["frontmatter"],
        content,
    };
}

export async function getAllPosts(): Promise<Post[]> {
    const slugs = getPostSlugs();
    const posts = await Promise.all(slugs.map((slug) => getPostBySlug(slug)));

    return posts.sort(
        (a, b) =>
            new Date(b.frontmatter.date).getTime() -
            new Date(a.frontmatter.date).getTime()
    );
}
