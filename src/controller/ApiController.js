import bodyParser from "body-parser";
import pool from "../config/connectDB";
let getAllUers = async (req, res) => {

    const [row] = await pool.execute('SELECT * FROM day');
    return res.status(200).json({
        row
    })
}
let creata = async (req, res) => {
    let { des } = req.body;
    if (!des) {
        return res.status(200).json({
            message: 'loi roi do ngu'
        })
    }

    await pool.execute('INSERT INTO day (des) VALUES (?)', [des])
    return res.status(200).json({
        message: 'ok'
    })

}
let remove = async (req, res) => {
    let deleteU = req.params.id;
    await pool.execute('DELETE FROM day WHERE id = ?', [deleteU]);
    return res.status(200).json({
        message: 'ok'
    })
}
let update = async (req, res) => {
    let id = req.params.id;
    let { des } = req.body;
    await pool.execute('UPDATE day SET des = ? WHERE id = ?;', [des, id]);
    return res.status(200).json({
        message: 'ok'
    })
}
module.exports = {
    getAllUers,
    creata,
    update,
    remove
}