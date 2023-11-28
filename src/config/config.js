require("dotenv").config();
const convict = require("convict"); 
convict.addFormat(require("convict-format-with-validator").ipaddress); 
// Define a schema
var config = convict({
  env: {
    doc: "The application environment.",
    format: ["production", "development", "test"],
    default: "development",
    env: "NODE_ENV",
  },
  tokenExpire: {
    isRememberMode: {
      doc: "token expire day when remember",
      format: Number,
      default: 14,
    },
    defaultMode: {
      doc: "token expire day",
      format: Number,
      default: 1,
    },
  },
  domain: {
    doc: "domain",
    format: String,
    default: process.env.REG_DOMAIN,
  },
  port: {
    doc: "The port to bind.",
    format: "port",
    default: 3005,
    env: "PORT",
    arg: "port",
  },
  mongodb: {
    host: {
      doc: "Database host name/IP",
      format: "*",
      default: process.env.DB_URI,
      // env: 'DB_URI',
    },
    name: {
      doc: "Database name",
      format: String,
      default: process.env.DB_NAME,
      // env: 'DB_NAME',
    }, 
  },
  auth: {
    passwordSecret: {
      doc: "password secret",
      format: String,
      default:  process.env.PASSWORD_SECRET,
    },  
    expireTokenJwt: {
      doc: "expire refresh token",
      format: String,
      default: process.env.TOKEN_EXP_JWT,
    }, 
  }, 
 
});

// Load environment dependent configuration
var env = config.get("env");

config.loadFile("./src/config/" + env + ".json");

// Perform validation
config.validate({ allowed: "strict" });

module.exports = config;
