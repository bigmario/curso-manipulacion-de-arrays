const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];

  const find = products.find((item) => item.id ==='🍕')
  const find2 = products.findIndex((item) => item.price ===355)

  console.log(find.name);
  console.log(find2);