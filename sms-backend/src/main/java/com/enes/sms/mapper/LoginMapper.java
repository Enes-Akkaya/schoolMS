package com.enes.sms.mapper;

import com.enes.sms.dto.LoginDto;
import com.enes.sms.entity.Login;

public class LoginMapper {
    public static LoginDto mapToLoginDto(Login login) {
        return new LoginDto(
                login.getId(),
                login.getUsername(),
                login.getPassword()
        );
    }
    public static Login mapToLogin(LoginDto loginDto) {
        return new Login(
                loginDto.getId(),
                loginDto.getUsername(),
                loginDto.getPassword()
        );
    }
}
