import React, { Component } from "react";

import { PricingCard } from "react-native-elements";

export default class rigester1 extends React.Component {
  render() {
    return (
      <PricingCard
        marginTop="40%"
        color="#4f9deb"
        title="فقط"
        price="$100"
        info={["مستخدم واحد", "دعم عام", "جميع الميزات الاساسية"]}
        button={{ title: "تسجيل", icon: "flight-takeoff" }}
      />
    );
  }
}
