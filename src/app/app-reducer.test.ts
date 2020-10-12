import {appReducer, InitialStateType, setErrorAC, setStatusAC} from "./app-reducer";

let startState: InitialStateType

beforeEach(() => {
    startState = {
        status: 'idle',
        error: null
    }
})

test('correct error message', () => {

    const endState = appReducer(startState, setErrorAC('some error'))

    expect(endState.error).toBe('some error')
})

test('correct status', () => {

    const endState = appReducer(startState, setStatusAC('loading'))

    expect(endState.status).toBe('loading')
})