import type { 
    MedusaRequest, 
    MedusaResponse,
    UserService
  } from "@medusajs/medusa"
  
  export const GET = (
    req: MedusaRequest,
    res: MedusaResponse
  ) => {

    res.json({
      categories: ["Festive offers", "Regular partner offer", "New partner offer"],
    })
  }
  
  export const POST = (
    req: MedusaRequest, 
    res: MedusaResponse
  ) => {
    res.json({
      message: "[POST] Hello world! custom api",
    })
  }