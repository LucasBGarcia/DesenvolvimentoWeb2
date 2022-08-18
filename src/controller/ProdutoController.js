module.exports = {
    index(req, res) {
        try {
            return res.status(200).json('produtos');
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },
}

