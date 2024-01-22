interface IWidgetItem {
    coinName: string;
    coinSymbol: string;
    coinPrice: string;
    change: string;
}

export const WidgetItem: React.FC<IWidgetItem> = ({
    coinName,
    coinSymbol,
    coinPrice,
    change
}) => {
    const coinSymbolSvg = coinSymbol.toLocaleLowerCase()
    const isChangeNegative = change.includes('-')

    return (
        <div className='coinblock flex flex-col justify-start align-stretch grow-1 shrink-1 w-100 c-white'>
            <div className='coinblock_header flex justify-start align-center col-gap-2 mb-5'>
                <div className='coinblock_icon mr-1'>
                    <img className='img img--fill img--contain' src={`/src/assets/images/coins/${coinSymbolSvg}.svg`} alt='' />
                </div>
                <span className='block coinblock_shortname fs-sm lh-sm fw-500'>{coinSymbol}</span>
                <span className='block coinblock_fullname c-black bg-yellow-light fw-500 lh-1 text-uppercase'>{coinName}</span>
            </div>
            <hr className='hr hr-2 c-white-15 mb-3' />
            <span className='block coinblock_price fs-lg lh-lg mb-2 fw-700'>${coinPrice}</span>
            <span className={`block coinblock_percent fs-sm lh-sm c-${isChangeNegative ? 'red' : 'green'}-light`}><i className={`fa-2xs fa-solid fa-circle-chevron-${isChangeNegative ? 'down' : 'up'}`} /> {change}%</span>
        </div>
    );
};