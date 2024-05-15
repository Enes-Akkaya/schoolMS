package com.enes.sms.service;


import com.enes.sms.dto.LessonDto;
import java.util.List;

public interface LessonService {
    LessonDto createLesson(LessonDto lessonDto);
    LessonDto getLessonById(Long lessonId);
    List<LessonDto> getAllLessons();
    LessonDto updateLesson(Long lessonId, LessonDto lessonDto);
    void deleteLesson(Long lessonId);
}

