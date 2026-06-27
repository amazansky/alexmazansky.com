"use client";

import { useState } from "react";
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type TimeSeriesPoint = {
  date: string;
  p25: number;
  p50: number;
  p75: number;
  mine: number;
};

type Weekday =
  | "Sunday"
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday";

const energyTimeSeriesData: TimeSeriesPoint[] = [
  { date: "2020-09-12", p25: 53.3, p50: 63.2, p75: 72.2, mine: 49.3 },
  { date: "2020-09-13", p25: 53.3, p50: 63.2, p75: 72.2, mine: 46.0 },
  { date: "2020-09-14", p25: 52.7, p50: 62.4, p75: 72.1, mine: 62.5 },
  { date: "2020-09-15", p25: 52.7, p50: 62.0, p75: 72.1, mine: 72.8 },
  { date: "2020-09-16", p25: 52.1, p50: 61.5, p75: 72.1, mine: 87.2 },
  { date: "2020-09-17", p25: 52.1, p50: 61.5, p75: 72.1, mine: 83.7 },
  { date: "2020-09-19", p25: 52.1, p50: 61.5, p75: 72.1, mine: 27.7 },
  { date: "2020-09-20", p25: 53.3, p50: 61.5, p75: 69.5, mine: 81.4 },
  { date: "2020-09-21", p25: 52.1, p50: 60.8, p75: 69.5, mine: 44.7 },
  { date: "2020-09-22", p25: 51.8, p50: 59.4, p75: 69.5, mine: 40.7 },
  { date: "2020-09-23", p25: 52.1, p50: 61.5, p75: 70.8, mine: 90.4 },
  { date: "2020-09-24", p25: 52.1, p50: 61.5, p75: 70.8, mine: 59.8 },
  { date: "2020-09-25", p25: 52.1, p50: 61.5, p75: 70.8, mine: 41.9 },
  { date: "2020-09-26", p25: 52.1, p50: 60.8, p75: 69.5, mine: 24.5 },
  { date: "2020-09-27", p25: 54.4, p50: 63.5, p75: 72.5, mine: 55.8 },
  { date: "2020-09-28", p25: 55.2, p50: 63.5, p75: 72.2, mine: 49.5 },
  { date: "2020-09-30", p25: 52.7, p50: 61.8, p75: 72.1, mine: 3.1 },
  { date: "2020-10-01", p25: 53.4, p50: 62.2, p75: 72.2, mine: 86.2 },
  { date: "2020-10-02", p25: 53.3, p50: 62.2, p75: 72.2, mine: 81.0 },
  { date: "2020-10-04", p25: 53.3, p50: 62.9, p75: 72.2, mine: 73.3 },
  { date: "2020-10-05", p25: 53.3, p50: 63.2, p75: 72.5, mine: 64.5 },
  { date: "2020-10-06", p25: 55.2, p50: 63.9, p75: 70.8, mine: 55.7 },
  { date: "2020-10-07", p25: 55.2, p50: 66.0, p75: 71.2, mine: 56.1 },
  { date: "2020-10-08", p25: 56.5, p50: 66.5, p75: 71.2, mine: 28.2 },
  { date: "2020-10-09", p25: 55.9, p50: 66.0, p75: 71.2, mine: 48.8 },
  { date: "2020-10-10", p25: 55.3, p50: 63.8, p75: 71.1, mine: 49.5 },
  { date: "2020-10-11", p25: 55.9, p50: 66.5, p75: 72.5, mine: 79.5 },
  { date: "2020-10-12", p25: 55.3, p50: 63.8, p75: 71.1, mine: 25.7 },
  { date: "2020-10-13", p25: 55.2, p50: 63.8, p75: 72.2, mine: 96.7 },
  { date: "2020-10-14", p25: 54.4, p50: 63.2, p75: 72.1, mine: 30.1 },
  { date: "2020-10-15", p25: 53.3, p50: 62.6, p75: 70.0, mine: 17.8 },
  { date: "2020-10-16", p25: 53.3, p50: 62.2, p75: 69.4, mine: 68.3 },
  { date: "2020-10-17", p25: 53.3, p50: 61.8, p75: 69.4, mine: 88.6 },
  { date: "2020-10-18", p25: 53.3, p50: 61.8, p75: 69.4, mine: 77.7 },
  { date: "2020-10-19", p25: 53.3, p50: 61.8, p75: 69.4, mine: 78.6 },
  { date: "2020-10-20", p25: 53.3, p50: 61.8, p75: 69.4, mine: 69.2 },
  { date: "2020-10-21", p25: 53.3, p50: 62.2, p75: 69.4, mine: 51.7 },
  { date: "2020-10-22", p25: 53.3, p50: 62.2, p75: 69.2, mine: 63.6 },
  { date: "2020-10-23", p25: 52.7, p50: 61.5, p75: 69.0, mine: 15.8 },
  { date: "2020-10-24", p25: 53.3, p50: 61.8, p75: 69.0, mine: 47.7 },
  { date: "2020-10-25", p25: 53.3, p50: 61.8, p75: 69.0, mine: 36.5 },
  { date: "2020-10-26", p25: 54.0, p50: 62.2, p75: 69.4, mine: 67.2 },
  { date: "2020-10-27", p25: 55.2, p50: 63.8, p75: 72.7, mine: 71.1 },
  { date: "2020-10-28", p25: 52.7, p50: 61.8, p75: 69.5, mine: 42.4 },
  { date: "2020-10-29", p25: 52.7, p50: 61.5, p75: 69.0, mine: 91.4 },
  { date: "2020-10-30", p25: 52.7, p50: 60.8, p75: 69.5, mine: 55.6 },
  { date: "2020-10-31", p25: 52.6, p50: 61.6, p75: 69.5, mine: 55.3 },
  { date: "2020-11-01", p25: 53.3, p50: 61.6, p75: 69.5, mine: 45.1 },
  { date: "2020-11-02", p25: 53.3, p50: 61.6, p75: 69.5, mine: 75.4 },
  { date: "2020-11-03", p25: 51.5, p50: 58.5, p75: 69.3, mine: 54.7 },
  { date: "2020-11-04", p25: 51.4, p50: 60.3, p75: 72.5, mine: 22.5 },
  { date: "2020-11-06", p25: 51.7, p50: 58.5, p75: 72.0, mine: 44.8 },
  { date: "2020-11-08", p25: 52.1, p50: 58.5, p75: 67.9, mine: 95.1 },
  { date: "2020-11-09", p25: 52.1, p50: 58.5, p75: 67.9, mine: 81.5 },
  { date: "2020-11-10", p25: 52.5, p50: 59.8, p75: 69.0, mine: 67.8 },
  { date: "2020-11-11", p25: 52.5, p50: 59.8, p75: 67.9, mine: 66.2 },
  { date: "2020-11-12", p25: 53.4, p50: 61.6, p75: 72.2, mine: 92.2 },
  { date: "2020-11-14", p25: 52.9, p50: 60.2, p75: 72.2, mine: 72.6 },
  { date: "2020-11-15", p25: 53.3, p50: 61.0, p75: 72.2, mine: 93.1 },
  { date: "2020-11-16", p25: 53.4, p50: 61.6, p75: 72.2, mine: 64.1 },
  { date: "2020-11-17", p25: 53.4, p50: 61.6, p75: 72.5, mine: 76.5 },
  { date: "2020-11-18", p25: 53.6, p50: 62.2, p75: 72.2, mine: 38.5 },
  { date: "2020-11-19", p25: 53.4, p50: 62.2, p75: 72.2, mine: 73.0 },
  { date: "2020-11-20", p25: 52.0, p50: 60.5, p75: 70.8, mine: 55.1 },
  { date: "2020-11-21", p25: 52.7, p50: 58.5, p75: 67.9, mine: 71.9 },
  { date: "2020-11-22", p25: 52.4, p50: 58.5, p75: 67.9, mine: 90.9 },
  { date: "2020-11-23", p25: 52.4, p50: 58.5, p75: 67.9, mine: 49.4 },
  { date: "2020-11-24", p25: 52.1, p50: 60.5, p75: 67.9, mine: 49.6 },
  { date: "2020-11-25", p25: 52.1, p50: 61.6, p75: 69.3, mine: 4.2 },
  { date: "2020-11-26", p25: 52.1, p50: 61.6, p75: 69.3, mine: 33.2 },
  { date: "2020-11-27", p25: 53.2, p50: 64.9, p75: 73.2, mine: 49.1 },
  { date: "2020-11-28", p25: 50.6, p50: 59.2, p75: 72.5, mine: 76.5 },
  { date: "2020-11-29", p25: 50.6, p50: 59.2, p75: 72.5, mine: 48.0 },
  { date: "2020-11-30", p25: 51.6, p50: 60.5, p75: 72.2, mine: 81.2 },
  { date: "2020-12-01", p25: 51.6, p50: 60.5, p75: 71.8, mine: 33.3 },
  { date: "2020-12-02", p25: 50.6, p50: 59.2, p75: 71.8, mine: 49.2 },
  { date: "2020-12-03", p25: 46.2, p50: 56.6, p75: 71.8, mine: 59.3 },
  { date: "2020-12-04", p25: 47.0, p50: 57.9, p75: 68.3, mine: 24.1 },
  { date: "2020-12-05", p25: 47.6, p50: 59.9, p75: 72.3, mine: 36.7 },
  { date: "2020-12-06", p25: 42.5, p50: 56.6, p75: 66.1, mine: 47.8 },
  { date: "2020-12-07", p25: 44.7, p50: 58.5, p75: 67.5, mine: 35.8 },
  { date: "2020-12-08", p25: 44.7, p50: 58.5, p75: 67.5, mine: 58.1 },
  { date: "2020-12-09", p25: 44.7, p50: 58.5, p75: 72.4, mine: 38.6 },
  { date: "2020-12-10", p25: 47.0, p50: 57.9, p75: 69.5, mine: 65.4 },
  { date: "2020-12-11", p25: 47.0, p50: 58.5, p75: 70.8, mine: 34.6 },
  { date: "2020-12-12", p25: 44.7, p50: 57.9, p75: 69.3, mine: 93.3 },
  { date: "2020-12-13", p25: 42.5, p50: 56.6, p75: 66.6, mine: 49.3 },
  { date: "2020-12-14", p25: 42.5, p50: 56.6, p75: 66.6, mine: 35.4 },
  { date: "2020-12-15", p25: 46.2, p50: 57.9, p75: 69.3, mine: 63.7 },
  { date: "2020-12-16", p25: 46.2, p50: 57.9, p75: 69.3, mine: 73.1 },
  { date: "2020-12-18", p25: 46.2, p50: 57.9, p75: 69.3, mine: 23.3 },
  { date: "2020-12-19", p25: 51.0, p50: 58.7, p75: 66.6, mine: 51.0 },
  { date: "2020-12-20", p25: 46.1, p50: 58.0, p75: 65.9, mine: 37.5 },
  { date: "2020-12-21", p25: 44.9, p50: 55.8, p75: 65.0, mine: 62.1 },
];

