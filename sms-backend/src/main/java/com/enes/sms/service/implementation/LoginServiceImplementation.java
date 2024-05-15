package com.enes.sms.service.implementation;


import com.enes.sms.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.enes.sms.entity.Login;
import com.enes.sms.repository.LoginRepository;



@Service
public class LoginServiceImplementation implements LoginService {

    @Autowired
    private LoginRepository repo;

    @Override
    public Login login(String username, String password) {
        Login user = repo.findByUsernameAndPassword(username, password);
        return user;
    }


}