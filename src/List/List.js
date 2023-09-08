const List = () => {
    const tasks = [
    {
      id:1,
      item:'take out trash'
    },
    {
      id: 2,
      item: 'go for a run'
    },
    {
      id:3,
      item: 'wash car'
    }
  ]
  
  const Todo = () => {
    return(
      <div>
        {tasks.map((task) => (
          <div key={task.id}>
  
            <li>{task.item}</li>
          </div>
        ))}
      </div>
    )
  }
  console.log(Todo)
}

export default List
  