package com.enes.sms.service.implementation;


import lombok.AllArgsConstructor;
import com.enes.sms.dto.LessonDto;
import com.enes.sms.entity.Lesson;
import com.enes.sms.exception.ResourceNotFoundException;
import com.enes.sms.mapper.LessonMapper;
import com.enes.sms.repository.LessonRepository;
import com.enes.sms.service.LessonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class LessonServiceImplementation implements LessonService {

    @Autowired
    private LessonRepository lessonRepository;
    @Override
    public LessonDto createLesson(LessonDto lessonDto) {
        Lesson lesson = LessonMapper.mapToLesson(lessonDto);
        Lesson savedLesson = lessonRepository.save(lesson);
        return LessonMapper.mapToLessonDto(savedLesson);
    }

    @Override
    public LessonDto getLessonById(Long lessonId) {
        Lesson lesson = lessonRepository.findById(lessonId)
                .orElseThrow(()-> new ResourceNotFoundException("Lesson was not found with id: " + lessonId));
        return LessonMapper.mapToLessonDto(lesson);
    }

    @Override
    public List<LessonDto> getAllLessons() {
        return lessonRepository.findAll()
                .stream().map(LessonMapper::mapToLessonDto)
                .collect(Collectors.toList());
    }

    @Override
    public LessonDto updateLesson(Long lessonId, LessonDto lessonDto) {
        Lesson lesson = lessonRepository.findById(lessonId)
                .orElseThrow(()-> new ResourceNotFoundException("Lesson was not found with id: " + lessonId));
        lesson.setLessonName(lessonDto.getLessonName());
        lesson.setLessonDescription(lessonDto.getLessonDescription());
        Lesson updatedLesson = lessonRepository.save(lesson);
        return LessonMapper.mapToLessonDto(updatedLesson);
    }

    @Override
    public void deleteLesson(Long lessonId) {
        Lesson lesson = lessonRepository.findById(lessonId)
                .orElseThrow(()-> new ResourceNotFoundException("Lesson was not found with id: " + lessonId));
        lessonRepository.deleteById(lessonId);
    }
}

