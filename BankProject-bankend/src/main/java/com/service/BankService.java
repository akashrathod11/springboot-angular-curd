package com.service;

import java.util.List;

import com.model.Bank;

public interface BankService {

	public Bank addBank(Bank b);
	
	public List<Bank> getAll();
	
	public Bank getid(Long id);
	
	public void delete(Long id);
	
	public Bank updateDetails(Bank b,Long id);
	
	
	
	
}
