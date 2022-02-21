const Migrations = artifacts.require("Migrations");
const CustomToken = artifacts.require("CustomToken");
const Ownable = artifacts.require("Ownable");

module.exports = function (deployer) {
   deployer.deploy(CustomToken, "Custom Token", "CUT");
};
