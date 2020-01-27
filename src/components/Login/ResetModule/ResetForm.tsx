import React from 'react';
import {createField, Input} from '../../common/FormsControls/FormsControls';
import {required} from '../../../utils/validators/validators';
import controlStyle from '../../common/FormsControls/FormsControls.module.scss';
import style from './ResetForm.module.scss';


export const ResetForm: React.FunctionComponent = ({handleSubmit, error}: any) => {
	return (
		<form onSubmit={handleSubmit} id="reset_password_form">
			<label htmlFor="email_reset" className={style.label}>Email Address</label>
			{createField('', 'email', [required], Input,
				{className: 'input-bg input-bg-light', id: 'email_reset'})}
			{error && <div className={controlStyle.formSummaryError}>{error}</div>}
		</form>
	)
};
