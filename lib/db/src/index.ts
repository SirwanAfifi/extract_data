import "reflect-metadata";
import { createConnection } from "typeorm";
import * as data from "../data.json";
import { container } from "./configuration";
import { MyEntity } from "./entities/Entity";
import { EntityService } from "./services/EntityService";

const bootstrap = async () => {
  try {
    await createConnection();
    const entityService = container.resolve(EntityService);

    for (let item of data) {
      await entityService.add(item as MyEntity);
    }
  } catch (error) {
    console.log(`Error`);
  }
};
bootstrap();
