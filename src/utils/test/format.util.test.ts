import { formatUtil } from "../format.util"; // Asegúrate de ajustar la ruta correcta
import { describe, expect, it, vi } from "vitest";
import { nexFiveDaysForecastExpected, weatherResponse } from "./mock";
describe("formatUtil", () => {
  it.only("should format forecasts and return 5", () => {
    const mockDate = new Date("2023-10-01T12:55:00Z");
    vi.setSystemTime(mockDate);
    const forecastFormated =
      formatUtil.formatForescastsResponse(weatherResponse);
    expect(forecastFormated).toStrictEqual(nexFiveDaysForecastExpected);
  });
});
