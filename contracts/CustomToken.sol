pragma solidity ^0.8.0;

import "./Ownable.sol";

contract CustomToken is Ownable {
   string private _name;
   string private _symbol;

   constructor(string memory name_, string memory symbol_) {
      _name = name_;
      _symbol = symbol_;

      address _admin = admin();
      _balance[_admin] = totalSupply();
   }

   function name() public view returns (string memory) {
      return _name;
   }

   function symbol() public view returns (string memory) {
      return _symbol;
   }

   uint8 private _decimals = 0;
   uint256 private _totalSupply = 10**10;

   function decimals() public view returns (uint8) {
      return _decimals;
   }

   function totalSupply() public view returns (uint256) {
      return _totalSupply;
   }

   mapping(address => uint256) private _balance;
   mapping(address => mapping(address => uint256)) private _allowance;

   function balanceOf(address _owner) public view returns (uint256 balance) {
      return _balance[_owner];
   }

   function transfer(address _to, uint256 _amount) public returns (bool success) {
      require(_balance[msg.sender] >= _amount);
      _balance[msg.sender] -= _amount;
      _balance[_to] += _amount;
      emit Transfer(msg.sender, _to, _amount);
      return true;
   }

   function transferFrom(
      address _from,
      address _to,
      uint256 _value
   ) public returns (bool success) {
      require(_allowance[_from][msg.sender] >= _value);
      _balance[_from] -= _value;
      _balance[_to] += _value;
      emit Transfer(_from, _to, _value);
      return true;
   }

   function approve(address _spender, uint256 _value) public returns (bool success) {
      _allowance[msg.sender][_spender] = _value;
      emit Approval(msg.sender, _spender, _value);
      return true;
   }

   function allowance(address _owner, address _spender) public view returns (uint256 remaining) {
      return _allowance[_owner][_spender];
   }

   event Transfer(address indexed _from, address indexed _to, uint256 _value);
   event Approval(address indexed _owner, address indexed _spender, uint256 _value);
}
