const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/thoughtRiver", {useNewUrlParser:true});

const ContractSchema = new mongoose.Schema({
  data: Object,
  relationships: Object,
})

const Contract = mongoose.model("Contract", ContractSchema);

// const contract1 = new Contract({
//   data: { type: "contracts", id: "dc89ff49-8449-11e7-ac1d-3c52820efd20", attributes: { name: "Contract Name" }},
//   relationships: { paragraphs: { links: { self: "\/contracts\/dc89ff49-8449-11e7-ac1d-3c52820efd20\/paragraphs" }}}
// })
// contract.save();

app.get("/contracts/:id", (req, res) => {
  const id = req.params.id;
  Contract.findOne({_id: id}, (err, contract) => {
    if(contract){
      res.json(contract);
    } else {
      res.json(contract);
    }
  })

})

app.get("/contracts/:contractId/paragraphs?page1&pageSize=50", (req, res) => {

})


app.listen(3000, () => {
  console.log("listening on *:3000");
})
