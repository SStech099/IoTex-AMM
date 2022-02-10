async function main() {
    const Router = await ethers.getContractFactory("IoDexRouter02");
  
    // Start deployment, returning a promise that resolves to a contract object
    const RouterContract = await Router.deploy("0x598DBBC8dD99D371937EbAD167Fe1f75F5F88eB2", "0x64180b7A43090114B03130ce6DB74789D77c26C8");
    console.log("Contract deployed to address:", RouterContract.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  //0x3Ee0B8F85D42E352B0eDD5Bc0Cf3d4B23a5A1EBe
  
  