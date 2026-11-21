import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useRouter } from 'expo-router';
import { useCallback, useState } from 'react';
import {
  Alert,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type Task = {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  done: boolean;
};

export default function Tasks() {
  const router = useRouter();

  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState('Все');

  // Загружаем задачи из памяти телефона
  useFocusEffect(
    useCallback(() => {
      async function loadTasks() {
        const saved = await AsyncStorage.getItem('tasks');
        setTasks(saved ? JSON.parse(saved) : []);
      }

      loadTasks();
    }, [])
  );

  // Изменяем статус задачи
  async function toggleTask(id: string) {
    const updatedTasks = tasks.map(task =>
      task.id === id
        ? { ...task, done: !task.done }
        : task
    );

  

    setTasks(updatedTasks);

    await AsyncStorage.setItem(
      'tasks',
      JSON.stringify(updatedTasks)
    );
  }

  // Удаление задачи
async function deleteTask(id: string) {

  // Удаляем задачу
  async function remove() {
    const updatedTasks = tasks.filter(
      task => task.id !== id
    );

    setTasks(updatedTasks);

    await AsyncStorage.setItem(
      'tasks',
      JSON.stringify(updatedTasks)
    );
  }

  // Если приложение открыто в браузере
  if (Platform.OS === 'web') {
    const answer = window.confirm(
      'Вы действительно хотите удалить задачу?'
    );

    if (answer) {
      await remove();
    }
  }

  // Если приложение открыто на телефоне
  else {
    Alert.alert(
      'Удаление задачи',
      'Вы действительно хотите удалить эту задачу?',
      [
        {
          text: 'Отмена',
          style: 'cancel',
        },
        {
          text: 'Удалить',
          style: 'destructive',
          onPress: remove,
        },
      ]
    );
  }
}
  // Фильтруем задачи
  const filteredTasks = tasks.filter(task => {
    if (filter === 'Выполненные') return task.done;
    if (filter === 'Невыполненные') return !task.done;
    return true;
  });

  // Разделяем задачи по датам
  const groupedTasks = filteredTasks.reduce(
    (groups: Record<string, Task[]>, task) => {
      if (!groups[task.date]) {
        groups[task.date] = [];
      }

      groups[task.date].push(task);
      return groups;
    },
    {}
  );

  // Красиво отображаем дату
  function formatDate(date: string) {
    const parts = date.split('-');

    if (parts.length !== 3) return date;

    return new Date(
      Number(parts[0]),
      Number(parts[1]) - 1,
      Number(parts[2])
    ).toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>

        <Pressable onPress={() => router.back()}>
          <Text style={styles.back}>← Назад</Text>
        </Pressable>

        <Text style={styles.heading}>
          Все задачи ✨
        </Text>

        <Text style={styles.subtitle}>
          Все твои планы в одном месте
        </Text>

        {/* Фильтры */}
        <View style={styles.filters}>
          {['Все', 'Невыполненные', 'Выполненные'].map(item => (
            <Pressable
              key={item}
              style={[
                styles.filterButton,
                filter === item && styles.activeFilter,
              ]}
              onPress={() => setFilter(item)}
            >
              <Text style={[
                styles.filterText,
                filter === item && styles.activeFilterText,
              ]}>
                {item}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Задачи по датам */}
        {Object.keys(groupedTasks)
          .sort()
          .map(date => (
            <View key={date}>

              <Text style={styles.dateTitle}>
                {formatDate(date)}
              </Text>

              {groupedTasks[date].map(task => (
                <View style={styles.taskCard} key={task.id}>

                  <Pressable
                    style={styles.taskRow}
                    onPress={() => toggleTask(task.id)}
                  >
                    <View style={[
                      styles.circle,
                      task.done && styles.circleDone,
                    ]}>
                      {task.done && (
                        <Text style={styles.check}>✓</Text>
                      )}
                    </View>

                    <View style={{ flex: 1 }}>
                      <Text style={[
                        styles.taskTitle,
                        task.done && styles.completed,
                      ]}>
                        {task.title}
                      </Text>

                      <Text style={styles.time}>
                        {task.time}
                      </Text>
                    </View>
                  </Pressable>

                  {task.description ? (
                    <Text style={styles.description}>
                      {task.description}
                    </Text>
                  ) : null}

<Pressable
  style={styles.deleteButton}
  onPress={() => deleteTask(task.id)}
>
  <Text style={styles.deleteText}>
    Удалить задачу
  </Text>
</Pressable>
                </View>
              ))}
            </View>
          ))}

        {filteredTasks.length === 0 && (
          <View style={styles.empty}>
            <Text style={styles.emptyIcon}>☁️</Text>
            <Text style={styles.emptyText}>
              Здесь пока нет задач
            </Text>
          </View>
        )}

        <Pressable
          style={styles.addButton}
          onPress={() => router.push('/add-task' as any)}
        >
          <Text style={styles.addText}>
            + Добавить задачу
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
    marginBottom: 25,
  },

  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#383044',
  },

  subtitle: {
    color: '#9990A8',
    marginTop: 8,
  },

  filters: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 25,
    marginBottom: 15,
  },

  filterButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 11,
    paddingHorizontal: 13,
    borderRadius: 14,
  },

  activeFilter: {
    backgroundColor: '#9375D8',
  },

  filterText: {
    color: '#776C89',
    fontSize: 12,
  },

  activeFilterText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  dateTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#634A9B',
    marginTop: 25,
    marginBottom: 12,
    textTransform: 'capitalize',
  },

  taskCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 17,
    marginBottom: 12,
  },

  taskRow: {
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
    fontWeight: '600',
    color: '#383044',
  },

  completed: {
    textDecorationLine: 'line-through',
    color: '#AAA3B5',
  },

  time: {
    fontSize: 12,
    color: '#A39BAF',
    marginTop: 5,
  },

  description: {
    color: '#9990A8',
    fontSize: 13,
    marginTop: 12,
    marginLeft: 38,
  },

  empty: {
    alignItems: 'center',
    marginTop: 65,
  },

  emptyIcon: {
    fontSize: 45,
  },

  emptyText: {
    color: '#9990A8',
    marginTop: 12,
  },

  addButton: {
    backgroundColor: '#9375D8',
    padding: 18,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 30,
  },

  addText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  deleteButton: {
  backgroundColor: '#FFF0F0',
  padding: 12,
  borderRadius: 12,
  alignItems: 'center',
  marginTop: 15,
},

deleteText: {
  color: '#D96B75',
  fontSize: 14,
  fontWeight: '600',
},
});