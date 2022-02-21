const assert = require("assert");
const test_customToken_owner = artifacts.require("CustomToken");

contract("Ownable", function (accounts) {
   before(async () => {
      this.instance = await test_customToken_owner.deployed();
   });

   describe("Custom Token checking ownership", () => {
      it("Check contract admin's address", async () => {
         const admin = await this.instance.admin();
         assert.equal(admin, accounts[0]);
      });

      it("Transfer Admin", async () => {
         let admin = await this.instance.admin();
         const newAdmin = accounts[1];
         await this.instance.transferAdmin(newAdmin, { from: admin });

         admin = await this.instance.admin();
         assert.equal(admin, newAdmin);
      });
   });
});
