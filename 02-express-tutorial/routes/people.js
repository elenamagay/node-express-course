const express = require("express");
const router = express.Router();

const {
    addPerson,
    getPeople,
    personByID,
    updatePersonByID,
    deletePersonByID,
} = require("../controllers/people");

router.route("/")
    .get(getPeople)
    .post(addPerson);

router.route("/:id")
    .get(personByID)
    .put(updatePersonByID)
    .delete(deletePersonByID);

module.exports = router;
