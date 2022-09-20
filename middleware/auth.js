export default function({ store, route, redirect }){
    const path = route.name
    console.log(path)

    if(path === "login"){
        return
    }
    else {
        const userId = store.state.uid
        const storageID = sessionStorage.getItem('ID')

        if(userId === "" && storageID === null){
            alert("ログインしてください。")
            return redirect("/login")
        }
    }
}


