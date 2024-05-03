export const GetRoutes = () => {
    const allRoutes = (routes: any) => {
        let arr = []
        for (let key in routes) {
            arr.push(...routes[key])
        }
        
        return arr
    
    }

    return { allRoutes }
}