const auth = (req, res, next) => {
    const { name } = req.cookies;
    if (!name) {
        return res.status(401).json({ success: false, message: "Access is unauthorized due to invalid or missing credentials" });
    }
    req.user = name;
    next();
};

const logon = (req, res) => {
    const { name } = req.body;
    if (name) {
        res.cookie('name', name);
        res.status(201).json({ success: true, message: `Welcome ${name}`})
    } else {
        res.status(400).json({ success: false, message: "Name is not present"})
    }
};

const logoff = (req, res) => {
    res.clearCookie('name');
    res.status(200).json({ success: true, message: "The user is logged off"})
};

const test = (req, res) => {
    res.status(200).json({ success: true, message: `Welcome ${req.user}`})
};

module.exports = { auth, logon, logoff, test };