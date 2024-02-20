const fs = require('fs');
const bcrypt = require('bcrypt');

const handleLogin = async (req, res) => {
    // read database file
    const content = fs.readFileSync('src/model/users.json', 'utf8');
    const parsedContent = JSON.parse(content);

    const { user, pwd } = req.body;

    // if user is missing the username or password imput return error
    if (!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required.' });
    
    // look for user in the database
    const foundUser = parsedContent.find(person => person.username === user);
    if (!foundUser) return res.sendStatus(401); // Unauthorized - if no user is found

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