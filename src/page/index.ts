import { lazy } from "react";

const LegacyDataDigitilization = lazy(
  () => import("./LegacyDataDigitilization/LegacyDataDigitilization")
);
const ChatApp = lazy(() => import("./ChatApp/ChatApp"));

export { LegacyDataDigitilization, ChatApp };
