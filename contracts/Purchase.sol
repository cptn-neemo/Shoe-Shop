pragma solidity ^0.4.17;

/**
 * The Shoe contract does this and that...
 */
contract Purchase {
	address[10] public purchasers;

	function buyShoe(uint shoeID) public returns (uint) {
		require(shoeID >= 0 && shoeID <= 9);
		purchasers[shoeID] = msg.sender;
		return shoeID;
	}

	function getPurchasers () public view returns(address[10]) {
		return purchasers;
	}
	
}

