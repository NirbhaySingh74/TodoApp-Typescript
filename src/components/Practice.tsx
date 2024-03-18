
type PracticeProps = {
    name: string, 
    age: number,
    email?: string,
    arr: number[]
}
const Practice = ({name, age, email, arr}: PracticeProps) => {
  return (
    <div>
      <h1>Name - {name} and age - {age}  {email}</h1>
      {arr.map((num) => (
        <div>
            <h1>{num} </h1>
        </div>
      ))}
    </div>
  )
}

export default Practice
