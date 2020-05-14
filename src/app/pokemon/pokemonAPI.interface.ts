export interface PokemonAPI {
    stats: {
        0: {
            base_stat: number;
        }
    },
    sprites: {
        back_default: string,
        front_default: string
    },
    species: {
        url: string
    }
}