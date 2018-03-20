import React from 'react';
import { Tabs } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import FindMusic from '../FindMusic/'
import style from './Tab.css'

const tabs = [
  { title: '发现音乐'},
  { title: '主播电台'}
];

function renderTabBar(props) {
	return (
		<div className={style.tabBar}><Tabs.DefaultTabBar {...props} /></div>
	)
}

const Tab = () => {
	return (
		<div className={style.tabbd}>
			<Tabs
				tabs={tabs}
				initialPage={0}
				renderTabBar={renderTabBar}
				useOnPan={false}
				tabBarActiveTextColor={'#d43c33'}
				tabBarUnderlineStyle={{border: '2px solid #d43c33'}}
			>
				<FindMusic/>
				<div>
				  Content of second tab
				</div>
			</Tabs>
		</div>
	)
}

export default Tab;