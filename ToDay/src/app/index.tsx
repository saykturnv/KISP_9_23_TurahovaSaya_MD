import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useRouter } from 'expo-router';
import { useCallback, useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function Index() {
  const router = useRouter();
const [tasks, setTasks] = useState<any[]>([]);

useFocusEffect(
  useCallback(() => {
    async function loadTasks() {
      const savedTasks = await AsyncStorage.getItem('tasks');

      if (savedTasks) {
        setTasks(JSON.parse(savedTasks));
      }
    }

    loadTasks();
  }, [])
);

  const today = new Date();

  const date = today.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    weekday: 'long',
  });

  function completeTask(id: number) {
    setTasks(
      tasks.map(task =>
        task.id === id
          ? { ...task, done: !task.done }
          : task
      )
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.logo}>ToDay ☁</Text>
        <Text style={styles.subtitle}>
          Твой день под контролем
        </Text>

        <View style={styles.dateBox}>
          <Text style={styles.dateTitle}>
            Сегодня
          </Text>
          <Text style={styles.date}>
            {date}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>
            Задачи на сегодня
          </Text>
          <Text style={styles.counter}>
            Выполнено: {tasks.filter(t => t.done).length} из {tasks.length}
          </Text>
        </View>

        {tasks.map(task => (
          <View style={styles.task} key={task.id}>
            <Pressable
              style={styles.taskInfo}
              onPress={() => completeTask(task.id)}
            >
              <View style={[
                styles.circle,
                task.done && styles.circleDone
              ]}>
                {task.done && (
                  <Text style={styles.check}>✓</Text>
                )}
              </View>

              <View style={{ flex: 1 }}>
                <Text style={[
                  styles.taskTitle,
                  task.done && styles.completed
                ]}>
                  {task.title}
                </Text>
                <Text style={styles.taskTime}>
                  {task.time}
                </Text>
              </View>
            </Pressable>
          </View>
        ))}

        <Pressable
            style={styles.addButton}
            onPress={() => router.push('/add-task' as any)}
          >
          <Text style={styles.addText}>
            + Добавить задачу
          </Text>
        </Pressable>

        <Pressable
          style={styles.allButton}
          onPress={() => router.push('/tasks' as any)}
        >
          <Text style={styles.allText}>
            Все мои задачи →
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
    paddingTop: 65,
    paddingBottom: 40,
  },

  logo: {
    fontSize: 36,
    fontWeight: '900',
    color: '#9375D8',
    letterSpacing: -1,
  },

  subtitle: {
    fontSize: 14,
    color: '#9990A8',
    marginTop: 5,
  },

  dateBox: {
    backgroundColor: '#EAE2FF',
    padding: 24,
    borderRadius: 25,
    marginTop: 30,
  },

  dateTitle: {
    fontSize: 16,
    color: '#8064BB',
  },

  date: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#634A9B',
    marginTop: 8,
    textTransform: 'capitalize',
  },

  section: {
    marginTop: 35,
    marginBottom: 15,
  },

  heading: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#383044',
  },

  counter: {
    color: '#A39BAF',
    marginTop: 6,
  },

  task: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 17,
    marginBottom: 12,
  },

  taskInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
  },

  circle: {
    width: 25,
    height: 25,
    borderRadius: 13,
    borderWidth: 2,
    borderColor: '#B9A5E8',
    alignItems: 'center',
    justifyContent: 'center',
    },

  circleDone: {
    backgroundColor: '#9375D8',
    borderColor: '#9375D8',
  },

  check: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  taskTitle: {
    fontSize: 15,
    color: '#383044',
    fontWeight: '600',
  },

  completed: {
    textDecorationLine: 'line-through',
    color: '#AAA3B5',
  },

  taskTime: {
    fontSize: 12,
    color: '#A39BAF',
    marginTop: 5,
  },

  addButton: {
    backgroundColor: '#9375D8',
    padding: 18,
    borderRadius: 18,
    alignItems: 'center',
    marginTop: 20,
  },

  addText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  allButton: {
    padding: 18,
    alignItems: 'center',
    marginTop: 5,
  },

  allText: {
    color: '#9375D8',
    fontWeight: 'bold',
    fontSize: 15,
  },
});