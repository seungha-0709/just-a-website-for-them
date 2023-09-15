import { JEONG_BLOG_URL, KONG_BLOG_URL } from "@/data/contants";

export const getBlogUrl = (post) => {
  const url = post.url.split("/").slice(-2)[0];
  if (post.authors[0].slug === "jiyeon") {
    return `${KONG_BLOG_URL}/${url}`;
  }
  return `${JEONG_BLOG_URL}/${url}`;
};
