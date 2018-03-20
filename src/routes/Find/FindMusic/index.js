import React from 'react';
import style from './FindMusic.css';
import {Carousel} from 'antd-mobile';

import banner1 from './imgs/banner1.jpg';
import banner2 from './imgs/banner2.jpg';
import banner3 from './imgs/banner3.jpg';
import banner4 from './imgs/banner4.jpg';
import banner5 from './imgs/banner5.jpg';
import banner6 from './imgs/banner6.jpg';
import banner7 from './imgs/banner7.jpg';
import banner8 from './imgs/banner8.jpg';

const FindMusic = () => {
	return (
		<div>
			<Carousel
				dotActiveStyle={{backgroundColor:'#d43c33'}}
			>
				<a
					key={1}
					href="http://www.alipay.com"
					style={{ display: 'inline-block', width: '100%', height: 250 }}
				>
					<img
					  src={banner1}
					  alt=""
					  style={{ width: '100%', height: '100%', verticalAlign: 'middle' }}
					/>
				</a>
				<a
					key={2}
					href="http://www.alipay.com"
					style={{ display: 'inline-block', width: '100%', height: 250 }}
				>
					<img
					  src={banner2}
					  alt=""
					  style={{ width: '100%', height: '100%', verticalAlign: 'middle' }}
					/>
				</a>
				<a
					key={3}
					href="http://www.alipay.com"
					style={{ display: 'inline-block', width: '100%', height: 250 }}
				>
					<img
					  src={banner3}
					  alt=""
					  style={{ width: '100%', height: '100%', verticalAlign: 'middle' }}
					/>
				</a>
				<a
					key={4}
					href="http://www.alipay.com"
					style={{ display: 'inline-block', width: '100%', height: 250 }}
				>
					<img
					  src={banner4}
					  alt=""
					  style={{ width: '100%', height: '100%', verticalAlign: 'middle' }}
					/>
				</a>
				<a
					key={5}
					href="http://www.alipay.com"
					style={{ display: 'inline-block', width: '100%', height: 250 }}
				>
					<img
					  src={banner5}
					  alt=""
					  style={{ width: '100%', height: '100%', verticalAlign: 'middle' }}
					/>
				</a>
				<a
					key={6}
					href="http://www.alipay.com"
					style={{ display: 'inline-block', width: '100%', height: 250 }}
				>
					<img
					  src={banner6}
					  alt=""
					  style={{ width: '100%', height: '100%', verticalAlign: 'middle' }}
					/>
				</a>
				<a
					key={7}
					href="http://www.alipay.com"
					style={{ display: 'inline-block', width: '100%', height: 250 }}
				>
					<img
					  src={banner7}
					  alt=""
					  style={{ width: '100%', height: '100%', verticalAlign: 'middle' }}
					/>
				</a>
				<a
					key={8}
					href="http://www.alipay.com"
					style={{ display: 'inline-block', width: '100%', height: 250 }}
				>
					<img
					  src={banner8}
					  alt=""
					  style={{ width: '100%', height: '100%', verticalAlign: 'middle' }}
					/>
				</a>
			</Carousel>
		</div>
	)
}

export default FindMusic