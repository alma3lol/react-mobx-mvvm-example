import { computed, observable, action } from "mobx";
import _ from 'lodash';

export type ExampleError = {
	title: string;
	message: string;
};
export type ExampleSuccess = {
	title: string;
	message: string;
};
export type ExampleDataEntry = {
	id: string,
	text: string,
	price: number 
}
export type ExampleData = ExampleDataEntry[]

class ExampleViewModel {
	@observable private _error: ExampleError | undefined;
	@observable private _success: ExampleSuccess | undefined;
	@observable private _data: ExampleData = [];
	constructor() {
		// Fetch data from API
		// then call this.setData()
		const dataFromAPI: ExampleData = [];
		this.setData(dataFromAPI);
	}
	@computed get Error() {
		return this._error;
	}
	@computed get Success() {
		return this._success;
	}
	@computed get Data() {
		return this._data;
	}
	// `.bound` is important when using
	// the function inside of a promise callback
	@action.bound
	setData(data: ExampleData) {
		// Set data
		this._data = data;
	}
	@action.bound
	setError(error: ExampleError | undefined) {
		this._error = error;
	}
	@action.bound
	setSuccess(success: ExampleSuccess | undefined) {
		this._success = success;
	}
	addData(data: ExampleDataEntry) {
		// Add data to API then update
		// data in here by calling this.setData()
		const newData: ExampleData = _.concat(this._data, data);
		this.setData(newData);
	}
	removeData(id: string) {
		// Remove data from API then update
		// data in here by calling this.setData()
		const newData = this._data.filter(item => (item.id !== id));
		this.setData(newData);
	}
}

export default ExampleViewModel;