import { observer } from 'mobx-react';
import React from 'react';
import '../styles/SuccessBannerView.scss';
import { ExampleSuccess } from '../viewmodels/ExampleViewModel';

type Props = {
	success: ExampleSuccess;
}

const SuccessBannerView: React.FC<Props> = observer(({ success }) => (
	<div className="success--banner">
		<strong className="banner--title">{success.title}</strong><br />
		<span className="banner--message">{success.message}</span>
	</div>
));

export default SuccessBannerView;