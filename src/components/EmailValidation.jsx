import React, { useEffect, useState } from 'react';
import { VscArrowSmallLeft } from "react-icons/vsc";
import { MdError } from "react-icons/md";
import DataTable from 'react-data-table-component';
import { GrEdit } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";
import { ImCancelCircle } from "react-icons/im";

// import validator from 'validator';

const EmailValidation = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', gender: '', hobbies: [], city: '' });
    const [message, setMessage] = useState({});
    const [tableData, setTableData] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('formEntries')) || [];
        setTableData(storedData);
    }, []);

    const syncWithLocalStorage = (updatedData) => {
        localStorage.setItem('formEntries', JSON.stringify(updatedData));
        setTableData(updatedData);
    };
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name === 'hobbies') {
            setFormData((prevFormData) => ({
                ...prevFormData,
                hobbies: checked
                    ? [...prevFormData.hobbies, value] : prevFormData.hobbies.filter((hobby) => hobby !== value) // Remove hobby if unchecked
            }));
        } else {
            setFormData({ ...formData, [name]: value });
        }
        setMessage({ ...message, [name]: '' }); // Clear the message on input change
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;
        const newMessages = { name: '', email: '', phone: '', gender: '', hobbies: '', city: '' };


        // Name validation
        if (formData.name.trim() === '') {
            newMessages.name = 'Name is required';
            valid = false;
        } else if (formData.name.trim().length < 2) {
            newMessages.name = 'Name must be at least 2 characters';
            valid = false;
        }

        // Email validation with regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (formData.email.trim() === '') {
            newMessages.email = 'Email is required';
            valid = false;
        } else if (!emailRegex.test(formData.email.trim())) {
            newMessages.email = 'Email is not valid';
            valid = false;
        }

        // Phone validation for 10 digits
        const phoneRegex = /^[0-9]{10}$/;

        if (formData.phone.trim() === '') {
            newMessages.phone = 'Phone number is required';
            valid = false;
        }
        else if (!phoneRegex.test(formData.phone.trim())) {
            newMessages.phone = 'Phone number must be 10 digits';
            valid = false;
        }

        // Gender validation
        if (formData.gender === '') {
            newMessages.gender = 'Gender is required';
            valid = false;
        }

        // Hobby validation
        if (formData.hobbies.length === 0) {
            newMessages.hobbies = 'hobby is required';
            valid = false;
        }

        // City validation
        if (formData.city.trim() === '') {
            newMessages.city = 'City is required';
            valid = false;
        }

        setMessage(newMessages);

        if (valid) {
            const updatedData = [...tableData];
            if (isEditing && editIndex !== null) {
                updatedData[editIndex] = { ...formData };
            } else {
                // Add a new row when not editing
                updatedData.push({ ...formData });
            }
            syncWithLocalStorage(updatedData);
            setFormData({ name: '', email: '', phone: '', gender: '', hobbies: [], city: '' });
            setIsEditing(false);
            setEditIndex(null);
        }
    };

    const columns = [
        { name: 'S.No', selector: (row) => tableData.indexOf(row) + 1, sortable: true, },
        { name: 'Name', selector: row => row.name, sortable: true },
        { name: 'Email', selector: row => row.email, sortable: true },
        { name: 'Phone', selector: row => row.phone, sortable: true },
        { name: 'Gender', selector: row => row.gender, sortable: true },
        { name: 'Hobbies', selector: row => row.hobbies.join(', '), sortable: true },
        { name: 'City', selector: row => row.city, sortable: true },
        // Add more columns as needed edit and delete
        { name: 'Edit', cell: (row) => <button className='font-bold ' onClick={() => handleEdit(row)}><GrEdit className='hover:text-blue-500 text-[1.2rem]' /></button> },
        { name: 'Delete', cell: (row) => <button onClick={() => handleDelete(row)}><MdDelete className='text-red-500 hover:text-red-600 text-[1.2rem]' /> </button> },
    ];

    const handleReset = () => {
        setFormData({ name: '', email: '', phone: '', gender: '', hobbies: '', city: '' });
        if (isEditing) {
            setIsEditing(false);
            setEditIndex(null);
        }
        setMessage({});
    }
    const handleEdit = (row) => {
        const index = tableData.findIndex((data) => data === row);
        setEditIndex(index);
        setFormData(row);
        setIsEditing(true);
        setMessage({});
    };

    const handleDelete = (row) => {
        const updatedData = tableData.filter((data) => data !== row);
        syncWithLocalStorage(updatedData);
    };


    return (
        <div className='w-full h-screen lg:flex items-center justify-between sm:p-10 py-10  px-10 text-white  '>

            <VscArrowSmallLeft
                className='absolute top-5 left-5 text-4xl cursor-pointer bg-zinc-800 hover:bg-zinc-900 text-white font-bold rounded-full' onClick={() => window.history.back()} />

            <div className='lg:flex  relative top-7 left-0 lg:py-5 sm:px-10 px-5 sm:gap-10  sm:flex-row sm:w-full sm:flex-col-lg  flex-col-lg  items-center justify-center '>
                <form onSubmit={handleSubmit} className='lg:flex lg:flex-col border-zinc-900 rounded-lg px-10 py-5  bg-zinc-200 box-shadow'>
                    {["name", "email", "phone"].map((item, index) => (
                        <div key={index} className="lg:flex lg:flex-col flex flex-col">
                            <label className='py-2 text-zinc-900 font-bold capitalize' >
                                {item}<span className='text-red-500'>*</span>
                            </label>
                            <input
                                name={item}
                                value={formData[item]}
                                onChange={handleChange}
                                className='w-[25vw]-lg h-[6vh]-lg px-4 py-2 rounded-lg bg-zinc-900 text-white'
                                placeholder={`Enter Your ${item}`}
                                type="text"
                            />
                            {message[item] && (
                                <span className='text-red-500 text-[10px] flex items-center'>
                                    <MdError className="mr-1" />{message[item]}
                                </span>
                            )}
                        </div>
                    ))}
                    <div className="flex flex-col">
                        <label className='py-2 text-zinc-900 font-bold capitalize'>Gender <span className='text-red-500'>*</span></label>
                        <div className='flex gap-5  text-zinc-900 capitalize font-semibold'>
                            {["Male", "Female", "Other"].map((item, index) => (
                                <div key={index} className="flex items-center">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value={item}
                                        onChange={handleChange}
                                        className='mr-2'
                                        checked={formData.gender === item}
                                    />{item}
                                </div>
                            ))}
                        </div>
                        {message.gender && (
                            <span className='text-red-500 text-[10px] flex items-center'>
                                <MdError className="mr-1" /> {message.gender}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <label className='py-2 text-zinc-900 font-bold capitalize'>Hobbies<span className='text-red-500'>*</span></label>
                        <div className='flex lg:flex-row flex-col sm:flex-row lg:gap-5 text-zinc-900 capitalize font-semibold'>
                            {["hockey", "cricket", "football"].map((item, index) => (
                                <div key={index} className='flex items-center'>
                                    <input
                                        type="checkbox"
                                        name="hobbies"
                                        value={item}
                                        onChange={handleChange}
                                        className='mr-2'
                                        checked={formData.hobbies.includes(item)}
                                    />
                                    {item}
                                </div>
                            ))}
                        </div>
                        {message.hobbies && (
                            <span className='text-red-500 text-[10px] flex items-center'>
                                <MdError className="mr-1" /> {message.hobbies}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <div className=' flex-wrap gap-5 text-zinc-900 capitalize font-semibold'>
                            <div className="flex flex-col">
                                <label className='py-2 text-zinc-900 text-1xl font-bold capitalize'>City</label>
                                <select
                                    className='w-[25vw]-lg h-[6vh]-lg px-4 py-2 rounded-lg bg-zinc-900 text-white'
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled>Select your city</option>
                                    <option value="Germany">Germany</option>
                                    <option value="France">France</option>
                                    <option value="Italy">Italy</option>
                                    <option value="Spain">Spain</option>
                                    <option value="Portugal">Portugal</option>
                                </select>
                            </div>
                            {message.city && (
                                <span className='text-red-500 text-[10px] flex items-center'>
                                    <MdError className="mr-1" /> {message.city}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-5">
                        <button type='submit' className=' font-bold px-4 py-2 my-8 text-white bg-zinc-900 rounded-lg focus:outline-none hover:bg-zinc-950'>
                            {isEditing ? 'Update' : 'Submit'}
                        </button>
                        <button
                            type="button"
                            onClick={handleReset} // Call the reset handler
                            className="text-2xl px-4 py-2  font-extrabold my-8 text-black bg-zinc-200 hover:bg-zinc-300 rounded-lg focus:outline-none">
                            {isEditing ? <ImCancelCircle  /> : <GrPowerReset />}
                        </button>
                    </div>
                </form>
                <div className="flex-lg flex-col">
                    <h1 className="text-2xl font-bold text-zinc-900 my-5 capitalize  lg:w-[20vw] lg:h-[10vh] px-4 py-5 rounded-lg border-[1px] border-zinc-500 bg-zinc-200 drop-shadow-2xl">
                        User Data count: {tableData.length}
                    </h1>
                    {/* Scrollable Table Wrapper */}
                    <div className="sm:w-full lg:max-h-[60vh]  overflow-y-auto border-[1px] border-zinc-500 rounded-lg bg-zinc-200 drop-shadow-2xl">
                        <DataTable
                            columns={columns}
                            fixedHeader
                            data={tableData}
                            pagination
                            highlightOnHover
                            className="w-full text-white text-center sm:text-lg lg:text-xl"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default EmailValidation;
