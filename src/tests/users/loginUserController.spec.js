import { LoginUserController } from "../../modules/users/loginUser/loginUserController"

describe("Login User Controller", () => {
    it("Should login user sucessfully", async () => {
        const loginUserController = new LoginUserController();

        const req = {
            body: {
                email: "familiaforte0876@gmail.com",
                password: "200613" 
            }
        }

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        }

        await loginUserController.handle(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
    })
})