"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const countries = [
  { code: "US", name: "United States", flag: "🇺🇸" },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧" },
  { code: "CA", name: "Canada", flag: "🇨🇦" },
  { code: "CN", name: "China", flag: "🇨🇳" },
  { code: "IN", name: "India", flag: "🇮🇳" },
  { code: "SG", name: "Singapore", flag: "🇸🇬" },
  { code: "BR", name: "Brazil", flag: "🇧🇷" },
  { code: "ZA", name: "South Africa", flag: "🇿🇦" },
  { code: "AE", name: "United Arab Emirates", flag: "🇦🇪" },
  { code: "RU", name: "Russia", flag: "🇷🇺" },
];

interface CountrySelectorProps {
  value: string;
  onValueChange: (value: string) => void;
  disabled?: boolean;
}

export function CountrySelector({
  value,
  onValueChange,
  disabled,
}: CountrySelectorProps) {
  const selectedCountry =
    countries.find((country) => country.code === value) || countries[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          disabled={disabled}
          className="h-14 px-4 justify-between min-w-[140px] border-2 border-green-200 dark:border-green-600 hover:border-green-500 dark:hover:border-green-400 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm"
        >
          <div className="flex items-center gap-2">
            <span className="text-lg">{selectedCountry.flag}</span>
            <span className="font-medium">{selectedCountry.code}</span>
          </div>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="w-[280px] max-h-[300px] overflow-y-auto"
      >
        {countries.map((country) => (
          <DropdownMenuItem
            key={country.code}
            onClick={() => onValueChange(country.code)}
            className="flex items-center gap-3 cursor-pointer"
          >
            <span className="text-lg">{country.flag}</span>
            <div className="flex flex-col">
              <span className="font-medium">{country.name}</span>
              <span className="text-xs text-muted-foreground">
                {country.code}
              </span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}