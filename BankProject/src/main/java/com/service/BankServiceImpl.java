package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.dao.BankRepo;
import com.model.Bank;

@Service
public class BankServiceImpl implements BankService {

	@Autowired
	private BankRepo bankRepo;

	@Override
	public Bank addBank(Bank b) {
		Bank bank = bankRepo.save(b);
		return bank;
	}

	@Override
	public List<Bank> getAll() {

		return bankRepo.findAll();
	}

	@Override
	public Bank getid(Long id) {
		Optional<Bank> bank = bankRepo.findById(id);
		if (bank.isEmpty()) {
			throw new RuntimeException("this id not avialable");
		}
		Bank bank2 = bank.get();
		return bank2;
	}

	@Override
	public Bank updateDetails(Bank b, Long id) {

		Bank bank = bankRepo.findById(id).orElse(null);
//       bank.setBankId(b.getBankId());
		bank.setBankName(b.getBankName());
		bank.setAddress(b.getAddress());
		bankRepo.save(bank);

		return bank;
	}

	@Override
	public void delete(Long id) {
		bankRepo.deleteById(id);
	}

}
