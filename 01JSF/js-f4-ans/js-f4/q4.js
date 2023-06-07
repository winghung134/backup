// Cont'd of the last question, how do you get information from the below data?

let data = {
  routes: [
    {
      overnightRoute: 0,
      routeId: "2",
      routeName_c: "大澳 > 梅窩碼頭",
      routeName_e: "Tai O > Mui Wo Ferry Pier",
      routeName_s: "大澳 > 梅窝码头",
      routeNo: "1",
      specialRoute: 0,
    },
    {
      overnightRoute: 0,
      routeId: "1",
      routeName_c: "梅窩碼頭 > 大澳",
      routeName_e: "Mui Wo Ferry Pier > Tai O",
      routeName_s: "梅窝码头 > 大澳",
      routeNo: "1",
      specialRoute: 0,
    },
    {
      overnightRoute: 0,
      routeId: "3",
      routeName_c: "紅磡 (紅鸞道)  > 昂坪",
      routeName_e: "Hung Hom (Hung Luen Road)  > Ngong Ping",
      routeName_s: "红磡 (红鸾道)  > 昂坪",
      routeNo: "1R",
      specialRoute: 0,
    },
  ],
};

//1. all the route numbers
for (let i = 0; i < data.routes.length; i++) {
  console.log(data.routes[i].routeNo);
}

// for .. of
// for (let route of data.routes) {
//   console.log(route.routeName_c);
// }

//2. all the terminal names
for (let i = 0; i < data.routes.length; i++) {
  console.log(data.routes[i].routeName_c);
}

// bonus:
// map
let mapRouteNumbers = data.routes.map(function (route) {
  return route.routeNo;
});
console.log(mapRouteNumbers);

//reduce

// [ '1', '1', '1R' ]
let reduceRouteNumbers = data.routes.reduce(function (current, next) {
  current.push(next.routeNo);
  return current;
});
console.log(reduceRouteNumbers);
