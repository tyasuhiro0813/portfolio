export default function({ store, route, redirect }){
    const path = route.name

    if(path === "index" || path === "login"){
        return
    }
    else {
        const userId = store.state.uid
        const storageID = sessionStorage.getItem('portfolioID')
        const userName = sessionStorage.getItem('portfolioUser')

        if(userId === "" && storageID){
            store.commit("setUid", storageID)
            store.commit("setUname", userName)
        }

        if(userId === "" && storageID === null){
            return redirect("/")
        }
    }
}


