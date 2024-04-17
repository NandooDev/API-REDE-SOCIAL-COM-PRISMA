import { prisma } from "../../../prisma/client.js";

export class GetAllPosts {
    async execute() {
        const posts = await prisma.post.findMany({
            include: {
                comments: {
                    select: {
                        content: true,
                        authorId: true
                    }
                }
            }
        });

        return posts;
    }
}