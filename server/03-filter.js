const words = ["spray", "elites", "limit", "apple", "exuberant"]

const search = (query) => {
    return words.filter((item) => {
        return item.includes(query)
    });
} 

console.log(search('sp'))




const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ]

  const filteredOrders = orders.filter((order) => order.delivered)

  console.log(filteredOrders);



function solution(array) {
	return array.filter((item) => item.length>=4) 
}; 
  
console.log(solution(['amor', 'sol', 'piedra', 'día']))