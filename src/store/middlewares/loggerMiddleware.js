const loggerMiddleware = (store) => {
    return (next) => {
        return (action) => {
            console.group(action.type)
            console.log("action", action)
            console.log("previus state", store.getState())
            const result = next(action)
            console.log("previus state", store.getState())
            console.groupEnd(action.type)
            return result;
        }
    }
}

export default loggerMiddleware;