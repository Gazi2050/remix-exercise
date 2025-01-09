import { json } from "@remix-run/server-runtime";
import { getPosts } from "~/services/posts";

export const postsLoader = async () => {
    const posts = await getPosts();
    return json({ posts });
};