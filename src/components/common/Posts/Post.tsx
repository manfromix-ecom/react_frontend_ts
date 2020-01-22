import React from 'react';
import style from "./Post.module.scss";

interface PostProps {
	title: string;
	date: string;
	text: string;
}

export const Post = (props: PostProps) => {
	const {title,date,text} = props;
	return (
		<div className={style.wrapper}>
			<h3 className={style.header}>{title}</h3>
			<div className={style.body}>
				<div><span>{date}</span></div>
				<div><span>{text}</span></div>
			</div>
		</div>
	)
};
