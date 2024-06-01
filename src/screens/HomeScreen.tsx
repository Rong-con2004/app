import React from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {COLORS, SPACING} from '../theme/theme';
import Entypo from 'react-native-vector-icons/Entypo';
import CustomIcon from '../components/CustomIcon';
import Feather from 'react-native-vector-icons/Feather';

const HomeScreen = () => {
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryWhiteHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        {/* App Header */}
        <View style={styles.HeaderContainer}>
          <Entypo name="menu" size={30} color={COLORS.primaryBlackHex} />
          <Feather
            name="shopping-cart"
            size={26}
            color={COLORS.primaryBlackHex}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryWhiteHex,
  },
  ScrollViewFlex: {
    flexGrow: 1,
    padding: SPACING.space_10,
  },
  HeaderContainer: {
    padding: SPACING.space_10, 
    marginRight: SPACING.space_10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default HomeScreen;
