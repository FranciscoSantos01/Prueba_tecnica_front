export type Data = {
    info:    Info;
    results: Result[];
}

export type Info = {
    count: number;
    pages: number;
    next:  string;
    prev:  string;
}

export type Result = {
    id:       number;
    name:     string;
    status:   string;
    species:  string;
    type:     string;
    gender:   string;
    origin:   Location;
    location: Location;
    image:    string;
    episode:  string[];
    url:      string;
    created:  Date;
}

export type Location = {
    name: string;
    url:  string;
}

 export type Locations = {
    id:        number;
    name:      string;
    type:      string;
    dimension: string;
    residents: string[];
    url:       string;
    created:   Date;
}
