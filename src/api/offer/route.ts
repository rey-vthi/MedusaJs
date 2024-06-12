import type { 
    MedusaRequest, 
    MedusaResponse
  } from "@medusajs/medusa"
import OfferService from "src/services/offer"

export const GET = async(
    req: MedusaRequest,
    res: MedusaResponse
  ) => {
    const offerService = req.scope.resolve<OfferService>("offerService");
    const allOffers = await offerService.allOffers();

    res.json({
      offers: allOffers,
    })
  }

  export const POST = async(
    req: MedusaRequest,
    res: MedusaResponse
  ) => {
    const offerDetails = req.body;
    console.log(JSON.stringify(req.body));

    const offerService = req.scope.resolve<OfferService>("offerService");
    const offerId = await offerService.createOffer(offerDetails);

    res.json({
      message: `Offer ${offerId} created successfully`
    })
  }