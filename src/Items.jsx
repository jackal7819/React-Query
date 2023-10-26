import { useQuery } from '@tanstack/react-query';
import SingleItem from './SingleItem';
import customFetch from './utils';

const Items = ({ items }) => {
	const { isLoading, data, isError, error } = useQuery({
		queryKey: ['tasks'],
		queryFn: () => customFetch.get('/'),
	});

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
