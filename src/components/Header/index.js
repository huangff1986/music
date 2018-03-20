import {Component} from 'react';
import style from './Header.css';

class Header extends Component {
	constructor(props){
		super(props)
		this.state = {
			isSearchPanelShow: false
		}
	}

	showSearchPanel() {
		this.setState({
			isSearchPanelShow: true
		})
	}

	hiddenSearchPanel() {
		this.setState({
			isSearchPanelShow: false
		})
	}



	render() {
		return (
			<div className={style.container}>
				<div className={this.state.isSearchPanelShow ? style['microphone--show'] : style.microphone}>
					<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M810.666667 405.333333c-12.8 0-21.333333 8.533333-21.333334 21.333334v85.333333c0 157.866667-132.266667 285.866667-292.266666 277.333333-149.333333-6.4-262.4-136.533333-262.4-285.866666V426.666667c0-12.8-8.533333-21.333333-21.333334-21.333334s-21.333333 8.533333-21.333333 21.333334v85.333333c0 168.533333 132.266667 307.2 298.666667 320v149.333333h-149.333334c-12.8 0-21.333333 8.533333-21.333333 21.333334s8.533333 21.333333 21.333333 21.333333h341.333334c12.8 0 21.333333-8.533333 21.333333-21.333333s-8.533333-21.333333-21.333333-21.333334h-149.333334v-149.333333c168.533333-10.666667 298.666667-157.866667 298.666667-328.533333V426.666667c0-12.8-8.533333-21.333333-21.333333-21.333334zM512 746.666667c130.133333 0 234.666667-104.533333 234.666667-234.666667V234.666667c0-130.133333-104.533333-234.666667-234.666667-234.666667S277.333333 104.533333 277.333333 234.666667v277.333333c0 130.133333 104.533333 234.666667 234.666667 234.666667z m-192-512c0-106.666667 85.333333-192 192-192s192 85.333333 192 192v277.333333c0 106.666667-85.333333 192-192 192s-192-85.333333-192-192V234.666667z" fill="#fff" p-id="14502"></path></svg>
				</div>
				<div className={this.state.isSearchPanelShow ? style['player--show'] : style.player} onClick={this.props.onPlayerClick}>
					<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M123.252 73.826h111.169v790.935h-111.169v-790.935z" p-id="15227" fill="#ffffff"></path><path d="M346.361 465.952h111.169v395.467h-111.169v-395.467z" p-id="15228" fill="#ffffff"></path><path d="M569.466 229.325h111.169v636.444h-111.169v-636.444z" p-id="15229" fill="#ffffff"></path><path d="M792.574 391.584h111.169v475.788h-111.169v-475.788z" p-id="15230" fill="#ffffff"></path></svg>
				</div>

				<div className={this.state.isSearchPanelShow ? style['cancel--show'] : style.cancel} onClick={this.hiddenSearchPanel.bind(this)}>
					取消
				</div>
				<div className={this.state.isSearchPanelShow ? style['search--show'] : style.search}>
					<div className={style.search__icon}>
						<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M1024 942.979045 672.514371 637.634963c51.146675-64.375716 81.745603-145.772236 81.745603-234.191342 0-207.949932-169.180055-377.129987-377.129987-377.129987S0 195.493689 0 403.443621s169.180055 377.129987 377.129987 377.129987c93.457939 0 179.069936-34.186057 245.027359-90.68935l354.316813 307.802108L1024 942.979045zM377.129987 732.424232C195.729621 732.424232 48.149376 584.843987 48.149376 403.443621S195.729621 74.46301 377.129987 74.46301c181.402774 0 328.980611 147.580245 328.980611 328.980611S558.532761 732.424232 377.129987 732.424232z" p-id="15958" fill="#bfbfbf"></path></svg>
					</div>
					<input className={style.search__input} onFocus={this.showSearchPanel.bind(this)}/>
					<div className={style.search__close}>
						<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M512 0C229.24001 0 0 229.24001 0 512c0 282.828724 229.24001 512 512 512 282.828724 0 512-229.171276 512-512C1023.997852 229.24001 794.826576 0 512 0zM749.226015 323.037979l-190.259371 190.328105 168.412772 187.595937c13.312872 13.312872 13.312872 35.019856 0 48.263994-13.244138 13.312872-34.95327 13.312872-48.19526 0l-168.412772-187.595937-187.664671 187.595937c-13.312872 13.312872-34.95327 13.312872-48.263994 0-13.312872-13.244138-13.312872-34.95327 0-48.263994l190.259371-190.259371-168.346186-187.664671c-13.312872-13.312872-13.312872-34.95327 0-48.263994s34.95327-13.312872 48.263994 0l168.412772 187.664671 187.595937-187.664671c13.312872-13.312872 34.95327-13.312872 48.263994 0C762.605473 288.084709 762.536739 309.725107 749.226015 323.037979z" p-id="16678" fill="#bfbfbf"></path></svg>
					</div>
				</div>
				<div className={this.state.isSearchPanelShow ? `${style.search__panel} ${style['search__panel--show']}` : `${style.search__panel}`}>
					<div className={style.panel__singer}>
						<span className={style.panel__singer__icon1}><svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M679.44448 148.2752a204.8 204.8 0 1 0 34.07872 81.22368 20.48 20.48 0 0 0-40.30464 7.3728 163.84 163.84 0 1 1-27.2384-64.9216 20.48 20.48 0 0 0 33.46432-23.63392zM880.64 880.64a368.64 368.64 0 0 0-617.75872-271.72864 20.48 20.48 0 1 0 27.68896 30.18752A326.0416 326.0416 0 0 1 512 552.96a327.68 327.68 0 0 1 327.68 327.68 20.48 20.48 0 1 0 40.96 0zM229.376 643.8912a367.16544 367.16544 0 0 0-86.016 236.7488 20.48 20.48 0 1 0 40.96 0c0-78.06976 27.36128-151.83872 76.47232-210.41152a20.48 20.48 0 0 0-31.37536-26.33728z" p-id="16863" fill="#8a8a8a"></path><path d="M491.52 675.84v81.92c0 11.264 9.216 20.48 20.48 20.48 11.4688 0 20.48-9.05216 20.48-20.48v-81.92c0-11.264-9.216-20.48-20.48-20.48-11.4688 0-20.48 9.05216-20.48 20.48z m-40.96 0c0-33.91488 27.27936-61.44 61.44-61.44 33.91488 0 61.44 27.60704 61.44 61.44v81.92c0 33.91488-27.27936 61.44-61.44 61.44-33.91488 0-61.44-27.60704-61.44-61.44v-81.92z" p-id="16864" fill="#8a8a8a"></path><path d="M491.52 798.72v81.92a20.48 20.48 0 1 0 40.96 0v-81.92a20.48 20.48 0 1 0-40.96 0z" p-id="16865" fill="#8a8a8a"></path></svg></span>
						歌手分类
						<span className={style.panel__singer__icon2}><svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M857.70558 495.009024 397.943314 27.513634c-7.132444-7.251148-18.794042-7.350408-26.048259-0.216941-7.253194 7.132444-7.350408 18.795065-0.216941 26.048259l446.952518 454.470749L365.856525 960.591855c-7.192819 7.192819-7.192819 18.85544 0 26.048259 3.596921 3.596921 8.311293 5.39487 13.024641 5.39487s9.42772-1.798972 13.024641-5.39487L857.596086 520.949836C864.747973 513.797949 864.796068 502.219239 857.70558 495.009024z" p-id="18030" fill="#333"></path></svg></span>
					</div>
					<div className={style.panel__hotkey}>
						<h3 className={style.hotkey__title}>热门搜索</h3>
						<ul className={style.hotkey__list}>
							<li className={style.hotkey__item}>慢慢喜欢你</li>
							<li className={style.hotkey__item}>炎亚纶</li>
							<li className={style.hotkey__item}>方大同</li>
							<li className={style.hotkey__item}>徐梦圆</li>
							<li className={style.hotkey__item}>偶像练习生</li>
							<li className={style.hotkey__item}>Please Don't Go</li>
							<li className={style.hotkey__item}>Rihanna</li>
							<li className={style.hotkey__item}>Justin Bieber</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}


export default Header;