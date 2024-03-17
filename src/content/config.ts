import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
    schema: z.object({
        author: z.string(),
        date: z.string(),
        image: z.string(),
        title: z.string()
    })
});

export const collections = {
    // The "posts" key should match the directory's name that
    // contains the contents in the collection.
    posts: postsCollection
}
