import { addDoc, getDocs, collection, setDoc, doc } from 'firebase/firestore'
import { db } from './index'

/**
 * Guarda una nueva tarea en la base de datos
 * @param {object} task 
 * @returns action
 */
export const addTask = (task) => {
  return addDoc(collection(db, 'tasks'), task);
}

/**
 * Lee todas las tareas de la base de datos
 * @returns Object
 */
export const getTasks = async () => {
  const querySnapshot = await getDocs(collection(db, 'tasks'));

  const tasks = querySnapshot.docs.map(doc => {
    return { ...doc.data(), id: doc.id } 
  })
  // console.log('Task en TaskController: ', tasks)
  return tasks
}

export const toggleComplete = (task) => {
  return setDoc(doc(db,'tasks', task.id), {
    ...task,
    completed: !task.completed
  })
}

