"use client";

import { useLanguage } from '@/lib/i18n';

export default function DirectionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { direction } = useLanguage();

  return <div className="flex min-h-screen flex-col" dir={direction}>{children}</div>;
}
