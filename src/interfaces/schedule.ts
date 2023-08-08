export interface ScheduleModel {
  id: number;
  days: Days[];
  month: string;
  year: number;
}

export interface Days {
  day: number;
  schedules: Schedule[];
}

export interface Schedule {
  hour: string;
}
