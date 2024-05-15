package com.enes.sms.mapper;

import com.enes.sms.dto.TeacherDto;
import com.enes.sms.entity.Teacher;

public class TeacherMapper {
    public static TeacherDto mapToTeacherDto(Teacher teacher) {
        return new TeacherDto(
                teacher.getId(),
                teacher.getFirstName(),
                teacher.getLastName(),
                teacher.getEmail(),
                teacher.getLesson().getId()
        );
    }
    public static Teacher mapToTeacher(TeacherDto teacherDto) {
        Teacher teacher = new Teacher();
        teacher.setId(teacherDto.getId());
        teacher.setFirstName(teacherDto.getFirstName());
        teacher.setLastName(teacherDto.getLastName());
        teacher.setEmail(teacherDto.getEmail());
        return teacher;
    }
}
