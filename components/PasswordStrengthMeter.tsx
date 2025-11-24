"use client";

import { useEffect, useState } from "react";
import {
  checkPasswordStrength,
  getPasswordLevelColor,
  getPasswordLevelTextColor,
  type PasswordStrength,
} from "@/lib/password-strength";

interface PasswordStrengthMeterProps {
  password: string;
  showFeedback?: boolean;
}

export default function PasswordStrengthMeter({
  password,
  showFeedback = true,
}: PasswordStrengthMeterProps) {
  const [strength, setStrength] = useState<PasswordStrength | null>(null);

  useEffect(() => {
    if (password) {
      setStrength(checkPasswordStrength(password));
    } else {
      setStrength(null);
    }
  }, [password]);

  if (!strength) {
    return null;
  }

  const colorClass = getPasswordLevelColor(strength.level);
  const textColorClass = getPasswordLevelTextColor(strength.level);

  return (
    <div className="space-y-2">
      {/* Strength Meter */}
      <div>
        <div className="flex justify-between items-center mb-1">
          <label className="text-sm font-medium text-gray-700">
            Password Strength
          </label>
          <span
            className={`text-sm font-semibold capitalize ${textColorClass}`}
          >
            {strength.level.replace("-", " ")}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-300 ${colorClass}`}
            style={{ width: `${strength.score}%` }}
          ></div>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          Strength: {strength.score}/100
        </p>
      </div>

      {/* Feedback */}
      {showFeedback && strength.feedback.length > 0 && (
        <div className="bg-blue-50 border border-blue-200 rounded p-3">
          <p className="text-sm font-semibold text-blue-900 mb-2">
            Password requirements:
          </p>
          <ul className="space-y-1">
            {strength.feedback.map((item, index) => (
              <li
                key={index}
                className="text-sm text-blue-800 flex items-start"
              >
                <span className="mr-2">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Valid Indicator */}
      {strength.isValid ? (
        <p className="text-sm text-green-600 font-semibold flex items-center">
          ✓ Password is strong enough
        </p>
      ) : (
        <p className="text-sm text-red-600 font-semibold flex items-center">
          ✗ Password needs to be stronger
        </p>
      )}
    </div>
  );
}
