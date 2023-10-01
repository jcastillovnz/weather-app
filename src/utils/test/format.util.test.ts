import { formatUtil } from "../format.util"; // Asegúrate de ajustar la ruta correcta
import { describe, expect, it, vi } from "vitest";
import {
  currentForecastExpected,
  nexFiveDaysForecastExpected,
  weatherResponse,
} from "./mock";
describe("formatUtil", () => {
  it.only("should format response correctly", () => {
    const mockDate = new Date("2023-10-01T12:55:00Z");
    vi.setSystemTime(mockDate);
    const formattedWeather = formatUtil.formatResponse(weatherResponse);
    expect(formattedWeather.id).toBe(3862744);
    expect(formattedWeather.name).toBe("Departamento de Capital");
    expect(formattedWeather.forecast?.current).toStrictEqual(
      currentForecastExpected
    );
    expect(formattedWeather.forecast?.nextFiveDays).toStrictEqual(nexFiveDaysForecastExpected);
  });
});
