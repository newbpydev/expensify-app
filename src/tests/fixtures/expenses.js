import moment from "moment";

export default [
  {
    id: "1",
    description: "rent",
    note: "it is expensive",
    amount: 199900,
    createdAt: 0,
  },
  {
    id: "2",
    description: "gas",
    note: "it is okay",
    amount: 1900,
    createdAt: moment(0).subtract(4, "days").valueOf(),
  },
  {
    id: "3",
    description: "car",
    note: "it is expensive",
    amount: 45000,
    createdAt: moment(0).add(4, "days").valueOf(),
  },
  {
    id: "4",
    description: "energy",
    note: "it is super expensive",
    amount: 66798,
    createdAt: moment(0).add(4, "months").valueOf(),
  },
];