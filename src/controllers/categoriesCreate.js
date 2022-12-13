import {connection} from "../database.js";

export async function categoriesCreate (req, res) {
    const name = req.body.name;
  
    try {
        const createCategories = await connection.query(`INSERT INTO categories (name) VALUES (${name})`);
        return res.status(201);
    } catch (err) {
        console.log(err);
        return res.status(500);
    }

};