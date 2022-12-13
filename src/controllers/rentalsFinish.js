import { connection } from "../database.js";

export async function rentalsUpdate (req, res) {
    const id = req.params.id;
    let delayFee = null
  try {
    const checkId = await connection.query(`SELECT returnDate FROM rentals WHERE ${id}`)
    if (!checkId){
        return res.status(404)
    }
    if (returnDate != null){
        return res.status(400)
    }
    const actualDate = dayjs().format('YYYY/MM/DD')
    const getRentDate = await connection.query(`SELECT rentDate FROM rentals WHERE ${id}`)
    const getGamePrice = await connection.query(`SELECT gamePrice FROM rentals WHERE ${id}`)
    if (actualDate > getRentDate){
        delayFee = (actualDate - getRentDate)*getGamePrice
    }
    await connection.query(`UPDATE rentals SET returnDate=${actualDate} set delayFee=${delayFee}WHERE ${id}`);
    return res.status(201);
  } catch (err) {
    console.log(err);
    return res.status(500);
  }
};