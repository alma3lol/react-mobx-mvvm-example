import { observer } from 'mobx-react';
import React from 'react';
import '../styles/ErrorBannerView.scss';
import { ExampleError } from '../viewmodels/ExampleViewModel';

type Props = {
	error: ExampleError;
}

const ErrorBannerView: React.FC<Props> = observer(({ error }) => (
	<div className="error--banner">
		<strong className="banner--title">{error.title}</strong><br />
		<span className="banner--message">{error.message}</span>
	</div>
));

export default ErrorBannerView;