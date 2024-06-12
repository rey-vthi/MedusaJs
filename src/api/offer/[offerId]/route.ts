import type { 
    MedusaRequest, 
    MedusaResponse,
  } from "@medusajs/medusa"
import { off } from "process";
  import OfferService from "src/services/offer"
  
  export async function GET(
    req: MedusaRequest,
    res: MedusaResponse
  ) {
    const id = req.params.offerId
    console.log("Request for offer id detailsL: " + id);
    
    const offerService = req.scope.resolve<OfferService>("offerService");
    const offer = await offerService.getOfferFor(id);
  
    res.json(offer);
  }

  export function POST(
    req: MedusaRequest,
    res: MedusaResponse
  ) {
    const id = req.params.offerId
  
    res.json({
        message: "Hurray! you have successfully fetched offer details for offer id " + id,
      })
  }