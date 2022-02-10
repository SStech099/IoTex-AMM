const { expect } = require("chai");

describe("Staking contract", function() {
    it("Should be deployed successfully", async function() {
        const stake = await ethers.getContractFactory("StakingRewards");
        const stake1 = await stake.deploy();
    })
});