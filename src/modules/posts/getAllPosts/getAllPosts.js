import { prisma } from "../../../prisma/client.js";

export class GetAllPosts {
    async execute() {
        const posts = await prisma.post.findMany({});

        return posts;
    }
}