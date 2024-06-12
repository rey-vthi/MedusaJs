import { 
    BeforeInsert, 
    Column, 
    Entity, 
    PrimaryColumn,
  } from "typeorm"
  import { BaseEntity } from "@medusajs/medusa"
  import { generateEntityId } from "@medusajs/medusa/dist/utils"
  
  @Entity()
  export class Offer extends BaseEntity {
    @Column({ type: "varchar" })
    title: string | null;

    @Column({ type: "varchar" })
    price: string | null;

    @Column({ type: "varchar" })
    product: string | null;
  
    @BeforeInsert()
    private beforeInsert(): void {
      this.id = generateEntityId(this.id, "offer")
    }
  }