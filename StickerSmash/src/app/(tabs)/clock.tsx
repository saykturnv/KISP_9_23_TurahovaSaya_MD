import { View, Text, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';

export default function ClockScreen() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.container}>

      <Text style={styles.time}>
        {time.toLocaleTimeString('ru-RU')}
      </Text>

      <Text style={styles.date}>
        {time.toLocaleDateString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })}
      </Text>

      <Text style={styles.year}>
        {time.getFullYear()} год
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F1EB',
  },

  title: {
    fontSize: 20,
    color: '#888',
    marginBottom: 15,
  },

  time: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#574B42',
  },

  date: {
    fontSize: 25,
    marginTop: 15,
    color: '#574B42',
  },

  year: {
    fontSize: 20,
    marginTop: 8,
    color: '#888',
  },
});
