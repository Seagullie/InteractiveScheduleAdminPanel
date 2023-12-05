import {
  ScheduleLessonForReadDto,
  TimeContextForWriteDto,
  FullContextForWriteDto,
  ScheduleLessonForWriteDto,
} from "schedule-server-api-client";

// transform read DTO to write DTO
// the schedule lesson DTOs for read and write are very similiar
export const ScheduleLessonForReadDtoToWriteDto = (
  lessonForRead: ScheduleLessonForReadDto
): ScheduleLessonForWriteDto => {
  // debugger;

  const timeContextForReadDto = lessonForRead.fullContext?.timeContext;
  const studentsGroupId = lessonForRead.fullContext?.studentsGroup?.id;
  const lessonId = lessonForRead.lesson?.id;

  const timeContext: TimeContextForWriteDto = {
    ...timeContextForReadDto,
  };

  const fullContext: FullContextForWriteDto = {
    studentsGroupId,
    timeContext,
  };

  const scheduleLessonForWriteDto: ScheduleLessonForWriteDto = {
    lessonId,
    fullContext,
  };

  return scheduleLessonForWriteDto;
};

export const ScheduleLessonFormToWriteDto = (lessonForm: {
  lessonId: number;
  fullContext: {
    studentsGroup: {
      id: number;
    };
    timeContext: TimeContextForWriteDto;
  };
}): ScheduleLessonForWriteDto => {
  const { lessonId, fullContext } = lessonForm;

  const fullContextForWrite: FullContextForWriteDto = {
    studentsGroupId: fullContext.studentsGroup.id,
    timeContext: fullContext.timeContext,
  };

  const scheduleLessonForWriteDto: ScheduleLessonForWriteDto = {
    lessonId,
    fullContext: fullContextForWrite,
  };

  return scheduleLessonForWriteDto;
};
