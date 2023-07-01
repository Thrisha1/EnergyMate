import React from 'react';
import { View } from 'react-native';
import * as shape from 'd3-shape';

const Chart = ({ data, labels }) => {
  return (
    <View style={{ height: 300 }}>
      <LineChart
        style={{ flex: 1 }}
        data={data}
        contentInset={{ top: 20, bottom: 20 }}
        curve={shape.curveNatural}
        svg={{ stroke: 'rgb(134, 65, 244)' }}
      >
        <Grid />
      </LineChart>
    </View>
  );
};

export default Chart;
