import { TransactionBaseService } from "@medusajs/medusa"
import { Offer } from "../models/offer"
import { OfferDetails} from "../types/offer"

class OfferService extends TransactionBaseService {

  getMessage() {
    return `Welcome to My Store!`
  }

  async allOffers(): Promise<Offer[]> {
    const offerRepo = this.activeManager_.getRepository(Offer)
    return await offerRepo.find();
  }

  async createOffer(offerDetails): Promise<String> {
    const offerRepo = this.activeManager_.getRepository(Offer)
    const offer = new Offer();
    offer.price = offerDetails.price;
    offer.title = offerDetails.title;
    offer.product = offerDetails.product;
    const newOffer = await offerRepo.save(offer);
    console.log("created new offer in offer table - " + JSON.stringify(newOffer));
    
    return newOffer.id;
  }

}

export default OfferService;