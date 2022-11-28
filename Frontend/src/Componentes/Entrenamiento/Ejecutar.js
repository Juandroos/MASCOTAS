import {useState} from 'react';
import AddTaskForm from './AddTaskForm';
import UpdateForm from './UpdateForm';
import ToDo from './ToDo';
import React from 'react';



import './Estilo.css';

function Ejecutar() {

  // Tasks (ToDo List) State
  const [toDo, setToDo] = useState([
    {id: 1,  title: "JUGAR CON UNA PELOTA. De sobra es conocido que lanzar una pelota rápidamente (u otros objetos como un frisbee) es una de las actividades preferidas de los canes y la disfrutan tanto ellos como sus amos. Este ejercicio es extremadamente interactivo, lo que refuerza la conexión entre el dueño y el perro, y es bastante estimulante desde un punto de vista físico y mental para ambos.", status: false},
    {id: 2,  title: "BUSCAR COMIDA. Una excelente manera de promover el bienestar y la comodidad de nuestros perros en casa es a través del enriquecimiento ambiental. De esta forma combatimos el aburrimiento y los alentamos a que demuestren sus comportamientos naturales (olfatear, cavar, morder, roer, etc.), asegura Leal.", status: false},
    {id: 3,  title: "TIRAR CON UNA CUERDA. Otra de las actividades favoritas de los perros es jugar a tirar de una cuerda. Cuanto más difícil se lo ponga el dueño, más emocionado estará el animal para tratar de quedársela. Si no tienes una cuerda en casa, puedes improvisar algún objeto parecido (algún peluche viejo, varios calcetines atados...).", status: false},
    {id: 4,  title: "CORRER CON ELLOS. Si tenemos espacio en casa, correr hacia nuestras mascotas y hacer que nos persigan también es un juego entretenido, y que les gastará energía. Jugar al escondite con ellos es otra opción: mientras un miembro de la familia le sujeta, el otro se esconde.", status: false},
  ]);


  // Temp State
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

  // Add task 
  ///////////////////////////
  const addTask = () => {
    if(newTask) {
      let num = toDo.length + 1; 
      let newEntry = { id: num, title: newTask, status: false }
      setToDo([...toDo, newEntry])
      setNewTask('');
    }
  }

  // Delete task 
  ///////////////////////////
  const deleteTask = (id) => {
    let newTasks = toDo.filter( task => task.id !== id)
    setToDo(newTasks);
  }

  // Mark task as done or completed
  ///////////////////////////
  const markDone = (id) => {
    let newTask = toDo.map( task => {
      if( task.id === id ) {
        return ({ ...task, status: !task.status })
      }
      return task;
    })
    setToDo(newTask);
  }

  // Cancel update
  ///////////////////////////
  const cancelUpdate = () => {
    setUpdateData('');
  }

  // Change task for update
  ///////////////////////////
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    }
    setUpdateData(newEntry);
  }

  // Update task
  ///////////////////////////
  const updateTask = () => {
    let filterRecords = [...toDo].filter( task => task.id !== updateData.id );
    let updatedObject = [...filterRecords, updateData]
    setToDo(updatedObject);
    setUpdateData('');
  }

  return (
    <div className="container App">

    <br /><br />
    <h2>ENTRENAMIENTOS PARA TUS MASCOTAS</h2>
    <br /><br />

    {updateData && updateData ? (
      <UpdateForm 
        updateData={updateData}
        changeTask={changeTask}
        updateTask={updateTask}
        cancelUpdate={cancelUpdate}
      />
    ) : (
      <AddTaskForm 
        newTask={newTask}
        setNewTask={setNewTask}
        addTask={addTask}
      />
    )}

    {/* Display ToDos */}

    {toDo && toDo.length ? '' : 'No Tasks...'}

    <ToDo
      toDo={toDo}
      markDone={markDone}
      setUpdateData={setUpdateData}
      deleteTask={deleteTask}
    />  

    </div>
  );
}

export default Ejecutar;
