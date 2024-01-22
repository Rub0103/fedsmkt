export const TradeSections = () => {
	return (
		<div className='container hero_container'>
			<div className='hero_in flex flex-col justify-center align-center text-center c-white'>
				<h2 className='fs-md lh-md text-uppercase c-white-light fw-300 ls-1 mb-6'>
					Trade with
				</h2>
				<h3 className='fs-h-1 lh-h-1 fw-400 mb-7'>
					<strong>Zero Swaps</strong> on All XM Ultra Low
					<br /> Accounts for more than 25 instruments!
				</h3>
				<p className='fs-md lh-md mb-7'>
					Enjoy spreads <strong>as low as 0.6 pips</strong> and
					leverage up to 1000:1 on
					<br />
					instruments like{' '}
					<strong>EURUSD, USDJPY, EURJPY, GBPUSD</strong>, and{' '}
					<strong>Gold</strong>.
				</p>
				<button className='btn btn--wide btn--primary font-secondary mb-7'>
					Open Account
				</button>
				<p className='fs-sm lh-sm mb-4'>
					New to trading? Try a{' '}
					<a
						href='#'
						className='c-inherit'>
						Demo account
					</a>
					.
				</p>
				<p className='fs-xs lh-xs'>
					Terms and Conditions apply<span className='c-red'>*</span>.
					To read the full T&Cs,{' '}
					<a
						href='#'
						className='c-red'>
						click here
					</a>
					.
				</p>
			</div>
		</div>
	);
};
