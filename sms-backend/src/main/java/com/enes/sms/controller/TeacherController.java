package com.enes.sms.controller;
import lombok.AllArgsConstructor;
import com.enes.sms.dto.TeacherDto;
import com.enes.sms.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/teachers")
@AllArgsConstructor
public class TeacherController {
    @Autowired
    private TeacherService teacherService;
    @PostMapping
    public ResponseEntity<TeacherDto> createTeacher(@RequestBody TeacherDto teacherDto) {
        TeacherDto savedTeacher =  teacherService.createTeacher(teacherDto);
        return new ResponseEntity<>(savedTeacher, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<TeacherDto> getTeacherById(@PathVariable("id") Long teacherId) {
        TeacherDto teacherDto = teacherService.getTeacherById(teacherId);
        return new ResponseEntity<>(teacherDto, HttpStatus.OK);
    }
    @GetMapping
    public ResponseEntity<List<TeacherDto>> getAllTeachers() {
        List<TeacherDto> teacherDtoList =  teacherService.getAllTeachers();
        return new ResponseEntity<>(teacherDtoList, HttpStatus.OK);
    }

    @PutMapping("{id}")
    public ResponseEntity<TeacherDto> updateTeacher(@PathVariable("id") Long teacherId,
                                                    @RequestBody TeacherDto teacherDto) {
        TeacherDto newTeacherDto =  teacherService.updateTeacher(teacherId, teacherDto);
        return new ResponseEntity<>(newTeacherDto, HttpStatus.OK);
    }
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteTeacher(@PathVariable("id") Long teacherId) {
        teacherService.deleteTeacher(teacherId);
        return new ResponseEntity<>("Teacher was successfully deleted", HttpStatus.OK);
    }
}
