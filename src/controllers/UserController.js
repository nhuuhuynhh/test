const newUser = async(req, res) => {
    return res.render("newUser", {data: {title: "Tao tai khoan"}})
}

const listUser = async(req, res) => {
    return res.render("listUser", {data: {title: "Danh sach tai khoan"}})
}
const detailUser = async(req, res) => {
    return res.render("detailUser", {data: {title: "Chi tiet tai khoan"}})
}

module.exports = {
    newUser,
    listUser,
    detailUser
}