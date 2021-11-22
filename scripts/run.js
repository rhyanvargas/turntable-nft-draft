require('dotenv').config();


const main = async () => {
  // Compile Contract.
  const nftContractFactory = await hre.ethers.getContractFactory('MyEpicNFT');
  // Spin up local blockckchain
  const nftContract = await nftContractFactory.deploy();
  // Contract mined and deployed on mock blockchain
  await nftContract.deployed();

  console.log("Contract Deployed: ", nftContract.address);
};


const runMain = async () => {
  try {
    await main();
    process.exit(0)
  } catch(error) {
    console.log(error);
    process.exit(1);
  }
}


runMain();