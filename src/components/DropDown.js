import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

const CustomDropdown = ({
  items,
  isOpen,
  toggleDropdown,
  selectItem,
  selectedItem,
}) => {
  const screenHeight = Dimensions.get('window').height;
  const dropdownHeight = Math.min(items.length * 40, screenHeight * 0.18); // Adjust as needed

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.dropdownButton} onPress={toggleDropdown}>
        <Text style={styles.buttonText}>
          {selectedItem || 'Select an item'}
        </Text>
      </TouchableOpacity>
      {isOpen && (
        <View style={[styles.dropdownList, {height: dropdownHeight}]}>
          <FlatList
            data={items}
            renderItem={({item, index}) => (
              <TouchableOpacity
                key={index}
                style={styles.dropdownItem}
                onPress={() => selectItem(item)}>
                <Text style={styles.itemText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderColor: '#0048908F',
    height: 50,
  },
  dropdownButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
  },
  dropdownList: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginTop: 4,
    elevation: 2,
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
    color: '#000',
  },
});

export default CustomDropdown;
