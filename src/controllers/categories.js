

export async function categoriesList (req, res) {
    const id = parseInt(req.params.id);
  
    try {
        const product = await connection.query('SELECT * FROM produtos');
        res.status(200).send(product.rows[0]);
      } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }

  };