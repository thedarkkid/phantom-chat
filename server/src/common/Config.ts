import { GenericObject } from "./typing";
import * as process from "process";

const _config: GenericObject = {
  JWT_SECRET: process.env.JWT_SECRET ?? "phantom-jwt-scete120",
};

const Config = (configKey: string): any | null => {
  return _config.hasOwnProperty(configKey) ? _config[configKey] : null;
};

export default Config;
