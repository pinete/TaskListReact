import { addDoc, getDocs, collection, setDoc, doc, deleteDoc } from 'firebase/firestore'
import { db } from './index'

/**
 * Guarda una nueva tarea en la base de datos
 * @param {object} task 
 * @returns action
 */
export const addTask = async (task) => {
  const docRef = await addDoc(collection(db, 'tasks'), task)
  // console.log('ID en addTask: ', docRef.id)
  return docRef.id ;
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
  return tasks
}

/**
 * Cambia el estado de 'complete' a su booleano contrario
 * @param {*} task 
 * @returns action delete
 */
export const toggleComplete = (task) => {
  return setDoc(doc(db,'tasks', task.id), {
    ...task,
    completed: !task.completed
  })
}

/**
 * Borra la tarea seleccionada
 * @param {*} task Tarea a borrar
 */
export const deleteTask = async (task) => {
  await deleteDoc(doc(db, 'tasks', task.id));
}

export const deleteAllTasks = () => {

}


