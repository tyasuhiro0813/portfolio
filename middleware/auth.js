export default function({ store, route, redirect }){
    const path = route.name
    console.log(path)

    if(path === "login"){
        return
    }
    else {
        const userId = store.state.uid

        if(userId === ""){
            alert("ログインしてください。")
            return redirect("/login")
        }
    }
}

