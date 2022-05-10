const express = require("express");
const router = express.Router();
//controllers
const {
  createPerson,
  deletePerson,
  updatePerson,
  getPeople,
} = require("../controllers/people");

// GET
// router.get("/", getPeople);

// // POST
// router.post("/", createPerson);

// // PUT
// router.put("/:id", updatePerson);

// // DELETE
// router.delete("/:id", deletePerson);

// another shorter way

router.route("/").get(getPeople).post(createPerson);
router.route("/:id").put(updatePerson).delete(deletePerson);

module.exports = router;
