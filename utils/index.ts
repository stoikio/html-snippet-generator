import { useMemo } from "react";

export const generateId = () => `_${(Math.random() + 1).toString(36).substring(2)}`;

export const useId = () => {
  return useMemo(() => generateId(), []);
};
