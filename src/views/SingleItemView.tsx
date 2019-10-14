import { observer } from "mobx-react";
import React from 'react';

type Props = {
	id: string;
	text: string;
	price: number;
	onRemove: (id: string) => void;
};

const SingleItemView: React.FC<Props> = observer(({ id, text, price, onRemove }) => (
	<div className="item--row" >
		<p className="item--id">{id}</p>
		<h3 className="item--text">{text}</h3>
		<span className="item--price">{price}</span>
		<button onClick={() => onRemove(id)} className='item--action' title='Delete item'>Delete</button>
	</div>
));

export default SingleItemView;