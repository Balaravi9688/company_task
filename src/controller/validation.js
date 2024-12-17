export const validateParam = (req, res, next) => {
    const params = req.body;
    for (const key in params) {
        if (params[key] === undefined ||
            params[key] === null ||
            params[key].toString().trim() === '') {
            return res.status(400).json({
                error: `${key} is required`
            })
        }
        next()
    }
}
