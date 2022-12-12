

export async function categoriesList (req, res) {
  
    try {
        const product = await connection.query('SELECT * FROM categories');
        res.status(200).send(product.rows[0]);
      } catch (err) {
        console.log(err);
        return res.sendStatus(500);
    }

  };