const Migrations = artifacts.require("Migrations");
// const HelloWorld = artifacts.require("HelloWorld");
const CustomToken = artifacts.require("CustomToken");

module.exports = function (deployer) {
   // deployer.deploy(HelloWorld, "Hi, truffle");
   deployer.deploy(CustomToken, "Custom Token", "CUT");
   deployer.deploy(Migrations);
};
