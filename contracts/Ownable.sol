pragma solidity ^0.8.0;

contract Ownable {
   address private _admin;

   constructor() {
      _admin = msg.sender;
   }

   modifier onlyAdmin() {
      require(_admin == msg.sender);
      _;
   }

   modifier onlyOwner(address owner) {
      require(msg.sender == owner);
      _;
   }

   function admin() public view returns (address) {
      return _admin;
   }

   function transferAdmin(address _newAdmin) public onlyAdmin returns (bool success){
      address oldAdmin = _admin;
      _admin = _newAdmin;
      emit TransferAdmin(oldAdmin, _newAdmin);
      return true;
   }

   event TransferAdmin(address _oldAdmin, address _newAdmin);
}
