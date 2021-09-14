export interface IForecast {
    list: [
        dt_txt: Date,
        main: {
            temp: number
        },
        weather: [
            {
                main: string,
                icon: string
            }
        ]
    ]
}