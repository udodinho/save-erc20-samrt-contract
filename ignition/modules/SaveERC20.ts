import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const tokenAddress = "0x88Bf80AAFFf16bED6f7DDD6a63F49D651a00479F";

const SaveERC20Module = buildModule("SaveERC20Module", (m) => {

    const save = m.contract("SaveERC20", [tokenAddress]);

    return { save };
});

export default SaveERC20Module;

// Deployed SaveERC20: 0xD410219f5C87247d3F109695275A70Da7805f1b1
// mine:               0x2BC9bE48Ae126766Ba265E07B45275F66859a005
