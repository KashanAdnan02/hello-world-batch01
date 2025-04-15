import { useState } from "react"

function App() {
    let [show, setShow] = useState(false)
    console.log(show);

    return (
        <div>
            <h1>Show Password</h1>
            <input type={show === true ? "text" : "password"} />
            <p onClick={() => setShow(!show)}>
                {show === true ?  <img src="https://cdn-icons-png.flaticon.com/512/159/159078.png" alt="" width={20} /> : <img src="https://static.thenounproject.com/png/4411492-200.png" width={30} alt="" />
                }
            </p>



        </div>
    )
}

export default App