import React from 'react';
import {Link} from 'react-router-dom';
import {createField, Input} from '../../common/FormsControls/FormsControls';
import {required} from '../../../utils/validators/validators';
import controlStyle from '../../common/FormsControls/FormsControls.module.css';
import style from './ResetForm.module.css';

const ResetForm = ({handleSubmit, error}: any) => {
	return (
		<form onSubmit={handleSubmit}>
			{createField('Email', 'email', [required], Input,
				{className: 'input-bg input-bg-light'})}
			{error && <div className={controlStyle.formSummaryError}>{error}</div>}

			<div className={style['actions']}>
				<div><button>Submit</button></div>
				<div><Link to="/login">Cancel</Link></div>
			</div>
		</form>
	)
}

export default ResetForm;