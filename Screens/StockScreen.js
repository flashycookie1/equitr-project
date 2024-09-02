import {
  View,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

import StockNameUp, { StockNameDown } from "../components/StockName";
import Ticker from "@/components/Ticker";

export default function StockScreen() {
  
  const onPress = () => {
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bottomContainer}>
        <StockNameDown stockName="Alphabet Class A" stockPrice="$182.27" />
        <Text style={{
          color: "#F1EFE7",
          textAlign: "left",
          paddingRight: "65%",
        }}>Stock Price</Text>
        <View style={styles.stockViewer}>
          <View style={styles.tickerSec}>
            <Ticker name={"GOOGL"} percent={-1.21}></Ticker>
              <TouchableOpacity onPress={onPress}
              >
                <Text
                style={{
                color: "#F1EFE7",
                }}>D</Text>
              </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#080705",
    width: "100%",
  },
  bottomContainer: {
    position: "absolute",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 400,
    borderTopLeftRadius: "30",
    borderTopRightRadius: "30",
    backgroundColor: "#17150E",
  },
  stockViewer: {
    backgroundColor: "#201E19",
    margin: 15,
    width: "85%",
    height: "50%",
    borderRadius: 13,
    justifyContent: "flex-end",
  },
  tickerSec: {
    flex: 0,
    flexDirection: "row",
    width: "100%",
    height: 25,
    margin: 20,
  },
});