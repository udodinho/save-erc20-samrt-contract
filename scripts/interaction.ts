import { ethers } from "hardhat";

async function main() {
    const web3CXITokenAddress = "0x88Bf80AAFFf16bED6f7DDD6a63F49D651a00479F";
    const web3CXI = await ethers.getContractAt("IERC20", web3CXITokenAddress);

    const saveERC20ContractAddress = "0x2BC9bE48Ae126766Ba265E07B45275F66859a005";
    const saveERC20 = await ethers.getContractAt("ISaveERC20", saveERC20ContractAddress);

    // Approve savings contract to spend token
    const approvalAmount = ethers.parseUnits("1000", 18);

    const approveTx = await web3CXI.approve(saveERC20, approvalAmount);
    approveTx.wait();

    const contractBalanceBeforeDeposit = await saveERC20.getContractBalance();
    console.log("Contract balance before :::", contractBalanceBeforeDeposit);

    const depositAmount = ethers.parseUnits("150", 18);
    const depositTx = await saveERC20.deposit(depositAmount);

    console.log("Deposit", depositTx);

    depositTx.wait();

    const contractBalanceAfterDeposit = await saveERC20.getContractBalance();

    console.log("Contract balance after deposit :::", contractBalanceAfterDeposit);



    // Withdrawal Interaction

    const withdrawAmount = ethers.parseUnits("10", 18);
    const withdrawalTx = await saveERC20.withdraw(withdrawAmount)

    console.log("Withdraw", withdrawalTx);

    withdrawalTx.wait();

    const contractBalanceAfterWithdraw = await saveERC20.getContractBalance();

    console.log("Contract balance after withdrawal :::", contractBalanceAfterWithdraw);
    
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
