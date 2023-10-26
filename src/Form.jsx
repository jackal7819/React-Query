import { useState } from 'react';
import customFetch from './utils';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

const Form = () => {
	const queryClient = useQueryClient();
	const [newItemName, setNewItemName] = useState('');

	const { mutate, isLoading } = useMutation({
		mutationFn: (newTask) => customFetch.post('/', { title: newTask }),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['tasks'] });
		},
		onError: (error) => {
			toast.error(error.response.data.msg);	
		}
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		mutate(newItemName);
		setNewItemName('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<h4>task bud</h4>
			<div className='form-control'>
				<input
					type='text '
					className='form-input'
					value={newItemName}
					onChange={(event) => setNewItemName(event.target.value)}
				/>
				<button type='submit' className='btn' disabled={isLoading}>
					add task
				</button>
			</div>
		</form>
	);
};

export default Form;
