export interface PlayersType{
    id: number,
    title: string,
    events: number,
    img:string,
    sport:string,
}

export interface SetDarkMode {
    setDarkMode: (mode: boolean) => void;
    darkMode: boolean;
}