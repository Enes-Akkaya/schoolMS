package com.enes.sms.mapper;

import com.enes.sms.dto.LessonDto;
import com.enes.sms.entity.Lesson;

public class LessonMapper {
    public static LessonDto mapToLessonDto(Lesson lesson) {
        return new LessonDto(
                lesson.getId(),
                lesson.getLessonName(),
                lesson.getLessonDescription()
        );
    }

    public static Lesson mapToLesson(LessonDto lessonDto) {
        return new Lesson(
                lessonDto.getId(),
                lessonDto.getLessonName(),
                lessonDto.getLessonDescription()
        );
    }
}

