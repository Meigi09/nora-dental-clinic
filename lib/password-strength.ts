export interface PasswordStrength {
  score: number; // 0-100
  level: "weak" | "fair" | "good" | "strong" | "very-strong";
  feedback: string[];
  isValid: boolean;
}

export function checkPasswordStrength(password: string): PasswordStrength {
  const feedback: string[] = [];
  let score = 0;

  // Check minimum length
  if (password.length < 8) {
    feedback.push("Password should be at least 8 characters long");
  } else {
    score += 20;
  }

  // Check for uppercase letters
  if (/[A-Z]/.test(password)) {
    score += 15;
  } else {
    feedback.push("Add at least one uppercase letter (A-Z)");
  }

  // Check for lowercase letters
  if (/[a-z]/.test(password)) {
    score += 15;
  } else {
    feedback.push("Add at least one lowercase letter (a-z)");
  }

  // Check for numbers
  if (/\d/.test(password)) {
    score += 15;
  } else {
    feedback.push("Add at least one number (0-9)");
  }

  // Check for special characters
  if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
    score += 20;
  } else {
    feedback.push("Add at least one special character (!@#$%^&*)");
  }

  // Check for common patterns (reduce score)
  if (/(.)\1{2,}/.test(password)) {
    score -= 10;
    feedback.push("Avoid repeating characters (e.g., 'aaa')");
  }

  // Check if password contains dictionary words (basic check)
  const commonWords = [
    "password",
    "123456",
    "qwerty",
    "abc123",
    "letmein",
    "welcome",
    "admin",
    "user",
  ];
  if (commonWords.some((word) => password.toLowerCase().includes(word))) {
    score -= 15;
    feedback.push("Avoid common words and phrases");
  }

  // Determine level
  let level: "weak" | "fair" | "good" | "strong" | "very-strong";
  if (score < 20) {
    level = "weak";
  } else if (score < 40) {
    level = "fair";
  } else if (score < 60) {
    level = "good";
  } else if (score < 80) {
    level = "strong";
  } else {
    level = "very-strong";
  }

  // Clamp score between 0 and 100
  score = Math.max(0, Math.min(100, score));

  return {
    score,
    level,
    feedback,
    isValid: score >= 60 && password.length >= 8,
  };
}

export function getPasswordLevelColor(level: string): string {
  switch (level) {
    case "weak":
      return "bg-red-500";
    case "fair":
      return "bg-orange-500";
    case "good":
      return "bg-yellow-500";
    case "strong":
      return "bg-lime-500";
    case "very-strong":
      return "bg-green-500";
    default:
      return "bg-gray-300";
  }
}

export function getPasswordLevelTextColor(level: string): string {
  switch (level) {
    case "weak":
      return "text-red-600";
    case "fair":
      return "text-orange-600";
    case "good":
      return "text-yellow-600";
    case "strong":
      return "text-lime-600";
    case "very-strong":
      return "text-green-600";
    default:
      return "text-gray-600";
  }
}
