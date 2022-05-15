export interface Show extends ShowBase {
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    genres: Array<string>;
    status: string;
    runtime: number;
    premiered: string;
    officialSite: string;
    schedule: Schedule;
    rating: Rating;
    weight: number;
    network: Network;
    webChannel?: unknown;
    externals: Externals;
    image: Image;
    summary: string;
    updated: number;
    _links: Links;
    averageRuntime?: number;
    dvdCountry?: unknown;
    ended?: unknown;
}

export interface ShowBase {
    isFavorite?: boolean | null;
}

export interface ShowSearchResponseEntry {
    score: number;
    show: Show;
}

export interface Links {
    self: Self;
    previousepisode: Self;
}

export interface Self {
    href: string;
}

export interface Image {
    medium: string;
    original: string;
}

export interface Externals {
    tvrage: number;
    thetvdb: number;
    imdb: string;
}

export interface Network {
    id: number;
    name: string;
    country: Country;
}

export interface Country {
    name: string;
    code: string;
    timezone: string;
}

export interface Rating {
    average: number;
}

export interface Schedule {
    time: string;
    days: Array<string>;
}
