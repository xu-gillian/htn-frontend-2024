const fs = require('fs');
const bcrypt = require('bcrypt');

const handleLogin = async (req, res) => {
    const content = fs.readFileSync('server/model/users.json', 'utf8');
    const parsedContent = JSON.parse(content);

    const { user, pwd } = req.body;
    if (!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required.' });
    
    const foundUser = parsedContent.find(person => person.username === user);
    if (!foundUser) return res.sendStatus(401); // Unauthorized

    // check if the password matches
    const match = await bcrypt.compare(pwd, foundUser.password);
    if (match) {
        //create JWT
        res.json({'success': `${foundUser.first_name + ' ' + foundUser.last_name} is logged in!`});
    } else {
        res.sendStatus(401);
    }
}

module.exports = { handleLogin };