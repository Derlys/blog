export interface Frontmatter {
    title: string
    image: string
    date: string
    description: string
    category: string
    author: string
    authorRole: string
    authorImage: string
    imageUrl: string
}

export interface Post {
    slug: string
    frontmatter: Frontmatter
    content: string
}
