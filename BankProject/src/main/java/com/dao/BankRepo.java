package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.model.Bank;

public interface BankRepo extends JpaRepository<Bank, Long> {

}
