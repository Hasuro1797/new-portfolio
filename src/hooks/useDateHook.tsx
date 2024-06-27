"use client"
import { useEffect, useState } from 'react';

export default function useDateHook() {
  const [time, setTime] = useState("");

  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Bogota",
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(formatter.format(new Date()));
    }, 1000);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return time;
}
