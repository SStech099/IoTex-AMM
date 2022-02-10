async function main() {
    const weth = await ethers.getContractFactory("IoDexWETH");
  
    // Start deployment, returning a promise that resolves to a contract object
    const wethContract = await weth.deploy();
    console.log("Contract deployed to address:", wethContract.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });

    //0x64180b7A43090114B03130ce6DB74789D77c26C8