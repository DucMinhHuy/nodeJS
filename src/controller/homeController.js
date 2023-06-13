import res from "express/lib/response";
import pool from "../config/connectDB";
import req from "express/lib/request";




let getHomepage = async (req, res) => {
    let data = [];
    const [row] = await pool.execute('SELECT * FROM day');
    return res.render('test/index.ejs', { dataUser: row });

}
let getAbout = (req, res) => {
    return res.send(`I'm MinhHuy`)
}
let getDetail = async (req, res) => {
    let id = req.params.id;
    let [userID] = await pool.execute('SELECT * FROM day where id = ? ', [id]);
    return res.send(JSON.stringify(userID));
}
let create = async (req, res) => {
    let { des } = req.body;
    await pool.execute('INSERT INTO day (des) VALUES (?)', [des])
    return res.redirect('/')
}
let deleteUser = async (req, res) => {
    let deleteU = req.body.id;
    await pool.execute('DELETE FROM day WHERE id = ?', [deleteU]);
    return res.redirect('/');
}
let updateUser = async (req, res) => {
    let ids = req.params.id;
    let [userID] = await pool.execute('SELECT * FROM day where id = ? ', [ids]);
    return res.render('test/update.ejs', { dataUser: userID[0] })
}
let update = async (req, res) => {
    let { des, id } = req.body;
    await pool.execute('UPDATE day SET des = ? WHERE id = ?;', [des, id]);
    return res.redirect('/');
}
module.exports = {
    getHomepage,
    getAbout,
    getDetail,
    create,
    deleteUser,
    updateUser,
    update
}