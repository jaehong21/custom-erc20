const assert = require("assert");
const test_customToken = artifacts.require("CustomToken");

contract("CustomToken", function (accounts) {
   before(async () => {
      this.instance = await test_customToken.deployed();
   });

   describe("Custom Token checking basic Information.sol", () => {
      it("Name: Custom Token", async () => {
         const name = await this.instance.name();
         assert.equal(name, "Custom Token", "Wrong Initialized Name");
      });

      it("Symbol: CUT", async () => {
         const symbol = await this.instance.symbol();
         assert.equal(symbol, "CUT", "Wrong Initialized Symbol");
      });

      it("decimals: 2", async () => {
         const decimals = await this.instance.decimals();
         assert.equal(decimals, 2, "Wrong Initialized Decimals");
      });

      it("Total Supply: 10*10  - 2 decimals", async () => {
         const totalSupply = await this.instance.totalSupply();
         const decimals = await this.instance.decimals();
         assert.equal(
            totalSupply / 10 ** decimals,
            10 ** 10 / 10 ** decimals,
            "Wrong Initialized Total Supply",
         );
      });
   });

   describe("checking balance of Custom Token", () => {
      it("Checking Balance", async () => {
         const balance = await this.instance.balanceOf(accounts[0]);
         assert.equal(0, balance, "Wrong Balance of Owner");
      });
   });
});
