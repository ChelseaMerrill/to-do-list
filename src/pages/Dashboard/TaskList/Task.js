
import '../styles/Task.css'
export const Task = ({task}) => {
    return(
        <div key={task.id} className='item'>
            <li>{task.title}</li>
        </div>
    )
}
