import { formatUtil } from "../format.util"; // Asegúrate de ajustar la ruta correcta
import { describe, expect, it, vi } from "vitest";
import {
  nexFiveDaysForecastExpected,
  forecastApiResponseMock,
  cityWeatherApiResponseMock,
  cityWeatherExpected,
} from "./mock";
describe("formatUtil", () => {
  describe("format city weather", () => {
    it("should format city weather response", () => {
      const mockDate = new Date("2023-10-01T22:20:00Z");
      vi.setSystemTime(mockDate);
      const weatherCityFormatted = formatUtil.formatWeatherCityResponse(
        cityWeatherApiResponseMock
      );
      expect(weatherCityFormatted).toStrictEqual(cityWeatherExpected);
    });
  });
  describe("format forecasts", () => {
    it("should format weather response with next five days forecast", () => {
      const mockDate = new Date("2023-10-01T12:55:00Z");
      vi.setSystemTime(mockDate);
      const forecastFormatted = formatUtil.formatForescastsResponse(
        forecastApiResponseMock
      );
      expect(forecastFormatted).toStrictEqual(nexFiveDaysForecastExpected);
    });
  });
});
