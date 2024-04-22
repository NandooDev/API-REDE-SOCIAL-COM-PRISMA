import { GetAllUsersController } from '../../modules/users/getAllUsers/getAllUsersController.js';

describe("Get All Users Controller", () => {
    it("Should return all users sucessfully", async () => {
        const getAllUsersController = new GetAllUsersController();

        const req = {
            body: {}
        }

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        }

        await getAllUsersController.handle(req, res);

        expect(res.status).toHaveBeenCalledWith(201);
    })
});