const moodTimeSeriesData: TimeSeriesPoint[] = [
  { date: "2020-09-12", p25: 28.2, p50: 48.0, p75: 64.3, mine: 52.8 },
  { date: "2020-09-13", p25: 28.2, p50: 48.0, p75: 58.3, mine: 67.5 },
  { date: "2020-09-14", p25: 30.1, p50: 48.0, p75: 58.3, mine: 44.6 },
  { date: "2020-09-15", p25: 28.2, p50: 46.1, p75: 57.9, mine: 54.9 },
  { date: "2020-09-16", p25: 28.2, p50: 46.0, p75: 57.9, mine: 68.2 },
  { date: "2020-09-17", p25: 28.2, p50: 46.0, p75: 57.9, mine: 72.1 },
  { date: "2020-09-19", p25: 28.2, p50: 46.0, p75: 57.9, mine: 12.7 },
  { date: "2020-09-20", p25: 30.1, p50: 45.5, p75: 57.2, mine: 14.6 },
  { date: "2020-09-21", p25: 30.1, p50: 46.0, p75: 57.2, mine: 69.4 },
  { date: "2020-09-22", p25: 30.9, p50: 46.0, p75: 57.2, mine: 22.6 },
  { date: "2020-09-23", p25: 28.2, p50: 45.5, p75: 57.2, mine: 77.2 },
  { date: "2020-09-24", p25: 28.2, p50: 45.5, p75: 57.2, mine: 77.6 },
  { date: "2020-09-25", p25: 28.2, p50: 45.5, p75: 57.2, mine: 51.6 },
  { date: "2020-09-26", p25: 28.2, p50: 45.5, p75: 56.5, mine: 23.6 },
  { date: "2020-09-27", p25: 29.1, p50: 36.8, p75: 55.0, mine: 22.7 },
  { date: "2020-09-28", p25: 28.2, p50: 45.5, p75: 56.3, mine: 55.6 },
  { date: "2020-09-30", p25: 27.0, p50: 45.5, p75: 56.3, mine: 31.4 },
  { date: "2020-10-01", p25: 26.1, p50: 36.5, p75: 55.4, mine: 80.9 },
  { date: "2020-10-02", p25: 26.6, p50: 41.1, p75: 56.2, mine: 72.6 },
  { date: "2020-10-04", p25: 27.0, p50: 43.7, p75: 56.2, mine: 79.6 },
  { date: "2020-10-05", p25: 28.2, p50: 44.8, p75: 56.2, mine: 55.2 },
  { date: "2020-10-06", p25: 33.1, p50: 45.6, p75: 62.9, mine: 49.4 },
  { date: "2020-10-07", p25: 31.8, p50: 45.5, p75: 59.1, mine: 59.0 },
  { date: "2020-10-08", p25: 28.5, p50: 42.7, p75: 55.0, mine: 44.5 },
  { date: "2020-10-09", p25: 29.4, p50: 42.7, p75: 55.4, mine: 80.9 },
  { date: "2020-10-10", p25: 28.5, p50: 43.0, p75: 56.2, mine: 30.8 },
  { date: "2020-10-11", p25: 29.4, p50: 43.4, p75: 56.2, mine: 89.2 },
  { date: "2020-10-12", p25: 28.5, p50: 43.1, p75: 57.9, mine: 60.3 },
  { date: "2020-10-13", p25: 27.8, p50: 45.5, p75: 58.3, mine: 89.5 },
  { date: "2020-10-14", p25: 28.2, p50: 45.5, p75: 58.3, mine: 18.4 },
  { date: "2020-10-15", p25: 28.2, p50: 45.1, p75: 58.3, mine: 60.8 },
  { date: "2020-10-16", p25: 27.0, p50: 43.0, p75: 58.3, mine: 70.1 },
  { date: "2020-10-17", p25: 28.2, p50: 44.8, p75: 58.3, mine: 79.5 },
  { date: "2020-10-18", p25: 28.2, p50: 44.8, p75: 58.3, mine: 33.9 },
  { date: "2020-10-19", p25: 28.2, p50: 44.8, p75: 58.3, mine: 89.9 },
  { date: "2020-10-20", p25: 28.2, p50: 44.8, p75: 58.3, mine: 93.7 },
  { date: "2020-10-21", p25: 27.9, p50: 43.0, p75: 57.9, mine: 17.1 },
  { date: "2020-10-22", p25: 28.2, p50: 45.1, p75: 57.9, mine: 89.3 },
  { date: "2020-10-23", p25: 28.2, p50: 45.1, p75: 59.0, mine: 24.7 },
  { date: "2020-10-24", p25: 26.6, p50: 43.0, p75: 57.9, mine: 36.9 },
  { date: "2020-10-25", p25: 26.6, p50: 43.0, p75: 57.9, mine: 45.0 },
  { date: "2020-10-26", p25: 27.0, p50: 44.8, p75: 58.3, mine: 79.1 },
  { date: "2020-10-27", p25: 29.5, p50: 45.3, p75: 60.2, mine: 71.1 },
  { date: "2020-10-28", p25: 29.5, p50: 46.0, p75: 67.1, mine: 80.6 },
  { date: "2020-10-29", p25: 29.5, p50: 45.8, p75: 64.9, mine: 92.9 },
  { date: "2020-10-30", p25: 29.1, p50: 45.8, p75: 64.1, mine: 75.0 },
  { date: "2020-10-31", p25: 26.5, p50: 43.0, p75: 58.3, mine: 86.0 },
  { date: "2020-11-01", p25: 27.0, p50: 44.8, p75: 60.3, mine: 33.4 },
  { date: "2020-11-02", p25: 27.0, p50: 44.8, p75: 60.3, mine: 57.6 },
  { date: "2020-11-03", p25: 23.6, p50: 45.6, p75: 60.2, mine: 44.1 },
  { date: "2020-11-04", p25: 34.8, p50: 47.5, p75: 68.8, mine: 33.8 },
  { date: "2020-11-06", p25: 29.1, p50: 46.3, p75: 70.5, mine: 56.8 },
  { date: "2020-11-08", p25: 26.8, p50: 44.2, p75: 56.8, mine: 67.1 },
  { date: "2020-11-09", p25: 26.8, p50: 44.2, p75: 56.8, mine: 96.1 },
  { date: "2020-11-10", p25: 26.8, p50: 44.2, p75: 60.9, mine: 40.4 },
  { date: "2020-11-11", p25: 26.8, p50: 44.2, p75: 60.9, mine: 47.2 },
  { date: "2020-11-12", p25: 29.8, p50: 43.2, p75: 61.7, mine: 89.9 },
  { date: "2020-11-14", p25: 29.6, p50: 45.3, p75: 61.7, mine: 86.8 },
  { date: "2020-11-15", p25: 29.1, p50: 45.9, p75: 61.7, mine: 88.7 },
  { date: "2020-11-16", p25: 30.2, p50: 45.3, p75: 61.7, mine: 90.3 },
  { date: "2020-11-17", p25: 30.2, p50: 45.9, p75: 61.7, mine: 56.7 },
  { date: "2020-11-18", p25: 30.2, p50: 45.3, p75: 64.6, mine: 32.3 },
  { date: "2020-11-19", p25: 30.2, p50: 45.3, p75: 66.6, mine: 33.4 },
  { date: "2020-11-20", p25: 29.1, p50: 47.4, p75: 61.7, mine: 65.0 },
  { date: "2020-11-21", p25: 30.2, p50: 45.9, p75: 64.6, mine: 49.3 },
  { date: "2020-11-22", p25: 31.4, p50: 47.4, p75: 68.8, mine: 75.8 },
  { date: "2020-11-23", p25: 31.4, p50: 47.4, p75: 68.8, mine: 37.3 },
  { date: "2020-11-24", p25: 30.2, p50: 47.4, p75: 70.7, mine: 87.4 },
  { date: "2020-11-25", p25: 30.2, p50: 47.4, p75: 70.7, mine: 8.8 },
  { date: "2020-11-26", p25: 30.2, p50: 47.4, p75: 70.7, mine: 60.0 },
  { date: "2020-11-27", p25: 34.6, p50: 49.1, p75: 62.9, mine: 68.1 },
  { date: "2020-11-28", p25: 34.8, p50: 53.9, p75: 69.1, mine: 73.7 },
  { date: "2020-11-29", p25: 34.8, p50: 53.9, p75: 69.1, mine: 19.0 },
  { date: "2020-11-30", p25: 32.6, p50: 49.1, p75: 66.5, mine: 68.9 },
  { date: "2020-12-01", p25: 30.2, p50: 47.7, p75: 65.2, mine: 58.8 },
  { date: "2020-12-02", p25: 29.1, p50: 47.7, p75: 66.5, mine: 88.7 },
  { date: "2020-12-03", p25: 35.5, p50: 55.3, p75: 76.1, mine: 50.7 },
  { date: "2020-12-04", p25: 36.1, p50: 54.6, p75: 72.6, mine: 79.9 },
  { date: "2020-12-05", p25: 36.1, p50: 54.6, p75: 72.6, mine: 58.8 },
  { date: "2020-12-06", p25: 34.8, p50: 53.9, p75: 72.6, mine: 94.7 },
  { date: "2020-12-07", p25: 35.5, p50: 54.6, p75: 74.2, mine: 40.0 },
  { date: "2020-12-08", p25: 35.5, p50: 54.6, p75: 74.2, mine: 32.9 },
  { date: "2020-12-09", p25: 35.5, p50: 54.6, p75: 76.0, mine: 20.4 },
  { date: "2020-12-10", p25: 35.5, p50: 55.5, p75: 72.6, mine: 92.5 },
  { date: "2020-12-11", p25: 35.0, p50: 55.0, p75: 76.0, mine: 21.1 },
  { date: "2020-12-12", p25: 34.9, p50: 52.9, p75: 72.8, mine: 24.5 },
  { date: "2020-12-13", p25: 35.5, p50: 56.1, p75: 76.0, mine: 59.4 },
  { date: "2020-12-14", p25: 35.5, p50: 56.1, p75: 76.0, mine: 79.2 },
  { date: "2020-12-15", p25: 34.8, p50: 52.9, p75: 76.0, mine: 92.1 },
  { date: "2020-12-16", p25: 34.8, p50: 52.9, p75: 76.0, mine: 71.6 },
  { date: "2020-12-18", p25: 34.8, p50: 52.9, p75: 76.0, mine: 35.2 },
  { date: "2020-12-19", p25: 28.7, p50: 38.8, p75: 57.6, mine: 39.7 },
  { date: "2020-12-20", p25: 30.1, p50: 41.8, p75: 68.4, mine: 88.8 },
  { date: "2020-12-21", p25: 32.8, p50: 49.8, p75: 71.5, mine: 59.1 },
];

