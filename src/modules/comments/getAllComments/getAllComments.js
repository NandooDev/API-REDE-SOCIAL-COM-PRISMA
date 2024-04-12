import { prisma } from "../../../prisma/client.js";

export class GetAllComments {
    async execute() {
        const comments = await prisma.comment.findMany({});

        return comments;
    }
}