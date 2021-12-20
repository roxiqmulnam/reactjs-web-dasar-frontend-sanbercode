import React, { useContext, useEffect } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { Context } from "../../config/Context"
import './index.css'

const CreateData = () => {
    const {input, setInput, currentId, setCurrentId, functions } = useContext(Context)
    const { functionSubmit, functionUpdate,fetchById  } = functions
    let {Value} = useParams()

    useEffect(() => {
        if( Value !== undefined ){
            fetchById(Value)
        }
    },[])


    const handleChange = (event) => {
        let typeOfValue = event.target.value
        let name = event.target.name

        setInput({ ...input, [name]: typeOfValue })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(input)

        if (currentId === -1) {
            functionSubmit()
        } else {
            functionUpdate(currentId)
        }

        setInput({
            name: "",
            description: "",
            category: "",
            release_year: 0,
            size: 0,
            price: 0,
            rating: 0,
            image_url:""
        })
        setCurrentId(-1)
    }

    return (
        <>
        <div className="form-card">
            <form method="post" onSubmit={handleSubmit} className="form-input">
            <label>Name</label>
            <input value={input.name} onChange={handleChange} 
            type="text" name="name" placeholder="Masukan Nama.." required/>

            <label>Category</label>
            <input value={input.category} onChange={handleChange} 
            type="text" name="category" placeholder="Masukan Category.." required/>

            <label>Description</label>
            <input value={input.description} onChange={handleChange}
            type="text" name="description" placeholder="Masukan Description.." required/>

            <label>Year</label>
            <input value={input.release_year} onChange={handleChange} 
            type="text" name="release_year" placeholder="Masukan Year..." required/>
            
            <label>Size</label>
            <input value={input.size} onChange={handleChange} 
            type="text" name="size" placeholder="Masukan Size.." required/>
                        
            <label>Price</label>
            <input value={input.price} onChange={handleChange} 
            type="text" name="price" placeholder="Masukan Price.." required/>
            
            <label>Rating</label>
            <input value={input.rating} onChange={handleChange} 
            type="text" name="rating" placeholder="Masukan Rating.." required/>
 
            <label>Image URL</label>
            <input value={input.image_url} onChange={handleChange} 
            type="text" name="image_url" placeholder="Masukan Image URL.." required/>
            <p>Platform</p>
            <label>Android</label>
            <input type="checkbox" />
            <label>Ios</label>
            <input type="checkbox" />

            <input type="submit"/>
            <Link to="/mobile-list">
            <button className='btn-back'>Back</button>
            </Link>
            </form>


        </div>

        </>
    )
}

export default CreateData
