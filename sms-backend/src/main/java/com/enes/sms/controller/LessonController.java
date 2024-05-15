package com.enes.sms.controller;

import lombok.AllArgsConstructor;
import com.enes.sms.dto.LessonDto;
import com.enes.sms.service.LessonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/lessons")
@AllArgsConstructor
public class LessonController {

    @Autowired
    private LessonService lessonService;
    @PostMapping
    public ResponseEntity<LessonDto> createLesson(@RequestBody LessonDto lessonDto) {
        LessonDto newLesson =  lessonService.createLesson(lessonDto);
        return new ResponseEntity<>(newLesson, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<LessonDto> getLessonById(@PathVariable("id") Long lessonId) {
        LessonDto lessonDto = lessonService.getLessonById(lessonId);
        return new ResponseEntity<>(lessonDto, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<LessonDto>> getAllLessons() {
        List<LessonDto> lessonDtoList = lessonService.getAllLessons();
        return new ResponseEntity<>(lessonDtoList, HttpStatus.OK);
    }

    @PutMapping("{id}")
    public ResponseEntity<LessonDto> updateLesson(@PathVariable("id") Long lessonId,
                                                          @RequestBody LessonDto lessonDto) {
        LessonDto updatedLesson = lessonService.updateLesson(lessonId, lessonDto);
        return new ResponseEntity<>(updatedLesson, HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteLesson(@PathVariable("id") Long lessonId) {
        lessonService.deleteLesson(lessonId);
        return new ResponseEntity<>("Delete Lesson Successfully", HttpStatus.OK);
    }
}

