import { CreateUserController } from '../../modules/users/createUser/createUserController.js';
import { CreateUser } from '../../modules/users/createUser/createUser.js';
import { AppError } from '../../errors/appError.js';

const createUser = new CreateUser();
const createUserController = new CreateUserController();

jest.mock('../../modules/users/createUser/createUser.js');

describe("Create Users Controller", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    })

    it("Should create users sucessfully", async () => {
        const req = {
            body: {
                name: "Michellini",
                username: "miichelini10",
                email: "michellini10top@email.com",
                password: "michellini1"
            }
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        }

        await createUserController.handle(req, res);

        expect(res.status).toHaveBeenCalledWith(201);
    });
});