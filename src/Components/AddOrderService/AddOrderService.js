import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddOrderService.css';

const AddOrderService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/motorCollection', data)
        .then(res => {
            if (res.data.insertedId){
                alert('Order successfully');
                reset();
            }
        })
    }

    return (
        <div className='add-Order-Service'>
            <h2>Please Order Submit</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true, maxLength: 20 })} placeholder='Name' />
            <textarea {...register("description", )} placeholder='description' />
            <input type="reset" />
            <input className='hover'  type="submit" />
            </form>
        </div>
    );
};

export default AddOrderService;