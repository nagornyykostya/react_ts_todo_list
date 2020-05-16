import { createSelector } from 'reselect';

export const tasksSelector = (state) => {
    return state.tasks.tasksList
}

export const sortedTasks = createSelector(
    [tasksSelector],
    (tasks) => {
        return tasks.slice().sort((a, b) => a.done - b.done)
    })