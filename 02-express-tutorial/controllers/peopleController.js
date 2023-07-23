const { people } = require('../data');

const addPerson = (req, res) => {
    const { name } = req.body;
    if (!name) {
        res.status(400).json({ success: false, message: "Please provide a name" });
    }
    people.push({ id: people.length, name: req.body.name });
    res.status(201).json({ success: true, name: req.body.name });
};

const getPeople = (req, res) => {
    res.json(people)
};

const personByID = (req, res) => {
    const { id } = req.params;
    const person = people.find((person) => person.id === parseInt(id));

    if (person) {
        return res.status(200).json({ success: true, name: person.name});
    } else {
        return res.status(404).json({ success: false, message: `No person with id #${id} was found`});
    }
};

const updatePersonByID = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const person = people.find((person) => person.id === parseInt(id));

    if (person) {
        const newEntry = people.map((person) => {
            if (person.id === parseInt(id)) {
                person.name = name;
            }
            return person;
        })
        return res.status(200).json({ success: true, data: newEntry});
    } else {
        return res.status(404).json({ success: false, message: `No person with id #${id} was found`});
    }
};

const deletePersonByID = (req, res) => {
    const { id } = req.params;
    const person = people.find((person) => person.id === parseInt(id));
    
    if (person) {
    const newPeople = people.filter(
        (person) => person.id !== parseInt(id)
    )
    return res.status(200).json({ success: true, data: newPeople })
    
  } else {
    return res.status(404).json({ success: false, msg: `No person with id ${id}` })
}
};

module.exports = {
  addPerson,
  getPeople,
  personByID,
  updatePersonByID,
  deletePersonByID,
};