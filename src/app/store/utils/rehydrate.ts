import {Action, ActionCreator, ActionReducer, ActionType, createReducer, ReducerTypes} from '@ngrx/store';

// Given from: https://medium.com/betsson-group/the-easiest-way-to-keep-ngrx-state-after-refresh-rehydrate-it-from-localstorage-8cd23b547aac
export function createLsRehydrateReducer<S, A extends Action = Action>(
    key: string,
    initialState: S,
    ...ons: ReducerTypes<S, ActionCreator[]>[]
): ActionReducer<S, A> {
    const item = localStorage.getItem(key);
    const newInitialState =
        (item && JSON.parse(item)) ?? initialState;

    const newOns: ReducerTypes<S, ActionCreator[]>[] = [];
    ons.forEach((oldOn: ReducerTypes<S, ActionCreator[]>) => {
        const newReducer: ActionReducer<S, A> = (
            state: S | undefined,
            action: ActionType<ActionCreator[][number]>
        ) => {
            const newState = oldOn.reducer(state, action);
            localStorage.setItem(key, JSON.stringify(newState));
            return newState;
        };
        newOns.push({...oldOn, reducer: newReducer});
    });
    return createReducer(newInitialState, ...newOns);
}
