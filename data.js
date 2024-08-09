import express from "express";
const router = express.Router();

const prices = [
    {
        id: 1,
        quantity: "1 gram",
        value: "22kt",
        amount: 6890,
    },
    {
        id: 2,
        quantity: "1 gram",
        value: "24kt",
        amount: 7230,
    },
    {
        id: 3,
        quantity: "10 grams",
        value: "22kt",
        amount: 68900,
    },
    {
        id: 4,
        quantity: "10 grams",
        value: "24kt",
        amount: 72300,
    },
    {
        id: 5,
        quantity: "100 grams",
        value: "24kt",
        amount: 8600,
    },
    {
        id: 6,
        quantity: "1 kilo",
        value: "24kt",
        amount: 86000,
    },
    // {
    //     id: 7,
    //     quantity: "0 gram",
    //     value: "12kt",
    //     amount: 89999, 
    // }
]

router.use(express.json());

router.get("/", (req, res) => {
    res.json(prices);
})

router.get("/:id", (req, res) => {
    const { id } = req.params;
    const found_price = prices.find((price) => price.id == id);

    res.json(found_price);
})

router.patch("/:id", (req, res) => {
    const { id } = req.params;
    const { quantity, value, amount } = req.body;

    const price = prices.find((price) => price.id == id);

    if (quantity) price.quantity = quantity;
    if (value) price.value = value;
    if (amount) price.amount = amount;

    res.json(id);
    res.send(`data with id: ${id} is now updated`);
})

// router.delete("/:id", (req, res) => {
//     const { id } = req.params;
//     prices = prices.filter((price) => price.id !== id);

//     res.send(`${id} is deleted successfully`);
// })

export default router;