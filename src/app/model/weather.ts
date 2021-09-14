export interface IWeather {
    name: string;
    main: {
        temp: number
    };
    weather: [
        {
            main: string, 
            icon: string
        }
    ];
}