const assert = require("assert");
const BigNumber = require("bignumber.js");
const test_customToken_info = artifacts.require("CustomToken");

contract("CustomToken", function (accounts) {
   before(async () => {
      this.instance = await test_customToken_info.deployed();
   });

   describe("checking transfer of Custom Token", () => {
      it("Transfer A to B", async () => {
         const A = accounts[0];
         const B = accounts[1];

         await this.instance.transfer(B, 100, { from: A });
         const balanceA = await this.instance.balanceOf(A);
         const balanceB = await this.instance.balanceOf(B);
         assert.equal(balanceB.toNumber(), 100);
      });

      it("TransferFrom A to B by C", async () => {
         const A = accounts[0];
         const B = accounts[2];
         const C = accounts[3];

         await this.instance.approve(C, 1000, { from: A });
         await this.instance.transferFrom(A, B, 500, { from: C });

         const allowance = await this.instance.allowance(A, C);

         const balanceA = await this.instance.balanceOf(A);
         const balanceB = await this.instance.balanceOf(B);

         assert.equal(1000, allowance.toNumber());
         assert.equal(500, balanceB.toNumber());
      });
   });
});
