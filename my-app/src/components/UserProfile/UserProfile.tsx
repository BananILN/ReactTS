import React, { useState } from "react";
import Button from "../Button/Button";

type TUser = {
    name:string;
    email:string;
    bio:string;
}

export default function UserProfile(){

    const [user,setUser] = useState<TUser>({name:"Alex", email:"Alex@alex", bio:"Dammnboy Developer"}) 
    const [editUser, setEditUser] = useState({...user})
    const [isEdit,setIsEdit] = useState(false)

    const onEditClick = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        event.preventDefault();
        setIsEdit(true);
    }

    const onChange= (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        const {name, value} = event.target;
        setEditUser({...editUser, [name]: value})
    } 

    const saveData = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        event.preventDefault();
        setUser(editUser)
        setIsEdit(false)
    }

    return(
        <div>
            <h1>Форма редактирования {user.name} </h1>
            <form style={{display: 'flex', flexDirection: 'column'}}>
                <input 
                 style={{marginBottom: '10px', width:"300px"}} 
                    name="name"
                    value={editUser.name}
                    disabled={!isEdit}
                    onChange={onChange}
                />
                  <input
                    style={{marginBottom: '10px', width:"300px"}}
                        name="email"
                        type="email"
                        value={editUser.email}
                        disabled={!isEdit}
                        onChange={onChange}
                />
                  <textarea
                    style={{marginBottom: '10px', width:"300px"}} 
                    value={editUser.bio}
                    disabled={!isEdit}
                    onChange={onChange}
                   
                />
                {isEdit ?
                 <Button buttonText={"Сохранить"} onClick={saveData} /> :
                  <Button buttonText={"Изменить"} onClick={onEditClick} />
                
                }
                
            </form>
        </div>
    )
}