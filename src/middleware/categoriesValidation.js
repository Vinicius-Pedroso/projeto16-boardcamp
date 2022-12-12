
export async function categoriesValidation(req, res, next) {
    const name = req.body.name;

    if (name.length === 0){
        return res.sendStatus(400)
    }

    try {
        const nameCheck = await connection.query('SELECT name FROM categories');
        if(nameCheck){
            return res.sendStatus(409)
        }
    } catch (err) {
        console.log(err);
        return res.sendStatus(500);
    }

    next();
}