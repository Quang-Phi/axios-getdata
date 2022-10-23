export default function(props){
    return (
        <div>
            {
        props.loading?'Loading': props.todo.map((element)=>{
          return (
            <div>
                <h1>{element.name}</h1>
                <button onClick={()=>{
                    props.handleDelete(element)
                }}>Delete</button>
            </div>
          )
        })
      }
        </div>
    )
}