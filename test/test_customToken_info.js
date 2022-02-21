const assert = require("assert");
const BigNumber = require("bignumber.js");
const test_customToken_info = artifacts.require("CustomToken");

const parseInt = (bignumber) => {
   const num = new BigNumber(bignumber);
   return num.toNumber();
};

contract("CustomToken", function (accounts) {
   before(async () => {
      this.instance = await test_customToken_info.deployed();
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

      it("decimals: 0", async () => {
         const decimals = await this.instance.decimals();
         assert.equal(decimals, 0, "Wrong Initialized Decimals");
      });

      it("Total Supply: 10*10", async () => {
         const totalSupply = await this.instance.totalSupply();
         assert.equal(totalSupply, 10 ** 10, "Wrong Initialized Total Supply");
      });
   });

   describe("checking balance of Custom Token", () => {
      it("Checking Balance", async () => {
         const totalSupply = await this.instance.totalSupply();
         const balance = await this.instance.balanceOf(accounts[0]);

         BigNumber(totalSupply).eq(balance);
      });
   });
});
