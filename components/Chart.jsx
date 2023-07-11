// import React from "react";
// import { LineChart } from "react-native-chart-kit";
// import { View,Text,Dimensions } from "react-native";

// const Chart = ({ Month_data }) => {
//   return (
//     <View style={{ height: 250 }}>
//       <View>
//         <LineChart
//           data={{
//             labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//             datasets: [
//               {
//                 data: Month_data,
//               },
//             ],
//           }}
//           width={Dimensions.get("window").width} // from react-native
//           height={250}
//           yAxisLabel=""
//           yAxisInterval={1} // optional, defaults to 1
//           chartConfig={{
//             backgroundColor: "",
//             backgroundGradientFrom: "#4C7380",
//             backgroundGradientTo: "#4C7380",
//             decimalPlaces: 2, // optional, defaults to 2dp
//             color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//             labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//             style: {
//               borderRadius: 16,
//             },
//             propsForDots: {
//               r: "6",
//               strokeWidth: "2",
//               stroke: "#000",
//             },
//           }}
//           bezier
//           style={{
//             marginVertical: 1,
//             borderRadius: 16,
//           }}
//         />
//       </View>
//     </View>
//   );
// };

// export default Chart;
