import { prisma } from "../../../prisma/client.js";

export class GetAllUsers {
    async execute() {
        const users = await prisma.user.findMany({});

        return users;
    }
}