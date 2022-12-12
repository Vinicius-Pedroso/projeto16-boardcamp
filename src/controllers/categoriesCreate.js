

export async function categoriesCreate (req, res) {
    const name = req.body.name;
  
    try {
        const product = await connection.query('INSERT name INTO categories');
        res.status(200).send(product.rows[0]);
      } catch (err) {
        console.log(err);
        return res.sendStatus(500);
    }

  };