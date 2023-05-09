import React, { useState } from 'react';
import useList from '../../hooks/useList';
import { motion } from 'framer-motion'

// Usamos Tailwind para los estilos y framer-motion para las animaciones
// Al asociar, por ejemplo un boton, a motion lo que hacemos es añadirle nuevas posibilidades de props

/**
 * Componente que gestiona la lista de tareas
 *
 * @returns (React.Component)
 */
const TaskList = ({ showSettings, setShowSettings }) => {
  const tasks = useList([]);
  const [newTask, setNewTask] = useState('');
  

  /**
   * Añade una nueva tarea a la lista y vacía el input
   */
  const addNewTask = () => {
    if (newTask === "") return; //
    tasks.push({ text: newTask, completed: false });
    setNewTask('');
  };

  /**
   * Manejador de estado de la tarea  ( completada / no completada )
   * Actualiza el estado usando las funciones del hook personalizado useList
   * @param {number} index Posicion en el array de tareas
   * @param {boolean} value Valor del campo 'completed'
   */
  const handlerCompleted = (index, value) => {
    tasks.update(index, 'completed', !value);
  };

  // Configuracion base de TailWind
  const btnTailWind = "shadow py-1 px-2 rounded hover:text-white transition duration-250"
  const inputTailWind = "shadow py-1 px-2 rounded-lg outline-none focus:ring-2 mr-2 transition-all duration-300"

  return (
    <>
      <header className='flex justify-between'>
        <h1 className='text-3xl text-sky-700 font-semibold dark:text-sky-300'>
          Task List v2 - hosted on: Firebase
        </h1>
        <motion.button 
          whileHover={{ scale:1.1 }}
          whileTap={{ scale: 0.9 }}
          className='btnSky' onClick={() => setShowSettings(!showSettings)}>
            {!showSettings ? 'Show Settings' : 'Hide Settings'}
        </motion.button>
      </header>
      <div>
        <div className='my-4'>
          <input
            className={`${inputTailWind} dark:bg-slate-700`}
            type="text"
            value={newTask}
            onKeyDown={(e) => e.key === 'Enter' && addNewTask()} // añade nueva tarea al pulsar tecla 'ENTER' sobre el input
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="New Task"
          />
          <button  
            className={`${btnTailWind} rounded bg-sky-300 hover:bg-sky-400 hover:text-white`}
            type="button" onClick={addNewTask}>Create Task
          </button>
        </div>
        { tasks.isEmpty()
            ? (<p>Task List is Empty</p>)
            : (
              <ul>
                {tasks.value.map((task, index) => (
                  <motion.li 
                    initial={{ x: '100vw' }} 
                    animate = {{ x:0 }} 
                    key={index} 
                    className='list-none' >
                    <button
                      key={`b1${index}`}
                      type="button"
                      className={`${btnTailWind} bg-red-400 hover:bg-red-600`}
                      onClick={() => tasks.remove(index)}
                    >
                      Del
                    </button>
                    <button
                      key={`b2${index}`}
                      type="button"
                      className={`${btnTailWind} w-1/6  hover:text-white 
                        ${task.completed ? 
                            "ml-2 bg-amber-400 hover:bg-amber-600"
                          : 
                            "ml-2 bg-lime-400 hover:bg-lime-500"
                        }
                      `}
                      onClick={() => handlerCompleted(index, task.completed)}
                    >
                      {task.completed ? 'Completed' : 'Active'}
                    </button>
                    <span 
                      key={`s1${index}`} 
                      className={`ml-2 text-sm italic dark:text-gray-100 ${
                          task.completed ? 'text-gray-400 line-through' :  'text-gray-800'
                        }`
                      }
                    >
                      {task.text}
                    </span>
                  </motion.li>
                ))}
              </ul>
            )}
        <div className="mt-2" role="group" aria-label="Action Buttons">
          <button className={`${btnTailWind} mr-2 bg-red-400 hover:bg-red-600`} type="button" onClick={tasks.clear}>Clear all</button>
          <button className={`${btnTailWind} mr-2 bg-purple-400 hover:bg-purple-600`} type="button" onClick={tasks.sort}>Sort</button>
          <button className={`${btnTailWind} mr-2 bg-teal-400 hover:bg-teal-600`} type="button" onClick={tasks.reverse}>Reverse</button>
        </div>
      </div>
    </>
  );
};

export default TaskList;
