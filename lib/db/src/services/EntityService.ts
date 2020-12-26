import { injectable } from "tsyringe";
import { MyEntity as Entity } from "../entities/Entity";

@injectable()
export class EntityService {
  async add(entity: Entity) {
    return Entity.save(entity);
  }
}
