package com.enes.sms.service;

import com.enes.sms.entity.Login;

public interface LoginService{
    Login login(String username, String password);
}
