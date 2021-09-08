import React, { useEffect, useState } from 'react';
import {Link, Route, Switch, useLocation} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import AuthProvider from 'contexts/Auth.context';
import CategoryProvider, { useCategory } from 'contexts/Category.context';
import { useApp } from 'contexts/App.context';

// import Preloader from 'layouts/Preloader';
import CustomCursor from 'components/CustomCursor';
import Home from 'pages/Home/Home';
import Catalog from 'pages/Catalog/Catalog';
import Menu from 'layouts/Menu';
import LoginBtn from 'layouts/buttons/LoginBtn';
import AuthModal from 'layouts/modals/AuthModal';

import './App.scss';
import 'fontello/css/fontello.css';
import MenuBtn from 'layouts/buttons/MenuBtn';
import Logo from 'layouts/Logo';
import ProductList from 'pages/Catalog/page_components/product/ProductList';
import Category from 'pages/Catalog/page_components/category/Category';
import ProductDetails from 'pages/Catalog/page_components/product/ProductDetails';
import ExitBtn from 'layouts/buttons/ExitBtn';
import UserInfo from 'layouts/UserInfo';

const getCategoryFromURL = (url) => {
	let arr = url.split('/');
	return arr[arr.length - 1];
}

function App() {
	const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 });
	const [menuState, setMenuState] = useState(false);
	const [authModalState, setAuthModalState] = useState(false);
	const { visibleLink, setCategoryState } = useApp();
	
	const location = useLocation();
	useEffect(() => {
		const moveCursor = (e) => {
			const x = e.clientX - 25;
			const y = e.clientY - 25;
			setCursorXY({ x, y });
		}
		
		window.addEventListener('mousemove', moveCursor)
		return () => {
			window.removeEventListener('mousemove', moveCursor)
		}
	}, [])	

	useEffect(() => {
		setCategoryState(getCategoryFromURL(location.pathname));
		setMenuState(false);
	}, [location])
	return (
		<CategoryProvider >
			<div className="App">
				<AuthProvider>
					<CustomCursor position={cursorXY}/>
					<Link className="all_products_link" to='/products' style={{display: visibleLink ? 'block' : 'none' }} >
						<span>view all products</span>
					</Link>
					<Logo />
					<MenuBtn menuState={menuState} setMenuState={setMenuState}/>
					<Menu menuState={menuState}/>

					
						<AnimatePresence exitBeforeEnter>
							<Switch location={location} key={location.pathname}>
								<Route path='/' exact component={Home}/>
								<Route path='/categories' exact component={Category} />
								<Route path='/products' component={ProductList} />
								<Route path='/products/:categoryId' component={ProductList} />
								<Route path='/:categoryId/:productId' component={ProductDetails} />
							</Switch>
						</AnimatePresence>

					<AuthModal authModalState={authModalState} setAuthModalState={setAuthModalState} />
					<LoginBtn authModalState={authModalState} setAuthModalState={setAuthModalState} />
					
					{/* <Social /> */}
					{/* <Footer />	 */}

					<UserInfo />
					<ExitBtn />
				</AuthProvider>
			</div>
		</CategoryProvider>
	);
}

export default App;
