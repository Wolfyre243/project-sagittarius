'use client';

import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface DateTimeDisplayProps {
  timezone?: string;
  format?: 'short' | 'long';
  className?: string;
}

export function LiveDateTimeDisplay({
  timezone = Intl.DateTimeFormat().resolvedOptions().timeZone,
  format = 'long',
  className,
}: DateTimeDisplayProps) {
  const [dateTime, setDateTime] = useState<string>('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        year: 'numeric',
        month: format === 'long' ? 'long' : '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }).format(now);

      setDateTime(formatted);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, [timezone, format]);

  return <span className={cn('', className)}>{dateTime}</span>;
}
