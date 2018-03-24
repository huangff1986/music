import React from 'react';
import style from './Header.css';

const Header = (props) => {
	return (
		<div className={style.container}>
			<div className={style.back} onClick={()=>{window.history.back()}}>
				<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M744.738909 976.872727c-5.608727 0-11.240727-2.071273-15.627636-6.237091L246.330182 512 729.088 53.387636c9.076364-8.622545 23.447273-8.273455 32.069818 0.814545 8.622545 9.088 8.261818 23.447273-0.814545 32.069818L312.192 512l448.174545 425.751273c9.076364 8.622545 9.448727 22.993455 0.814545 32.069818C756.724364 974.510545 750.743273 976.872727 744.738909 976.872727z" p-id="2544" fill="#ffffff"></path></svg>
			</div>
			<div className={style.info}>
				<span className={style.info__song}>{props.song}</span>
				<span className={style.info__artist}>{props.artist}</span>
			</div>
			<div className={style.share}>
				<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M900.3008 512l-8.6016 0c-9.3184 0-16.9984 7.68-16.9984 16.9984l0 25.7024 0 68.3008 0 230.2976c0 35.328-28.672 64-64 64l-640 0c-35.328 0-64-28.672-64-64l0-640c0-35.328 28.672-64 64-64l272.9984 0L512 149.2992l25.7024 0c9.3184 0 16.9984-7.68 16.9984-16.9984l0-8.6016c0-9.3184-7.68-16.9984-16.9984-16.9984L512 106.7008l-68.3008 0L170.7008 106.7008c-58.7776 0-106.7008 47.8208-106.7008 106.7008l0 640c0 58.7776 47.8208 106.7008 106.7008 106.7008l640 0c58.7776 0 106.7008-47.8208 106.7008-106.7008L917.4016 623.0016l0-68.3008 0-25.7024C917.2992 519.68 909.7216 512 900.3008 512z" p-id="10876" fill="#ffffff"></path><path d="M952.9344 218.5216 790.528 69.8368c-9.0112-8.2944-23.1424-7.7824-31.5392 1.1264-8.3968 8.8064-7.8848 22.7328 1.1264 30.9248l127.488 116.736c-236.8512 6.2464-439.6032 174.8992-439.6032 399.1552 0 12.0832 9.9328 21.9136 22.3232 21.9136s22.3232-9.8304 22.3232-21.9136c0-197.9392 178.688-345.9072 387.9936-355.0208L772.096 377.344c-8.3968 8.8064-7.8848 22.7328 1.1264 30.9248 4.3008 3.8912 9.728 5.8368 15.1552 5.8368 5.9392 0 11.8784-2.3552 16.2816-6.9632l149.2992-157.696C962.4576 240.64 961.9456 226.816 952.9344 218.5216z" p-id="10877" fill="#ffffff"></path></svg>
			</div>
		</div>
	)
}

export default Header;