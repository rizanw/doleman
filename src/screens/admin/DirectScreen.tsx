import { RouteProp } from "@react-navigation/native";
import React from "react";
import { Alert, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Button from "../../components/Button";
import { styles } from "../../resources/styles";
import { User } from "../../store/auth/types";
import { increamentStatistic } from "../../store/wisata/actions";

interface Props {
  route: RouteProp<any, any>;
  auth: User;
  incPengunjung: (id: string | undefined) => any;
}

class DirectScreen extends React.Component<Props> {
  addPengunjung() {
    const req: any = this.props.incPengunjung(this.props.auth.adminOn);
    req.then((data: any) => this.props.route.params?.onRefresh(data));
    Alert.alert("Berhasil!", "Pengunjung ditambahkan.");
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{ flexDirection: "row", marginHorizontal: 12, marginTop: 24 }}
        >
          <Button
            label="Tambah Pengunjung"
            onPress={() => this.addPengunjung()}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  incPengunjung: bindActionCreators(increamentStatistic, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(DirectScreen);
