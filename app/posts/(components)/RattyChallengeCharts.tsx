"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface AttendanceRecord {
  name: string;
  arrived: string;
  left: string;
}

const rawData: AttendanceRecord[] = [
  { name: "Hadley", arrived: "7:54 AM", left: "8:30 AM" },
  { name: "William", arrived: "8:51 AM", left: "9:07 AM" },
  { name: "Devesh", arrived: "8:51 AM", left: "9:17 AM" },
  { name: "Chai", arrived: "9:23 AM", left: "7:45 PM" },
  { name: "Faz", arrived: "9:27 AM", left: "10:21 AM" },
  { name: "Amish", arrived: "10:04 AM", left: "10:29 AM" },
  { name: "Tyler", arrived: "10:08 AM", left: "10:25 AM" },
  { name: "Aaron", arrived: "10:20 AM", left: "7:45 PM" },
  { name: "Evan", arrived: "10:58 AM", left: "1:15 PM" },
  { name: "Adrian", arrived: "11:00 AM", left: "11:02 AM" },
  { name: "Jackie", arrived: "11:04 AM", left: "12:51 PM" },
  { name: "Amil", arrived: "11:09 AM", left: "12:08 PM" },
  { name: "Thomas", arrived: "11:36 AM", left: "12:19 PM" },
  { name: "Amanda", arrived: "11:56 AM", left: "12:22 PM" },
  { name: "Gannon", arrived: "12:13 PM", left: "12:16 PM" },
  { name: "Ella", arrived: "12:43 PM", left: "2:19 PM" },
  { name: "Omeed", arrived: "12:55 PM", left: "1:42 PM" },
  { name: "Austine", arrived: "1:03 PM", left: "1:20 PM" },
  { name: "Atharva", arrived: "1:09 PM", left: "2:17 PM" },
  { name: "Michael", arrived: "1:14 PM", left: "1:51 PM" },
  { name: "Chloe", arrived: "1:29 PM", left: "1:38 PM" },
  { name: "Yi", arrived: "1:29 PM", left: "7:45 PM" },
  { name: "Noam", arrived: "1:37 PM", left: "1:56 PM" },
  { name: "Aren", arrived: "1:59 PM", left: "3:54 PM" },
  { name: "Satvik", arrived: "2:12 PM", left: "2:14 PM" },
  { name: "Ziqi", arrived: "2:17 PM", left: "2:26 PM" },
  { name: "Nathan Sc.", arrived: "2:29 PM", left: "3:24 PM" },
  { name: "Jake", arrived: "2:37 PM", left: "2:49 PM" },
  { name: "Nathan Sm.", arrived: "2:42 PM", left: "2:49 PM" },
  { name: "Arin", arrived: "2:46 PM", left: "3:29 PM" },
  { name: "Cecily", arrived: "3:26 PM", left: "3:34 PM" },
  { name: "Siddharta", arrived: "3:46 PM", left: "5:26 PM" },
  { name: "Owen", arrived: "3:48 PM", left: "4:11 PM" },
  { name: "Stephen", arrived: "4:14 PM", left: "6:29 PM" },
  { name: "Jaya", arrived: "4:32 PM", left: "4:35 PM" },
  { name: "Thomas", arrived: "4:39 PM", left: "5:33 PM" },
  { name: "Hadley", arrived: "4:39 PM", left: "4:42 PM" },
  { name: "Jeffrey", arrived: "4:50 PM", left: "5:08 PM" },
  { name: "Jackie", arrived: "5:09 PM", left: "7:45 PM" },
  { name: "Ryder", arrived: "5:10 PM", left: "5:14 PM" },
  { name: "Junwon", arrived: "5:19 PM", left: "5:54 PM" },
  { name: "Tyler", arrived: "5:20 PM", left: "5:50 PM" },
  { name: "Charlotte", arrived: "5:20 PM", left: "5:50 PM" },
  { name: "Claire", arrived: "5:34 PM", left: "6:10 PM" },
  { name: "Talia", arrived: "5:54 PM", left: "7:45 PM" },
  { name: "Chris", arrived: "6:08 PM", left: "6:12 PM" },
  { name: "Alexander", arrived: "6:22 PM", left: "6:23 PM" },
  { name: "Jake", arrived: "6:24 PM", left: "6:51 PM" },
  { name: "Ella", arrived: "6:31 PM", left: "7:45 PM" },
  { name: "Akshay", arrived: "6:32 PM", left: "6:33 PM" },
  { name: "Luke", arrived: "6:36 PM", left: "7:45 PM" },
  { name: "Julia", arrived: "6:42 PM", left: "7:07 PM" },
  { name: "Siddharta", arrived: "7:07 PM", left: "7:45 PM" },
  { name: "Sulan", arrived: "7:12 PM", left: "7:45 PM" },
  { name: "Irene", arrived: "7:12 PM", left: "7:45 PM" },
  { name: "Dena", arrived: "7:15 PM", left: "7:45 PM" },
];

function parseTime(timeStr: string): number {
  const [time, period] = timeStr.split(" ");
  const [hours, minutes] = time.split(":").map(Number);
  let hour24 = hours;
  if (period === "PM" && hours !== 12) {
    hour24 += 12;
  } else if (period === "AM" && hours === 12) {
    hour24 = 0;
  }
  return hour24 * 60 + minutes;
}

