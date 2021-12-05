
<<<<<<< HEAD
/*
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
*/
const data = [
    {
      name: "ben",
      age: 20
    }
]

function HandlerA (req, res) {
  
  return res.status(200).send({message: data[0].name});
}

export default HandlerA;
=======
export default (req, res) => {
    res.status(200).json({ name: 'John Doe' })
  }
  
>>>>>>> 7445a26659d5a633887c8ab11a831618b844af92
