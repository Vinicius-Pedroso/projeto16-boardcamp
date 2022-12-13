import { connection } from "../database.js";
import dayjs from 'dayjs'

export async function rentalsCreate (req, res) {
  const {customerId, gameId, daysRented} = req.body;

  try {
    const returnDate = null
    const delayFee = null
    const gamePrice = await connection.query(`SELECT pricePerDay FROM games WHERE ${gameId}`)
    const originalPrice = gamePrice*daysRented
    const rentDate = dayjs().format('YYYY/MM/DD')
    
    await connection.query(`INSERT INTO rentals (name,image,stockTotal,categoryId,pricePerDay) VALUES (${{name, image, stockTotal, categoryId, pricePerDay}})`);
    return res.status(201);
  } catch (err) {
    console.log(err);
    return res.status(500);
  }
};
