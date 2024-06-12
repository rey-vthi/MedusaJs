import { MedusaRequest, MedusaResponse, UserService } from "@medusajs/medusa";

export async function GET(
  req: MedusaRequest,
  res: MedusaResponse
): Promise<void> {

  const userService = req.scope.resolve<UserService>(
    "userService"
  )

  const user = await userService.retrieve(req.user.userId);
  const name = user.first_name;
  

  res.json({userName: name});
}