function formatTime(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  const period = hours >= 12 ? "pm" : "am";
  const displayHours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
  return `${displayHours}:${mins.toString().padStart(2, "0")}${period}`;
}

function formatDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h ${mins}m`;
}

function generateTimelineData() {
  const events: { time: number; delta: number }[] = [];

  rawData.forEach((record) => {
    const arrivalTime = parseTime(record.arrived);
    const departureTime = parseTime(record.left);
    events.push({ time: arrivalTime, delta: 1 });
    events.push({ time: departureTime, delta: -1 });
  });

  events.sort((a, b) => a.time - b.time);

  const timelineData: { timeMinutes: number; time: string; guests: number }[] =
    [];
  let currentGuests = 0;

  // Start from 7:00 AM
  const startTime = 7 * 60;
  timelineData.push({
    timeMinutes: startTime,
    time: formatTime(startTime),
    guests: 0,
  });

  for (const event of events) {
    currentGuests += event.delta;
    timelineData.push({
      timeMinutes: event.time,
      time: formatTime(event.time),
      guests: currentGuests,
    });

    // Stop after reaching 11 guests - they stayed until the end
    if (currentGuests === 11) {
      break;
    }
  }

  // Add final point at 7:45 PM with 11 guests for chart display
  const endTime = 19 * 60 + 45; // 7:45 PM
  timelineData.push({
    timeMinutes: endTime,
    time: formatTime(endTime),
    guests: 11,
  });

  return timelineData;
}

function generateLeaderboardData() {
  const timeByPerson: { [name: string]: number } = {};

  rawData.forEach((record) => {
    const arrivalTime = parseTime(record.arrived);
    const departureTime = parseTime(record.left);
    const duration = departureTime - arrivalTime;

    if (!timeByPerson[record.name]) {
      timeByPerson[record.name] = 0;
    }
    timeByPerson[record.name] += duration;
  });

  const leaderboardData = Object.entries(timeByPerson)
    .map(([name, minutes]) => ({
      name,
      minutes,
      displayTime: formatDuration(minutes),
    }))
    .sort((a, b) => b.minutes - a.minutes);

  return leaderboardData;
}

export const GuestsOverTimeChart = () => {
  const data = generateTimelineData();

  // Generate tick values at 3-hour intervals (9 AM, 12 PM, 3 PM, 6 PM)
  const startTime = 9 * 60; // 9:00 AM
  const endTime = 19 * 60; // 7:00 PM
  const ticks: number[] = [];
  for (let time = startTime; time <= endTime; time += 3 * 60) {
    ticks.push(time);
  }

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background border border-border rounded-lg p-3 shadow-lg font-mono text-sm">
          <p className="text-foreground">
            <span className="font-medium">Time:</span> {payload[0].payload.time}
          </p>
          <p className="text-foreground">
            <span className="font-medium">Guests:</span> {payload[0].value}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full my-8">
      <p className="font-semibold text-foreground font-mono mb-4">
        # Guests present throughout the challenge
      </p>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
          <XAxis
            dataKey="timeMinutes"
            type="number"
            domain={[7 * 60, 20 * 60]}
            ticks={ticks}
            tickFormatter={(value) => formatTime(value)}
            stroke="var(--color-foreground)"
            style={{ fontSize: "0.875rem", fontFamily: "monospace" }}
            label={{
              value: "Time",
              position: "insideBottom",
              offset: -5,
              style: { fontFamily: "monospace" },
            }}
          />
          <YAxis
            stroke="var(--color-foreground)"
            style={{ fontSize: "0.875rem", fontFamily: "monospace" }}
            label={{
              value: "Guests",
              angle: -90,
              position: "insideLeft",
              style: { fontFamily: "monospace" },
            }}
          />
          <Tooltip content={CustomTooltip} />
          <Line
            type="stepAfter"
            dataKey="guests"
            stroke="var(--color-solarized-blue)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export const LeaderboardChart = () => {
  const data = generateLeaderboardData();

  // Generate tick values for whole hours (0, 3, 6, 9, 12)
  const yAxisTicks = [0, 3 * 60, 6 * 60, 9 * 60, 12 * 60];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background border border-border rounded-lg p-3 shadow-lg font-mono text-sm">
          <p className="text-foreground">
            <span className="font-medium">{payload[0].payload.name}:</span>{" "}
            {payload[0].payload.displayTime}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full my-8">
      <p className="font-semibold text-foreground font-mono mb-4">
        Leaderboard: Time spent at table
      </p>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
          <XAxis
            dataKey="name"
            stroke="var(--color-foreground)"
            style={{ fontSize: "0.6rem", fontFamily: "monospace" }}
            angle={-60}
            textAnchor="end"
            height={80}
            interval={0}
            dx={-2}
          />
          <YAxis
            stroke="var(--color-foreground)"
            style={{ fontSize: "0.875rem", fontFamily: "monospace" }}
            ticks={yAxisTicks}
            tickFormatter={(value) => (value / 60).toString()}
            domain={[0, 12 * 60]}
            label={{
              value: "Time (hours)",
              angle: -90,
              position: "insideLeft",
              style: { fontFamily: "monospace" },
            }}
          />
          <Tooltip content={CustomTooltip} />
          <Bar dataKey="minutes" fill="var(--color-solarized-blue)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
