package com.enes.sms.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class LessonDto {
    private Long id;

    private String lessonName;

    private String lessonDescription;
}

