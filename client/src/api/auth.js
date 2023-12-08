import axiosSeure from "./myaxios"


export const saveUser = async user => {
    const currentUser = {
        name: user.displayName,
        email:user.email,
        role: "guest",
        startus:"verified"
    }
    const {data} = await axiosSeure.put(`/users/${user.email}`, currentUser)
    return data
}

export const getToken  = async email => {
    const {data} = await axiosSeure.post(`/jwt`, {email})
    return data

}
