import React from 'react';
import {Link} from 'react-router-dom';
import {createField, Input} from '../../common/FormsControls/FormsControls';
import {required} from '../../../utils/validators/validators';
import controlStyle from '../../common/FormsControls/FormsControls.module.scss';
import style from './ResetForm.module.scss';

export const ResetForm = ({handleSubmit, error}: any) => {
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="email_reset" className={style.label}>Email Address</label>
			{createField('Email', 'email', [required], Input,
				{className: 'input-bg input-bg-light', id: 'email_reset'})}
			{error && <div className={controlStyle.formSummaryError}>{error}</div>}

			<div className={style.actions}>
				<div><button className={style.button}>Submit</button></div>
				<div><Link to="/login" className={style.button}>Cancel</Link></div>
			</div>
		</form>
	)
};
