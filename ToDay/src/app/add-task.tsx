import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
    Alert,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

export default function AddTask() {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [time, setTime] = useState('12:00');

  async function saveTask() {
    if (!title.trim()) {
      Alert.alert('Ошибка', 'Введите название задачи');
      return;
    }

    const oldTasks = await AsyncStorage.getItem('tasks');
    const tasks = oldTasks ? JSON.parse(oldTasks) : [];

    const newTask = {
      id: Date.now().toString(),
      title: title,
      description: description,
      date: date,
      time: time,
      done: false,
    };

    tasks.push(newTask);

    await AsyncStorage.setItem('tasks', JSON.stringify(tasks));

    Alert.alert('Готово!', 'Задача сохранена');
    router.back();
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>

        <Pressable onPress={() => router.back()}>
          <Text style={styles.back}>← Назад</Text>
        </Pressable>

        <Text style={styles.heading}>
          Новая задача ✨
        </Text>

        <Text style={styles.subtitle}>
          Запланируй что-нибудь важное
        </Text>

        <Text style={styles.label}>Название задачи</Text>
        <TextInput
          style={styles.input}
          placeholder="Например, сделать домашнее задание"
          placeholderTextColor="#AAA3B5"
          value={title}
          onChangeText={setTitle}
        />

        <Text style={styles.label}>Описание</Text>
        <TextInput
          style={[styles.input, styles.description]}
          placeholder="Добавь подробности..."
          placeholderTextColor="#AAA3B5"
          value={description}
          onChangeText={setDescription}
          multiline
          textAlignVertical="top"
        />

        <Text style={styles.label}>Дата выполнения</Text>
        <TextInput
          style={styles.input}
          value={date}
          onChangeText={setDate}
          placeholder="ГГГГ-ММ-ДД"
        />

        <Text style={styles.label}>Время выполнения</Text>
        <TextInput
          style={styles.input}
          value={time}
          onChangeText={setTime}
          placeholder="ЧЧ:ММ"
        />

        <Pressable
          style={styles.saveButton}
          onPress={saveTask}
        >
          <Text style={styles.saveText}>
            Сохранить задачу
          </Text>
        </Pressable>

        <Pressable
          style={styles.cancelButton}
          onPress={() => router.back()}
        >
          <Text style={styles.cancelText}>
            Отмена
          </Text>
        </Pressable>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F5FF',
  },

  content: {
    padding: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },

  back: {
    color: '#9375D8',
    fontSize: 16,
    marginBottom: 30,
  },

  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#383044',
  },

  subtitle: {
    color: '#9990A8',
    marginTop: 8,
    marginBottom: 30,
  },

  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#514761',
    marginBottom: 10,
    marginTop: 18,
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 16,
    fontSize: 14,
    color: '#383044',
  },

  description: {
    height: 120,
  },

  saveButton: {
    backgroundColor: '#9375D8',
    padding: 18,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 35,
  },

  saveText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },

  cancelButton: {
    padding: 17,
    alignItems: 'center',
  },

  cancelText: {
    color: '#9375D8',
    fontSize: 15,
  },
});