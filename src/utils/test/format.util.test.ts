import { formatUtil } from "../format.util";
import { describe, expect, it, vi, afterEach, beforeEach } from "vitest";
import {
  nexFiveDaysForecastExpected,
  forecastApiResponseMock,
  cityWeatherApiResponseMock,
  cityWeatherExpected,
  forecastApiResponsePastMock,
  forecastApiResponseEmptyMock,
} from "./mock";
describe("formatUtil", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });
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
      const forecastFormatted = formatUtil.formatForecastsResponse(
        forecastApiResponseMock
      );
      expect(forecastFormatted).toStrictEqual(nexFiveDaysForecastExpected);
    });
    it("should format empty weather response", () => {
      const mockDate = new Date("2023-10-01T12:55:00Z");
      vi.setSystemTime(mockDate);

      const forecastFormatted = formatUtil.formatForecastsResponse(
        forecastApiResponseEmptyMock
      );

      expect(forecastFormatted).toStrictEqual([]);
    });

    it("should format weather response with past dates", () => {
      const mockDate = new Date("2023-10-10T12:55:00Z");
      vi.setSystemTime(mockDate);

      const forecastFormatted = formatUtil.formatForecastsResponse(
        forecastApiResponsePastMock
      );

      expect(forecastFormatted).toStrictEqual([]);
    });
  });
});
