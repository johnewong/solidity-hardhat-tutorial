const { run } = require("hardhat");

async function verify(contractAddr, args) {
    console.log("Verifying contract...");
    try {
        await run("verify:verify", {
            address: contractAddr,
            constructorArguments: args,
        });
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already Verified!");
        }
    }
}

module.exports = { verify };
