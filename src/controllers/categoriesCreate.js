

export async function categoriesCreate (req, res) {
    const name = req.body.name;
  
    try {
        const createCategories = await connection.query(`INSERT INTO categories (name) VALUES (${name})`);
        res.status(200).send(createCategories);
      } catch (err) {
        console.log(err);
        return res.sendStatus(500);
    }

  };