import {Show} from '../../interfaces/show';

export interface AppStore {
    shows: ShowsState;
    favorites: FavoritesState;
}

export interface ShowsState extends BaseState {
    shows: Array<Show>;
    lastSearchValue: string;
}

export interface FavoritesState {
    favorites: Array<Show>;
}

export interface BaseState {
    loading: boolean;
    error: string | null;
}
