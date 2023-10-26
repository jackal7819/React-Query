import { useDeleteTask, useEditTask } from './tanstackCustomHooks';

const SingleItem = ({ item }) => {
	const editTask = useEditTask();
	const { isLoading, deleteTask } = useDeleteTask();

	const handleEditTask = () => {
		editTask({ taskId: item.id, isDone: !item.isDone });
	};

	const handleDeleteTask = () => {
		deleteTask(item.id);
	};

	return (
		<div className='single-item'>
			<input
				type='checkbox'
				checked={item.isDone}
				onChange={handleEditTask}
			/>
			<p
				style={{
					textTransform: 'capitalize',
					textDecoration: item.isDone && 'line-through',
				}}>
				{item.title}
			</p>
			<button
				className='btn remove-btn'
				type='button'
				onClick={handleDeleteTask}
				disabled={isLoading}>
				delete
			</button>
		</div>
	);
};

export default SingleItem;
