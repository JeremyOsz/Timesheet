import React from 'react';

const SelectItem = ({item}) =>
		<option>
			{item.id} - {item.name}
		</option>
		

export default SelectItem;