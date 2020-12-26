import { container } from "tsyringe";
import { Repository } from "typeorm";
import { EntityService } from "./services/EntityService";

container.register("EntityService", {
  useClass: EntityService,
});

export { container };
