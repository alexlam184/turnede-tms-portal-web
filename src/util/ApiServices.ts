import { useQuery } from '@tanstack/react-query';
import courses from '../mock/COURSE_DATA.json'; // DELETE: mock data
import schedule from '../mock/SCHEDULE_DATA.json';
import tutor from '../mock/TUTOR_DATA.json';
import { CourseType, ScheduleType, TutorType } from './types';

export const useCourseQuery = () =>
  useQuery<CourseType[], Error>({
    queryKey: ['course'],
    queryFn: () => {
      return courses;
    },
  });

export const useScheduleQuery = () =>
  useQuery<ScheduleType[], Error>({
    queryKey: ['schedule'],
    queryFn: () => {
      return schedule;
    },
  });

export const useTutorQuery = () =>
  useQuery<TutorType[], Error>({
    queryKey: ['tutor'],
    queryFn: () => {
      return tutor;
    },
  });
