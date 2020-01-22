import React from 'react';
import {Post} from '../common/Posts/Post';
import style from "./LoginFooter.module.scss";

export const LoginFooter = () => {
	return (
		<div className={style.footer}>
			<Post title="LATEST BLOG POST" date="October 15, 2018"
				text="Create Efficiency with a Creative Asset Management Platform" />
			<Post title="RECENT TWEET" date="April-25-2018-Henr"
				text="#HenryStewartEvents are bringing their #CreativeOps show to NYC for the third…" />
		</div>
	)
};
