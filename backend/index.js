const express = require("express");
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoutes.js");

const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const { HoldingModel } = require("./model/HoldingModel");
const { OrderModel } = require("./model/OrderModel");
const { PositionModel } = require("./model/PositionModel");
const { userVerification } = require("./Middlewares/AuthMiddleware.js");

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));

app.use(bodyParser.json());
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());

app.use("/", authRoute);

// app.get("/addHoldings", async (req, res) => {
//   let temp = [
//     {
//       name: "BHARTIARTL",
//       qty: 2,
//       avg: 538.05,
//       price: 541.15,
//       net: "+0.58%",
//       day: "+2.99%",
//     },
//     {
//       name: "HDFCBANK",
//       qty: 2,
//       avg: 1383.4,
//       price: 1522.35,
//       net: "+10.04%",
//       day: "+0.11%",
//     },
//     {
//       name: "HINDUNILVR",
//       qty: 1,
//       avg: 2335.85,
//       price: 2417.4,
//       net: "+3.49%",
//       day: "+0.21%",
//     },
//     {
//       name: "INFY",
//       qty: 1,
//       avg: 1350.5,
//       price: 1555.45,
//       net: "+15.18%",
//       day: "-1.60%",
//       isLoss: true,
//     },
//     {
//       name: "ITC",
//       qty: 5,
//       avg: 202.0,
//       price: 207.9,
//       net: "+2.92%",
//       day: "+0.80%",
//     },
//     {
//       name: "KPITTECH",
//       qty: 5,
//       avg: 250.3,
//       price: 266.45,
//       net: "+6.45%",
//       day: "+3.54%",
//     },
//     {
//       name: "M&M",
//       qty: 2,
//       avg: 809.9,
//       price: 779.8,
//       net: "-3.72%",
//       day: "-0.01%",
//       isLoss: true,
//     },
//     {
//       name: "RELIANCE",
//       qty: 1,
//       avg: 2193.7,
//       price: 2112.4,
//       net: "-3.71%",
//       day: "+1.44%",
//     },
//     {
//       name: "SBIN",
//       qty: 4,
//       avg: 324.35,
//       price: 430.2,
//       net: "+32.63%",
//       day: "-0.34%",
//       isLoss: true,
//     },
//     {
//       name: "SGBMAY29",
//       qty: 2,
//       avg: 4727.0,
//       price: 4719.0,
//       net: "-0.17%",
//       day: "+0.15%",
//     },
//     {
//       name: "TATAPOWER",
//       qty: 5,
//       avg: 104.2,
//       price: 124.15,
//       net: "+19.15%",
//       day: "-0.24%",
//       isLoss: true,
//     },
//     {
//       name: "TCS",
//       qty: 1,
//       avg: 3041.7,
//       price: 3194.8,
//       net: "+5.03%",
//       day: "-0.25%",
//       isLoss: true,
//     },
//     {
//       name: "WIPRO",
//       qty: 4,
//       avg: 489.3,
//       price: 577.75,
//       net: "+18.08%",
//       day: "+0.32%",
//     },
//   ];

//   temp.forEach((item) => {
//     let newHolding = HoldingModel({
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//     });

//     newHolding.save();
//   });

//   res.send("Done.....!!!!");
// });

// app.get("/addOrders", async (req, res) => {
//   let tempOrders = [
//     {
//       name: "INFY",
//       qty: 25,
//       price: 1555.45,
//       mode: "SELL",
//     },
//     {
//       name: "ONGC",
//       qty: 100,
//       price: 116.8,
//       mode: "SELL",
//     },
//     {
//       name: "TCS",
//       qty: 15,
//       price: 3194.8,
//       mode: "SELL",
//     },
//     {
//       name: "KPITTECH",
//       qty: 60,
//       price: 266.45,
//       mode: "BUY",
//     },
//     {
//       name: "QUICKHEAL",
//       qty: 40,
//       price: 308.55,
//       mode: "SELL",
//     },
//     {
//       name: "WIPRO",
//       qty: 80,
//       price: 577.75,
//       mode: "BUY",
//     },
//     {
//       name: "M&M",
//       qty: 30,
//       price: 779.8,
//       mode: "SELL",
//     },
//     {
//       name: "RELIANCE",
//       qty: 10,
//       price: 2112.4,
//       mode: "BUY",
//     },
//     {
//       name: "HUL",
//       qty: 50,
//       price: 512.4,
//       mode: "BUY",
//     },
//   ];

//   tempOrders.forEach((item) => {
//     let newOrder = new OrderModel({
//       name: item.name,
//       qty: item.qty,
//       price: item.price,
//       mode: item.mode,
//     });

//     newOrder.save();
//   });

//   res.send("All Temp Order's are saved.");
// });

// app.get("/addPositions", async (req, res) => {
//   let tempPositions = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];

//   tempPositions.forEach((item) => {
//     let newPosition = new PositionModel({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     });

//     newPosition.save();
//   });

//   res.send("All temp Position's are Saved");
// });

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingModel.find({});
  res.send(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionModel.find({});
  res.send(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrderModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  const savedOrder = await newOrder.save();
  res.send("New Order is Saved", savedOrder);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}`);
});
