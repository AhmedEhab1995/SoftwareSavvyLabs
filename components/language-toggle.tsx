"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";
import Image from "next/image";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setLanguage(language === "en" ? "ar" : "en")}
      className="relative w-8 h-8 p-0 overflow-hidden"
    >
      {language === "en" ? (
        <Image
          src="https://flagcdn.com/w40/gb.png"
          alt="Switch to Arabic"
          width={32}
          height={32}
          className="object-cover"
        />
      ) : (
        <Image
          src="https://flagcdn.com/w40/ae.png"
          alt="Switch to English"
          width={32}
          height={32}
          className="object-cover"
        />
      )}
    </Button>
  );
}
