import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { v4 } from 'uuid';
import '../styles/ExampleView.scss';
import ExampleViewModel from "../viewmodels/ExampleViewModel";
import ErrorBannerView from './ErrorBannerView';
import SingleItemView from './SingleItemView';
import SuccessBannerView from './SuccessBannerView';

type Props = {
	vm: ExampleViewModel
};

@observer
class ExampleView extends Component<Props>{
	addItem = () => {
		const text = window.prompt("New item's name");
		if (!text) return;
		this.props.vm.addData({
			id: v4(),
			text,
			price: Math.floor(Math.random() * 50) + 1
		});
	}
	removeItem = (id: string) => {
		const confirmed = window.confirm('Do you want to remove this item?');
		if (confirmed) this.props.vm.removeData(id);
	}
	setError = () => {
		this.props.vm.setError({ title: 'Error title', message: 'Error message' });
	}
	clearError = () => {
		this.props.vm.setError(undefined);
	}
	setSuccess = () => {
		this.props.vm.setSuccess({ title: 'Success title', message: 'Success message' });
	}
	clearSuccess = () => {
		this.props.vm.setSuccess(undefined);
	}
	render() {
		const { vm } = this.props;
		return (
			<div>
				{
					vm.Error &&
					<ErrorBannerView error={vm.Error} />
				}
				{
					vm.Success &&
					<SuccessBannerView success={vm.Success} />
				}
				<div className="items--actions">
					<button onClick={this.addItem} className='add--action'>Add an item</button>
					<button onClick={this.setError} className='set--error--action'>Set error</button>
					<button onClick={this.clearError} className='clear--error--action'>Clear error</button>
					<button onClick={this.setSuccess} className='set--success--action'>Set success</button>
					<button onClick={this.clearSuccess} className='clear--success--action'>Clear success</button>
				</div>
				<div className="items--table">
					<div className="items--header">
						<div className="item--header">ID</div>
						<div className="item--header">Text</div>
						<div className="item--header">Price</div>
						<div className="item--header">Action</div>
					</div>
					<div className="items--rows">
						{
							(vm.Data.length > 0) ?
							vm.Data.map((item, idx) => (
								<SingleItemView key={idx} {...item} onRemove={this.removeItem} />
							))
							:
							<div className="no--items">
								No items yet
							</div>
						}
					</div>
				</div>
			</div>
		);
	}
}

export default ExampleView;