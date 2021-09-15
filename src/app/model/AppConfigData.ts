export interface AppConfigData {
    readonly weather_api: WeatherConfig
}

export interface WeatherConfig {
    readonly url: string,
    readonly api_key: string,
    readonly cnt: number
}