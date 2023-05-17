import { SyncOptions } from "sequelize";
import { MODELS } from "./index";
import { Logger } from "../common/Logger";

export class DatabaseManager {
  constructor(private logger: Logger) {}

  async sync(config: SyncOptions = { alter: true }, name?: string) {
    for (const _model of MODELS) {
      if (name && _model.name !== name) continue;

      this.logger.log("syncing", _model, "..");

      if (config?.force) {
        this.logger.log("clearing", _model, "..");
        await _model.sequelize.query("SET FOREIGN_KEY_CHECKS = 0", {
          raw: true,
        });
      }

      await _model.sync(config);
      this.logger.log(_model, "Model synced.");

      if (name && _model.name === name) return;
    }
  }
}
