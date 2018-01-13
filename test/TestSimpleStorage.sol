pragma solidity ^0.4.2;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Purchase.sol";

contract TestSimpleStorage {
	Purchase purchase = Purchase(DeployedAddresses.Purchase());

	function testPurchaseID() public {
		uint expected = 5;
		uint recieved = purchase.buyShoe(5);

		Assert.equal(expected, recieved, "The index put in should equal the index returned.");
	}

	function testCorrectPurchaser () public {
		address expected = this;
		address recieved = purchase.purchasers(5);

		Assert.equal(expected, recieved, "The purchaser should be the same as the purchaser in index 5");
	}

	function testAllPurchasers () public {
		address[10] memory recieved = purchase.getPurchasers();
		address expected = this;

		Assert.equal(expected, recieved[5], "The purchaser at index 5 should equal this.");
	}
	
	
}
