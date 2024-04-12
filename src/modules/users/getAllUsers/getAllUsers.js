import { prisma } from "../../../prisma/client.js";

export class GetAllUsers {
    async execute() {
        const users = await prisma.user.findMany({
            include: {
                posts: {
                    select: {
                        title: true,
                        body: true
                    }
                },
                comments: {
                    select: {
                        content: true
                    }
                }
            }
        });

        return users;
    }
}