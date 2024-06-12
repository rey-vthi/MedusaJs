import type { 
    MedusaRequest, 
    MedusaResponse,
  } from "@medusajs/medusa"
import { Offer } from "src/models/offer";
  
  export function GET(
    req: MedusaRequest,
    res: MedusaResponse
  ) {
    const id = req.params.offerId
    console.log("Request for offer id detailsL: " + id);
    
    const offerRepo = this.activeManager_.getRepository(Offer)
  
    res.json({
        offerDetails: offerRepo.findOneBy({id: id})
      })
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