export interface PokemonAPI {
    name;
    id;
    stats: {
        0: {
            base_stat: number;
        },
        3: {
            base_stat: number;
        }
        4: {
            base_stat: number;
        },
        5: {
            base_stat: number;
        }
    };
    sprites: {
        back_default: string,
        front_default: string
    };
    species: {
        url: string
    };
}
