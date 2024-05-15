package com.enes.sms.service.implementation;

import com.enes.sms.dto.TeacherDto;
import com.enes.sms.entity.Lesson;
import com.enes.sms.entity.Teacher;
import com.enes.sms.exception.ResourceNotFoundException;
import com.enes.sms.mapper.TeacherMapper;
import com.enes.sms.repository.LessonRepository;
import com.enes.sms.repository.TeacherRepository;
import com.enes.sms.service.TeacherService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class TeacherServiceImplementation implements TeacherService {

    private TeacherRepository teacherRepository;

    @Autowired
    private LessonRepository lessonRepository;

    @Override
    public TeacherDto createTeacher(TeacherDto teacherDto) {

        Teacher teacher = TeacherMapper.mapToTeacher(teacherDto);

        Lesson lesson = lessonRepository.findById(teacherDto.getLessonId())
                .orElseThrow(()-> new ResourceNotFoundException("Lesson was not found with id: "
                        + teacherDto.getLessonId()));
        teacher.setLesson(lesson);

        Teacher savedTeacher = teacherRepository.save(teacher);
        return TeacherMapper.mapToTeacherDto(savedTeacher);
    }

    @Override
    public TeacherDto getTeacherById(Long teacherId) {
        Teacher teacher = teacherRepository.findById(teacherId)
                .orElseThrow(() -> new ResourceNotFoundException("Teacher doesn't exist with the given id: " + teacherId));
        return TeacherMapper.mapToTeacherDto(teacher);
    }

    @Override
    public List<TeacherDto> getAllTeachers() {
        List<Teacher> teachers = teacherRepository.findAll();
        return teachers.stream().map((teacher) -> TeacherMapper.mapToTeacherDto(teacher))
                .collect(Collectors.toList());
    }

    @Override
    public TeacherDto updateTeacher(Long teacherId, TeacherDto updatedTeacher) {
        Teacher teacher = teacherRepository.findById(teacherId).orElseThrow(()->
                new ResourceNotFoundException("Teacher with the given id doesn't exist: " + teacherId));
        teacher.setFirstName(updatedTeacher.getFirstName());
        teacher.setLastName(updatedTeacher.getLastName());
        teacher.setEmail(updatedTeacher.getEmail());

        Lesson lesson = lessonRepository.findById(updatedTeacher.getLessonId())
                .orElseThrow(()-> new ResourceNotFoundException("Lesson was not found with id: "
                        + updatedTeacher.getLessonId()));
        teacher.setLesson(lesson);

        Teacher updatedTeacherObject = teacherRepository.save(teacher);

        return TeacherMapper.mapToTeacherDto(updatedTeacherObject);
    }

    @Override
    public void deleteTeacher(Long teacherId) {
        Teacher teacher = teacherRepository.findById(teacherId).orElseThrow(()->
                new ResourceNotFoundException("Teacher with the given id doesn't exist: " + teacherId));
        teacherRepository.deleteById(teacherId);
    }
}
