import SingleItem from './SingleItem';
import { useFetchTasks } from './tanstackCustomHooks';

const Items = () => {
	const { isLoading, isError, data } = useFetchTasks();

	if (isLoading) {
		return <div className='loading'></div>;
	}

	if (isError) {
		return <div className='alert'>{error.message}</div>;
	}

	return (
		<div className='items'>
			{data?.data.taskList.map((item) => {
				return <SingleItem key={item.id} item={item} />;
			})}
		</div>
	);
};

export default Items;
