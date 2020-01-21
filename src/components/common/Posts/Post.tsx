import React from 'react';
import style from "./Post.module.css";

interface PostProps {
	title: string;
	date: string;
	text: string;
}

export const Post = (props: PostProps) => {
	const {title,date,text} = props;
	return (
		<div>
			<h3 className={style['header']}>{title}</h3>
			<div className={style['body']}>
				<div>{date}</div>
				<div>{text}</div>
			</div>
		</div>
	)
};
