import { connection } from "../database.js";
import dayjs from 'dayjs'

export async function rentalsCreate (req, res) {
  const {customerId, gameId, daysRented} = req.body;

  try {
    const useNull = null
    const gamePrice = await connection.query(`SELECT pricePerDay FROM games WHERE ${gameId}`)
    const originalPrice = gamePrice*daysRented
    const rentDate = dayjs().format('YYYY/MM/DD')
    
    await connection.query(`INSERT INTO rentals (customerId, gameId, rentDate, daysRented, returnDate, originalPrice, delayFee) VALUES (${{customerId, gameId, rentDate, daysRented, pricePerDay, useNull, originalPrice, useNull}})`);
    return res.status(201);
  } catch (err) {
    console.log(err);
    return res.status(500);
  }
};
