const getPostFrontmatter = post => post.frontmatter

export const getPostTitle = post => getPostFrontmatter(post).title
export const getPostPath = post => getPostFrontmatter(post).path