const WEEKDAY_ORDER: Weekday[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function weekdayValuesFromTimeSeries(
  series: TimeSeriesPoint[]
): Array<{ day: Weekday; value: number }> {
  return series.map((point) => {
    const [year, month, day] = point.date.split("-").map(Number);
    const dayIndex = new Date(Date.UTC(year, month - 1, day)).getUTCDay();
    return { day: WEEKDAY_ORDER[dayIndex], value: point.mine };
  });
}

function percentile(sorted: number[], p: number): number {
  const n = sorted.length;
  if (n === 0) return 0;
  const idx = (n - 1) * p;
  const lo = Math.floor(idx);
  const hi = Math.ceil(idx);
  if (lo === hi) return sorted[lo];
  return sorted[lo] * (hi - idx) + sorted[hi] * (idx - lo);
}

type BoxStats = {
  day: Weekday;
  min: number;
  q1: number;
  median: number;
  q3: number;
  max: number;
  outliers: number[];
  count: number;
  hoverHeight: number;
};

function computeBoxStats(
  raw: Array<{ day: Weekday; value: number }>,
): BoxStats[] {
  const groups: Record<string, number[]> = {};
  for (const { day, value } of raw) {
    if (!groups[day]) groups[day] = [];
    groups[day].push(value);
  }
  return WEEKDAY_ORDER.map((day) => {
    const values = (groups[day] ?? []).slice().sort((a, b) => a - b);
    const q1 = percentile(values, 0.25);
    const median = percentile(values, 0.5);
    const q3 = percentile(values, 0.75);
    const iqr = q3 - q1;
    const lowerFence = q1 - 1.5 * iqr;
    const upperFence = q3 + 1.5 * iqr;
    const nonOutliers = values.filter(
      (v) => v >= lowerFence && v <= upperFence,
    );
    const outliers = values.filter((v) => v < lowerFence || v > upperFence);
    const min = nonOutliers.length ? nonOutliers[0] : (values[0] ?? 0);
    const max = nonOutliers.length
      ? nonOutliers[nonOutliers.length - 1]
      : (values[values.length - 1] ?? 0);
    return {
      day,
      min,
      q1,
      median,
      q3,
      max,
      outliers,
      count: values.length,
      hoverHeight: 100,
    };
  });
}

const YAXIS_LABEL_STYLE = {
  fontFamily: "monospace",
  fontSize: "0.75rem",
  textAnchor: "middle" as const,
  fill: "var(--color-foreground)",
};

const TOOLTIP_CLASSES =
  "bg-background border border-border rounded-lg p-3 shadow-lg font-mono text-sm";

function formatDateTick(value: string): string {
  const [, m, d] = value.split("-");
  return `${parseInt(m, 10)}/${parseInt(d, 10)}`;
}

function formatDateFull(value: string): string {
  const [y, m, d] = value.split("-");
  const date = new Date(Number(y), Number(m) - 1, Number(d));
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

type TooltipPayloadEntry = {
  name?: string;
  value?: number;
  color?: string;
  dataKey?: string;
  payload?: TimeSeriesPoint;
};

type SeriesKey = "mine" | "p75" | "p50" | "p25";

const TimeSeriesTooltip = ({
  active,
  payload,
  label,
  mineColor,
  mineLabel,
  hidden,
}: {
  active?: boolean;
  payload?: readonly TooltipPayloadEntry[];
  label?: string | number;
  mineColor: string;
  mineLabel: string;
  hidden: Set<SeriesKey>;
}) => {
  if (!active || !payload?.length || label === undefined) return null;
  const point = payload[0].payload;
  if (!point) return null;
  return (
    <div className={TOOLTIP_CLASSES}>
      <p className="text-foreground font-medium mb-1">
        {formatDateFull(String(label))}
      </p>
      {!hidden.has("mine") && (
        <p className="text-foreground" style={{ color: mineColor }}>
          <span className="font-medium">{mineLabel}:</span>{" "}
          {point.mine.toFixed(1)}
        </p>
      )}
      {!hidden.has("p75") && (
        <p className="text-muted-foreground">
          <span className="font-medium">75th pct.:</span> {point.p75.toFixed(1)}
        </p>
      )}
      {!hidden.has("p50") && (
        <p className="text-muted-foreground">
          <span className="font-medium">50th pct.:</span> {point.p50.toFixed(1)}
        </p>
      )}
      {!hidden.has("p25") && (
        <p className="text-muted-foreground">
          <span className="font-medium">25th pct.:</span> {point.p25.toFixed(1)}
        </p>
      )}
    </div>
  );
};

function TimeSeriesChart({
  title,
  data,
  axisLabel,
  mineColor,
  mineLabel,
}: {
  title: string;
  data: TimeSeriesPoint[];
  axisLabel: string;
  mineColor: string;
  mineLabel: string;
}) {
  const [hidden, setHidden] = useState<Set<SeriesKey>>(new Set());

  const toggle = (key: SeriesKey) => {
    setHidden((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const dateTicks = data
    .filter((d) => {
      const day = d.date.slice(-2);
      return day === "01" || day === "15";
    })
    .map((d) => d.date);

  const lines: Array<{
    key: SeriesKey;
    label: string;
    color: string;
    width: number;
    dashed?: boolean;
  }> = [
    { key: "mine", label: mineLabel, color: mineColor, width: 2 },
    {
      key: "p75",
      label: "75th pct.",
      color: "var(--color-muted-foreground)",
      width: 1,
      dashed: true,
    },
    {
      key: "p50",
      label: "50th pct.",
      color: "var(--color-muted-foreground)",
      width: 1.5,
    },
    {
      key: "p25",
      label: "25th pct.",
      color: "var(--color-muted-foreground)",
      width: 1,
      dashed: true,
    },
  ];

  return (
    <div className="w-full my-8">
      <p className="font-semibold text-foreground font-mono mb-2 text-center">
        {title}
      </p>
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mb-2 font-mono text-xs">
        {lines.map((l) => (
          <LegendItem
            key={l.key}
            color={l.color}
            label={l.label}
            dashed={l.dashed}
            hidden={hidden.has(l.key)}
            onClick={() => toggle(l.key)}
          />
        ))}
      </div>
      <ResponsiveContainer width="100%" height={360}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 16, left: 0, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
          <XAxis
            dataKey="date"
            stroke="var(--color-foreground)"
            style={{ fontSize: "0.75rem", fontFamily: "monospace" }}
            ticks={dateTicks}
            tickFormatter={formatDateTick}
          />
          <YAxis
            stroke="var(--color-foreground)"
            style={{ fontSize: "0.75rem", fontFamily: "monospace" }}
            domain={[0, 100]}
            ticks={[0, 25, 50, 75, 100]}
            label={{
              value: axisLabel,
              angle: -90,
              position: "insideLeft",
              offset: 16,
              style: YAXIS_LABEL_STYLE,
            }}
          />
          <Tooltip
            content={(props) => (
              <TimeSeriesTooltip
                {...props}
                mineColor={mineColor}
                mineLabel={mineLabel}
                hidden={hidden}
              />
            )}
          />
          {lines.map((l) => (
            <Line
              key={l.key}
              type="monotone"
              dataKey={l.key}
              stroke={l.color}
              strokeWidth={l.width}
              strokeDasharray={l.dashed ? "4 3" : undefined}
              dot={false}
              isAnimationActive={false}
              hide={hidden.has(l.key)}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

function LegendItem({
  color,
  label,
  dashed,
  hidden,
  onClick,
}: {
  color: string;
  label: string;
  dashed?: boolean;
  hidden?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center text-foreground cursor-pointer select-none transition-opacity hover:opacity-70"
      style={{ opacity: hidden ? 0.4 : 1 }}
      aria-pressed={!hidden}
    >
      <svg width="18" height="8" className="mr-2">
        <line
          x1="0"
          y1="4"
          x2="18"
          y2="4"
          stroke={color}
          strokeWidth={2}
          strokeDasharray={dashed ? "3 2" : undefined}
        />
      </svg>
      <span style={hidden ? { textDecoration: "line-through" } : undefined}>
        {label}
      </span>
    </button>
  );
}

function BoxShape(props: {
  x?: number;
  width?: number;
  background?: { x: number; y: number; width: number; height: number };
  payload?: BoxStats;
  color: string;
}) {
  const { x, width, background, payload, color } = props;
  if (x === undefined || width === undefined || !background || !payload) {
    return null;
  }
  const yScale = (v: number) =>
    background.y + background.height * (1 - v / 100);
  const centerX = x + width / 2;
  const boxWidth = Math.min(54, width * 0.55);
  const boxLeft = centerX - boxWidth / 2;
  const boxRight = centerX + boxWidth / 2;
  const yMax = yScale(payload.max);
  const yQ3 = yScale(payload.q3);
  const yMedian = yScale(payload.median);
  const yQ1 = yScale(payload.q1);
  const yMin = yScale(payload.min);

  return (
    <g pointerEvents="none">
      <line
        x1={centerX}
        x2={centerX}
        y1={yMax}
        y2={yQ3}
        stroke={color}
        strokeWidth={1.5}
      />
      <line
        x1={centerX}
        x2={centerX}
        y1={yQ1}
        y2={yMin}
        stroke={color}
        strokeWidth={1.5}
      />
      <line
        x1={boxLeft + boxWidth * 0.25}
        x2={boxRight - boxWidth * 0.25}
        y1={yMax}
        y2={yMax}
        stroke={color}
        strokeWidth={1.5}
      />
      <line
        x1={boxLeft + boxWidth * 0.25}
        x2={boxRight - boxWidth * 0.25}
        y1={yMin}
        y2={yMin}
        stroke={color}
        strokeWidth={1.5}
      />
      <rect
        x={boxLeft}
        y={yQ3}
        width={boxWidth}
        height={Math.max(1, yQ1 - yQ3)}
        fill={color}
        fillOpacity={0.18}
        stroke={color}
        strokeWidth={1.5}
      />
      <line
        x1={boxLeft}
        x2={boxRight}
        y1={yMedian}
        y2={yMedian}
        stroke={color}
        strokeWidth={2}
      />
      {payload.outliers.map((v, oi) => (
        <circle
          key={oi}
          cx={centerX}
          cy={yScale(v)}
          r={2.5}
          fill="none"
          stroke={color}
          strokeWidth={1.25}
        />
      ))}
    </g>
  );
}

const BoxTooltip = ({
  active,
  payload,
  axisLabel,
}: {
  active?: boolean;
  payload?: ReadonlyArray<{ payload?: BoxStats }>;
  axisLabel: string;
}) => {
  if (!active || !payload?.length) return null;
  const stat = payload[0].payload;
  if (!stat) return null;
  return (
    <div className={TOOLTIP_CLASSES}>
      <p className="text-foreground font-medium mb-1">
        {stat.day}{" "}
        <span className="text-muted-foreground font-normal">
          ({stat.count} song{stat.count === 1 ? "" : "s"})
        </span>
      </p>
      <p className="text-foreground">
        <span className="font-medium">Max:</span> {stat.max.toFixed(1)}
      </p>
      <p className="text-foreground">
        <span className="font-medium">75th pct.:</span> {stat.q3.toFixed(1)}
      </p>
      <p className="text-foreground">
        <span className="font-medium">Median:</span> {stat.median.toFixed(1)}
      </p>
      <p className="text-foreground">
        <span className="font-medium">25th pct.:</span> {stat.q1.toFixed(1)}
      </p>
      <p className="text-foreground">
        <span className="font-medium">Min:</span> {stat.min.toFixed(1)}
      </p>
      {stat.outliers.length > 0 && (
        <p className="text-muted-foreground">
          <span className="font-medium">Outliers:</span>{" "}
          {stat.outliers.map((v) => v.toFixed(1)).join(", ")}
        </p>
      )}
    </div>
  );
};

function BoxPlotChart({
  title,
  stats,
  axisLabel,
  color,
}: {
  title: string;
  stats: BoxStats[];
  axisLabel: string;
  color: string;
}) {
  return (
    <div className="w-full my-8">
      <p className="font-semibold text-foreground font-mono mb-4 text-center">
        {title}
      </p>
      <ResponsiveContainer width="100%" height={360}>
        <ComposedChart
          data={stats}
          margin={{ top: 5, right: 16, left: 0, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
          <XAxis
            dataKey="day"
            stroke="var(--color-foreground)"
            style={{ fontSize: "0.75rem", fontFamily: "monospace" }}
            tickFormatter={(v: Weekday) => v.slice(0, 3)}
          />
          <YAxis
            stroke="var(--color-foreground)"
            style={{ fontSize: "0.75rem", fontFamily: "monospace" }}
            domain={[0, 100]}
            ticks={[0, 25, 50, 75, 100]}
            label={{
              value: axisLabel,
              angle: -90,
              position: "insideLeft",
              offset: 16,
              style: YAXIS_LABEL_STYLE,
            }}
          />
          <Tooltip
            content={(props) => <BoxTooltip {...props} axisLabel={axisLabel} />}
            cursor={{ fill: "var(--color-muted)", fillOpacity: 0.18 }}
          />
          <Bar
            dataKey="hoverHeight"
            shape={(props) => <BoxShape {...props} color={color} />}
            isAnimationActive={false}
            fill="transparent"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

export const MoodEnergyOverTimeChart = () => (
  <TimeSeriesChart
    title="United States Top 50 and My Songs: Energy"
    data={energyTimeSeriesData}
    axisLabel="Energy"
    mineColor="var(--color-solarized-blue)"
    mineLabel="my songs"
  />
);

export const MoodValenceOverTimeChart = () => (
  <TimeSeriesChart
    title="United States Top 50 and My Songs: Mood"
    data={moodTimeSeriesData}
    axisLabel="Mood"
    mineColor="var(--color-solarized-orange)"
    mineLabel="my songs"
  />
);

const energyBoxStats = computeBoxStats(
  weekdayValuesFromTimeSeries(energyTimeSeriesData),
);
const moodBoxStats = computeBoxStats(
  weekdayValuesFromTimeSeries(moodTimeSeriesData),
);

export const MoodEnergyByWeekdayChart = () => (
  <BoxPlotChart
    title="My Songs by Weekday: Energy"
    stats={energyBoxStats}
    axisLabel="Energy"
    color="var(--color-solarized-blue)"
  />
);

export const MoodValenceByWeekdayChart = () => (
  <BoxPlotChart
    title="My Songs by Weekday: Mood"
    stats={moodBoxStats}
    axisLabel="Mood"
    color="var(--color-solarized-orange)"
  />
);
