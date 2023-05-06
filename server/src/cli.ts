import { DatabaseManager } from "./db/DatabaseManager";
import { Logger } from "./common/Logger";

new DatabaseManager(new Logger()).sync();
